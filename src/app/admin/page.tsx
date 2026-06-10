'use client'

import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'

type Metric = {
  id: string
  key: string
  label: string
  value: string
  trend: string | null
  updated_at: string
}

type Caso = {
  id: string
  sector: string
  title: string
  description: string
  metric_value: string
  metric_label: string
  featured: boolean
  orden: number
  image_url: string | null
}

const emptyCaso: Omit<Caso, 'id'> = {
  sector: '',
  title: '',
  description: '',
  metric_value: '',
  metric_label: '',
  featured: false,
  orden: 0,
  image_url: null,
}

export default function AdminPage() {
  const supabase = createClient()

  const [metrics, setMetrics] = useState<Metric[]>([])
  const [casos, setCasos] = useState<Caso[]>([])
  const [activeTab, setActiveTab] = useState<'metrics' | 'casos'>('metrics')

  const [editingMetric, setEditingMetric] = useState<string | null>(null)
  const [editingCaso, setEditingCaso] = useState<string | null>(null)
  const [creatingCaso, setCreatingCaso] = useState(false)
  const [newCaso, setNewCaso] = useState<Omit<Caso, 'id'>>(emptyCaso)
  const [deletingCaso, setDeletingCaso] = useState<string | null>(null)

  const [saving, setSaving] = useState(false)
  const [uploadingFor, setUploadingFor] = useState<string | 'new' | null>(null)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const newFileInputRef = useRef<HTMLInputElement>(null)

  function showToast(msg: string, ok = true) {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3000)
  }

  async function loadData() {
    const [{ data: m }, { data: c }] = await Promise.all([
      supabase.from('metrics').select('*').order('label'),
      supabase.from('casos').select('*').order('orden'),
    ])
    if (m) setMetrics(m)
    if (c) setCasos(c)
  }

  useEffect(() => { loadData() }, [])

  // ── METRICS ──────────────────────────────────────────────
  function updateLocalMetric(id: string, field: 'value' | 'trend', val: string) {
    setMetrics(prev => prev.map(m => m.id === id ? { ...m, [field]: val } : m))
  }

  async function saveMetric(metric: Metric) {
    setSaving(true)
    const { error } = await supabase
      .from('metrics')
      .update({ value: metric.value, trend: metric.trend, updated_at: new Date().toISOString() })
      .eq('id', metric.id)
    setSaving(false)
    setEditingMetric(null)
    showToast(error ? 'Error al guardar' : 'Métrica actualizada', !error)
  }

  // ── CASOS ─────────────────────────────────────────────────
  function updateLocalCaso(id: string, field: keyof Caso, val: string | boolean | null) {
    setCasos(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c))
  }

  async function saveCaso(caso: Caso) {
    setSaving(true)
    const { error } = await supabase
      .from('casos')
      .update({
        sector: caso.sector,
        title: caso.title,
        description: caso.description,
        metric_value: caso.metric_value,
        metric_label: caso.metric_label,
        featured: caso.featured,
        image_url: caso.image_url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', caso.id)
    setSaving(false)
    setEditingCaso(null)
    showToast(error ? 'Error al guardar' : 'Caso actualizado', !error)
  }

  async function createCaso() {
    if (!newCaso.title || !newCaso.sector) {
      showToast('Sector y título son obligatorios', false)
      return
    }
    setSaving(true)
    const { error } = await supabase.from('casos').insert({
      ...newCaso,
      orden: casos.length,
    })
    setSaving(false)
    if (!error) {
      setCreatingCaso(false)
      setNewCaso(emptyCaso)
      showToast('Caso creado')
      loadData()
    } else {
      showToast('Error al crear el caso', false)
    }
  }

  async function confirmDeleteCaso(id: string) {
    setSaving(true)
    const caso = casos.find(c => c.id === id)
    // Delete image from storage if exists
    if (caso?.image_url) {
      const path = caso.image_url.split('/casos/')[1]
      if (path) await supabase.storage.from('casos').remove([path])
    }
    const { error } = await supabase.from('casos').delete().eq('id', id)
    setSaving(false)
    setDeletingCaso(null)
    if (!error) {
      showToast('Caso eliminado')
      loadData()
    } else {
      showToast('Error al eliminar', false)
    }
  }

  // ── IMAGE UPLOAD ──────────────────────────────────────────
  async function uploadImage(file: File, casoId: string | 'new') {
    setUploadingFor(casoId)
    const ext = file.name.split('.').pop()
    const path = `${casoId === 'new' ? 'temp' : casoId}-${Date.now()}.${ext}`

    const { error: upErr } = await supabase.storage.from('casos').upload(path, file, { upsert: true })
    if (upErr) {
      showToast('Error al subir imagen', false)
      setUploadingFor(null)
      return
    }

    const { data: urlData } = supabase.storage.from('casos').getPublicUrl(path)
    const url = urlData.publicUrl

    if (casoId === 'new') {
      setNewCaso(prev => ({ ...prev, image_url: url }))
    } else {
      updateLocalCaso(casoId, 'image_url', url)
    }
    setUploadingFor(null)
    showToast('Imagen subida — guardá para confirmar')
  }

  // ── SIDEBAR LINKS ─────────────────────────────────────────
  const navItems = [
    { id: 'metrics', icon: 'analytics', label: 'Métricas' },
    { id: 'casos', icon: 'verified', label: 'Casos de Éxito' },
  ] as const

  return (
    <div className="flex min-h-screen" style={{ background: '#f6f3f2' }}>

      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-pure-white border-r border-deep-navy/10 flex flex-col p-6 z-40 shadow-sm">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-systemic-orange uppercase mb-1">Panel de Control</p>
          <h1 className="text-xl font-bold text-deep-navy">Kergoat Argentina</h1>
        </div>

        <div className="flex-1 space-y-1">
          {navItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === id
                  ? 'bg-deep-navy text-white'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        <div className="border-t border-deep-navy/10 pt-4 space-y-1">
          <a
            href="/"
            target="_blank"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all"
          >
            <span className="material-symbols-outlined text-xl">open_in_new</span>
            Ver sitio público
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="ml-64 flex-1 min-h-screen">

        {/* Header */}
        <header className="h-16 flex items-center justify-between px-10 bg-pure-white border-b border-deep-navy/10 sticky top-0 z-30">
          <h2 className="text-lg font-bold text-deep-navy">
            {activeTab === 'metrics' ? 'Métricas del sitio' : 'Casos de Éxito'}
          </h2>
          <div className="flex items-center gap-4">
            {toast && (
              <div className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                toast.ok ? 'bg-soft-apricot text-systemic-orange' : 'bg-error-container text-error'
              }`}>
                {toast.msg}
              </div>
            )}
            {activeTab === 'casos' && (
              <button
                onClick={() => { setCreatingCaso(true); setEditingCaso(null) }}
                className="flex items-center gap-2 bg-systemic-orange text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-deep-navy transition-all"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Nuevo caso
              </button>
            )}
          </div>
        </header>

        <div className="p-10 max-w-5xl">

          {/* ── MÉTRICAS ─────────────────────────── */}
          {activeTab === 'metrics' && (
            <div>
              <p className="text-sm text-on-surface-variant mb-6">
                Estos números aparecen en el Hero de la página de inicio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric) => (
                  <div key={metric.id} className="bg-pure-white rounded-2xl border border-deep-navy/10 p-8 shadow-sm">
                    <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-3">{metric.label}</p>

                    {editingMetric === metric.id ? (
                      <div className="space-y-3">
                        <input
                          className="w-full border border-outline/40 rounded-xl px-4 py-3 text-3xl font-bold text-deep-navy focus:outline-none focus:border-systemic-orange"
                          value={metric.value}
                          onChange={e => updateLocalMetric(metric.id, 'value', e.target.value)}
                        />
                        <input
                          className="w-full border border-outline/40 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-systemic-orange"
                          value={metric.trend ?? ''}
                          placeholder="Ej: +12% vs año anterior"
                          onChange={e => updateLocalMetric(metric.id, 'trend', e.target.value)}
                        />
                        <div className="flex gap-2 pt-1">
                          <button
                            onClick={() => saveMetric(metric)}
                            disabled={saving}
                            className="bg-systemic-orange text-white px-5 py-2 text-xs font-bold rounded-lg hover:bg-deep-navy transition-all disabled:opacity-50"
                          >
                            {saving ? 'Guardando...' : 'Guardar'}
                          </button>
                          <button
                            onClick={() => setEditingMetric(null)}
                            className="border border-deep-navy/20 px-5 py-2 text-xs font-bold rounded-lg hover:bg-surface-container-low transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-5xl font-bold text-deep-navy mb-2">{metric.value}</div>
                        {metric.trend && <p className="text-sm text-on-surface-variant italic mb-3">{metric.trend}</p>}
                        <div className="flex items-center justify-between pt-2 border-t border-deep-navy/5">
                          <span className="text-xs text-on-surface-variant/50">
                            {new Date(metric.updated_at).toLocaleDateString('es-AR')}
                          </span>
                          <button
                            onClick={() => setEditingMetric(metric.id)}
                            className="p-2 hover:bg-surface-container-low text-deep-navy rounded-lg transition-all"
                          >
                            <span className="material-symbols-outlined text-base">edit</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CASOS ────────────────────────────── */}
          {activeTab === 'casos' && (
            <div className="space-y-4">

              {/* Form: Nuevo caso */}
              {creatingCaso && (
                <div className="bg-pure-white rounded-2xl border-2 border-systemic-orange/40 p-8 shadow-sm">
                  <h3 className="text-base font-bold text-deep-navy mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-systemic-orange">add_circle</span>
                    Nuevo caso de éxito
                  </h3>
                  <CasoForm
                    caso={newCaso as Caso}
                    onChange={(field, val) => setNewCaso(prev => ({ ...prev, [field]: val }))}
                    onUpload={async (file) => uploadImage(file, 'new')}
                    uploading={uploadingFor === 'new'}
                    fileInputRef={newFileInputRef}
                  />
                  <div className="flex gap-3 mt-6 pt-4 border-t border-deep-navy/5">
                    <button
                      onClick={createCaso}
                      disabled={saving}
                      className="bg-systemic-orange text-white px-6 py-2.5 text-sm font-bold rounded-xl hover:bg-deep-navy transition-all disabled:opacity-50"
                    >
                      {saving ? 'Creando...' : 'Crear caso'}
                    </button>
                    <button
                      onClick={() => { setCreatingCaso(false); setNewCaso(emptyCaso) }}
                      className="border border-deep-navy/20 px-6 py-2.5 text-sm font-bold rounded-xl hover:bg-surface-container-low transition-all"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}

              {/* List: casos existentes */}
              {casos.length === 0 && !creatingCaso && (
                <div className="bg-pure-white rounded-2xl border border-deep-navy/10 p-16 text-center">
                  <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 block mb-4">inbox</span>
                  <p className="text-on-surface-variant font-bold">No hay casos cargados.</p>
                  <p className="text-sm text-on-surface-variant/60 mt-1">Hacé clic en "Nuevo caso" para agregar el primero.</p>
                </div>
              )}

              {casos.map((caso) => (
                <div key={caso.id} className="bg-pure-white rounded-2xl border border-deep-navy/10 shadow-sm overflow-hidden">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-8 py-4 border-b border-deep-navy/5">
                    <div className="flex items-center gap-3">
                      {caso.image_url
                        ? <img src={caso.image_url} alt="" className="w-10 h-10 rounded-lg object-cover" />
                        : <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-surface-variant/40">image</span>
                          </div>
                      }
                      <div>
                        <p className="font-bold text-deep-navy">{caso.title || 'Sin título'}</p>
                        <p className="text-xs text-systemic-orange font-bold tracking-widest uppercase">{caso.sector || 'Sin sector'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {caso.featured && (
                        <span className="text-xs font-bold tracking-widest uppercase bg-soft-apricot text-systemic-orange px-3 py-1 rounded-full">
                          Destacado
                        </span>
                      )}
                      <button
                        onClick={() => setEditingCaso(editingCaso === caso.id ? null : caso.id)}
                        className="p-2 hover:bg-surface-container-low rounded-lg transition-all text-deep-navy"
                      >
                        <span className="material-symbols-outlined text-base">
                          {editingCaso === caso.id ? 'expand_less' : 'edit'}
                        </span>
                      </button>
                      <button
                        onClick={() => setDeletingCaso(caso.id)}
                        className="p-2 hover:bg-error-container rounded-lg transition-all text-error"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Edit form */}
                  {editingCaso === caso.id && (
                    <div className="p-8">
                      <CasoForm
                        caso={caso}
                        onChange={(field, val) => updateLocalCaso(caso.id, field, val)}
                        onUpload={(file) => uploadImage(file, caso.id)}
                        uploading={uploadingFor === caso.id}
                        fileInputRef={fileInputRef}
                      />
                      <div className="flex gap-3 mt-6 pt-4 border-t border-deep-navy/5">
                        <button
                          onClick={() => saveCaso(caso)}
                          disabled={saving}
                          className="bg-systemic-orange text-white px-6 py-2.5 text-sm font-bold rounded-xl hover:bg-deep-navy transition-all disabled:opacity-50"
                        >
                          {saving ? 'Guardando...' : 'Guardar cambios'}
                        </button>
                        <button
                          onClick={() => setEditingCaso(null)}
                          className="border border-deep-navy/20 px-6 py-2.5 text-sm font-bold rounded-xl hover:bg-surface-container-low transition-all"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>
          )}
        </div>
      </main>

      {/* Delete confirmation modal */}
      {deletingCaso && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-pure-white rounded-2xl p-8 max-w-sm w-full shadow-xl">
            <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <h3 className="text-lg font-bold text-deep-navy mb-2">¿Eliminar este caso?</h3>
            <p className="text-sm text-on-surface-variant mb-6">Esta acción no se puede deshacer. El caso y su imagen serán eliminados permanentemente.</p>
            <div className="flex gap-3">
              <button
                onClick={() => confirmDeleteCaso(deletingCaso)}
                disabled={saving}
                className="flex-1 bg-error text-white py-2.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
              >
                {saving ? 'Eliminando...' : 'Sí, eliminar'}
              </button>
              <button
                onClick={() => setDeletingCaso(null)}
                className="flex-1 border border-deep-navy/20 py-2.5 text-sm font-bold rounded-xl hover:bg-surface-container-low transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── CASO FORM COMPONENT ───────────────────────────────────────
function CasoForm({
  caso,
  onChange,
  onUpload,
  uploading,
  fileInputRef,
}: {
  caso: Caso | Omit<Caso, 'id'>
  onChange: (field: keyof Caso, val: string | boolean | null) => void
  onUpload: (file: File) => void
  uploading: boolean
  fileInputRef: React.RefObject<HTMLInputElement | null>
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Sector *</label>
          <input
            className="w-full border border-outline/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-systemic-orange transition-colors"
            value={caso.sector}
            placeholder="Ej: LOGÍSTICA, RETAIL, TECH"
            onChange={e => onChange('sector', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Título *</label>
          <input
            className="w-full border border-outline/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-systemic-orange transition-colors"
            value={caso.title}
            placeholder="Ej: Optimización Estructural 180°"
            onChange={e => onChange('title', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Descripción</label>
          <textarea
            rows={3}
            className="w-full border border-outline/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-systemic-orange transition-colors resize-none"
            value={caso.description}
            placeholder="Resumen del caso y resultados obtenidos..."
            onChange={e => onChange('description', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Métrica (valor)</label>
          <input
            className="w-full border border-outline/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-systemic-orange transition-colors"
            value={caso.metric_value}
            placeholder="Ej: +45%, 3.2x, 90 Días"
            onChange={e => onChange('metric_value', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Métrica (etiqueta)</label>
          <input
            className="w-full border border-outline/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-systemic-orange transition-colors"
            value={caso.metric_label}
            placeholder="Ej: Eficiencia, ROI, Implementación"
            onChange={e => onChange('metric_label', e.target.value)}
          />
        </div>
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Imagen del caso</label>
        <div className="flex items-start gap-4">
          {caso.image_url
            ? <img src={caso.image_url} alt="preview" className="w-24 h-24 rounded-xl object-cover border border-deep-navy/10 shrink-0" />
            : <div className="w-24 h-24 rounded-xl bg-surface-container-low border border-deep-navy/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant/30">image</span>
              </div>
          }
          <div className="flex-1">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0]
                if (file) onUpload(file)
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="flex items-center gap-2 border border-deep-navy/20 px-5 py-2.5 text-sm font-bold rounded-xl hover:bg-surface-container-low transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-base">upload</span>
              {uploading ? 'Subiendo...' : caso.image_url ? 'Cambiar imagen' : 'Subir imagen'}
            </button>
            {caso.image_url && (
              <button
                type="button"
                onClick={() => onChange('image_url', null)}
                className="mt-2 text-xs text-error hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
                Quitar imagen
              </button>
            )}
            <p className="text-xs text-on-surface-variant/60 mt-2">JPG, PNG o WebP. Recomendado: 800×600px.</p>
          </div>
        </div>
      </div>

      {/* Featured toggle */}
      <label className="flex items-center gap-3 cursor-pointer">
        <div
          onClick={() => onChange('featured', !caso.featured)}
          className={`w-12 h-6 rounded-full transition-all relative cursor-pointer ${caso.featured ? 'bg-systemic-orange' : 'bg-surface-container-highest'}`}
        >
          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${caso.featured ? 'left-7' : 'left-1'}`} />
        </div>
        <span className="text-sm font-bold text-on-surface-variant">Caso destacado (aparece primero y en grande)</span>
      </label>
    </div>
  )
}
