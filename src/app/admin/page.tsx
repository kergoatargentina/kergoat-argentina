'use client'

import { useEffect, useState } from 'react'
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
}

export default function AdminPage() {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [casos, setCasos] = useState<Caso[]>([])
  const [editingMetric, setEditingMetric] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [activeTab, setActiveTab] = useState<'metrics' | 'casos'>('metrics')
  const supabase = createClient()

  useEffect(() => {
    supabase.from('metrics').select('*').order('label').then(({ data }) => {
      if (data) setMetrics(data)
    })
    supabase.from('casos').select('*').order('orden').then(({ data }) => {
      if (data) setCasos(data)
    })
  }, [])

  async function saveMetric(metric: Metric) {
    setSaving(true)
    const { error } = await supabase
      .from('metrics')
      .update({ value: metric.value, trend: metric.trend, updated_at: new Date().toISOString() })
      .eq('id', metric.id)
    setSaving(false)
    setEditingMetric(null)
    setSaveMsg(error ? 'Error al guardar' : 'Guardado correctamente')
    setTimeout(() => setSaveMsg(''), 3000)
  }

  function updateLocalMetric(id: string, field: 'value' | 'trend', val: string) {
    setMetrics(prev => prev.map(m => m.id === id ? { ...m, [field]: val } : m))
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
        updated_at: new Date().toISOString(),
      })
      .eq('id', caso.id)
    setSaving(false)
    setSaveMsg(error ? 'Error al guardar' : 'Caso actualizado')
    setTimeout(() => setSaveMsg(''), 3000)
  }

  function updateLocalCaso(id: string, field: keyof Caso, val: string | boolean) {
    setCasos(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c))
  }

  const pages = [
    { icon: 'home', label: 'Home', last: 'Hace 2 horas' },
    { icon: 'schema', label: 'El Método', last: 'Ayer' },
    { icon: 'verified', label: 'Casos de Éxito', last: '5 días atrás' },
    { icon: 'mail', label: 'Contacto', last: 'Sin cambios' },
  ]

  return (
    <div className="flex min-h-screen bg-surface">

      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-deep-navy/10 flex flex-col p-4 z-40">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-deep-navy">Panel de Control</h1>
          <p className="text-xs font-bold tracking-widest text-on-surface-variant/70 uppercase mt-1">Kergoat Argentina</p>
        </div>

        <div className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'metrics' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-soft-apricot'}`}
          >
            <span className="material-symbols-outlined">analytics</span>
            Métricas
          </button>
          <button
            onClick={() => setActiveTab('casos')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'casos' ? 'bg-secondary-container text-on-secondary-container font-bold' : 'text-on-surface-variant hover:bg-soft-apricot'}`}
          >
            <span className="material-symbols-outlined">verified</span>
            Casos de Éxito
          </button>
          <a href="#pages" className="w-full flex items-center gap-3 p-3 rounded-lg text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:bg-soft-apricot transition-all">
            <span className="material-symbols-outlined">layers</span>
            Páginas
          </a>
        </div>

        <div className="border-t border-deep-navy/10 pt-4">
          <div className="flex items-center gap-3 p-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-deep-navy/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-deep-navy">person</span>
            </div>
            <div>
              <p className="text-sm font-bold text-deep-navy">Admin Kergoat</p>
              <p className="text-xs text-on-surface-variant/60">Consultor Senior</p>
            </div>
          </div>
          <a href="/" className="w-full flex items-center gap-3 p-3 rounded-lg text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:bg-soft-apricot transition-all">
            <span className="material-symbols-outlined">public</span>
            Ver sitio
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="ml-64 flex-1">
        <header className="h-20 flex justify-between items-center px-12 bg-pure-white border-b border-deep-navy/10">
          <h2 className="text-2xl font-bold text-deep-navy">Resumen Sistémico</h2>
          {saveMsg && (
            <div className={`px-4 py-2 rounded-lg text-sm font-bold ${saveMsg.includes('Error') ? 'bg-error-container text-error' : 'bg-soft-apricot text-systemic-orange'}`}>
              {saveMsg}
            </div>
          )}
        </header>

        <div className="p-12 max-w-[1280px]">

          {/* Métricas */}
          {activeTab === 'metrics' && (
            <>
              <h3 className="text-xl font-bold text-deep-navy mb-6">Métricas del Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {metrics.map((metric) => (
                  <div key={metric.id} className="bg-pure-white border-t-[3px] border-deep-navy p-8 shadow-sm">
                    <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">{metric.label}</p>

                    {editingMetric === metric.id ? (
                      <div className="space-y-4">
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-3xl font-bold text-deep-navy focus:outline-none focus:border-systemic-orange"
                          value={metric.value}
                          onChange={e => updateLocalMetric(metric.id, 'value', e.target.value)}
                        />
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm text-on-surface-variant focus:outline-none focus:border-systemic-orange"
                          value={metric.trend ?? ''}
                          placeholder="Tendencia (opcional)"
                          onChange={e => updateLocalMetric(metric.id, 'trend', e.target.value)}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveMetric(metric)}
                            disabled={saving}
                            className="bg-systemic-orange text-white px-4 py-2 text-xs font-bold rounded hover:bg-deep-navy transition-all disabled:opacity-50"
                          >
                            {saving ? 'Guardando...' : 'Guardar'}
                          </button>
                          <button onClick={() => setEditingMetric(null)} className="border border-deep-navy/20 px-4 py-2 text-xs font-bold rounded hover:bg-soft-apricot transition-all">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-5xl font-bold text-deep-navy mb-4">{metric.value}</div>
                        {metric.trend && <p className="text-sm text-on-surface-variant italic mb-4">{metric.trend}</p>}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-on-surface-variant/50">
                            {new Date(metric.updated_at).toLocaleDateString('es-AR')}
                          </span>
                          <button
                            onClick={() => setEditingMetric(metric.id)}
                            className="p-2 hover:bg-surface-container text-deep-navy rounded transition-all"
                          >
                            <span className="material-symbols-outlined text-base">edit</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Casos de Éxito */}
          {activeTab === 'casos' && (
            <>
              <h3 className="text-xl font-bold text-deep-navy mb-6">Casos de Éxito</h3>
              <div className="space-y-4">
                {casos.map((caso) => (
                  <div key={caso.id} className="bg-pure-white border border-deep-navy/10 p-8 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Sector</label>
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-systemic-orange"
                          value={caso.sector}
                          onChange={e => updateLocalCaso(caso.id, 'sector', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Título</label>
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-systemic-orange"
                          value={caso.title}
                          onChange={e => updateLocalCaso(caso.id, 'title', e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Descripción</label>
                        <textarea
                          rows={3}
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-systemic-orange resize-none"
                          value={caso.description}
                          onChange={e => updateLocalCaso(caso.id, 'description', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Métrica (valor)</label>
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-systemic-orange"
                          value={caso.metric_value}
                          onChange={e => updateLocalCaso(caso.id, 'metric_value', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Métrica (etiqueta)</label>
                        <input
                          className="w-full border border-outline/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-systemic-orange"
                          value={caso.metric_label}
                          onChange={e => updateLocalCaso(caso.id, 'metric_label', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-deep-navy/5">
                      <label className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <input
                          type="checkbox"
                          checked={caso.featured}
                          onChange={e => updateLocalCaso(caso.id, 'featured', e.target.checked)}
                          className="accent-systemic-orange"
                        />
                        Caso destacado (aparece primero)
                      </label>
                      <button
                        onClick={() => saveCaso(caso)}
                        disabled={saving}
                        className="bg-systemic-orange text-white px-6 py-2 text-xs font-bold rounded hover:bg-deep-navy transition-all disabled:opacity-50"
                      >
                        {saving ? 'Guardando...' : 'Guardar cambios'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Páginas */}
          <div id="pages" className="mt-12">
            <h3 className="text-xl font-bold text-deep-navy mb-6">Páginas del Sitio</h3>
            <div className="bg-pure-white border border-deep-navy/10 p-8 rounded-xl space-y-4">
              {pages.map(({ icon, label, last }) => (
                <div key={label} className="flex items-center justify-between p-4 bg-surface-container-lowest border border-deep-navy/5 rounded-lg hover:border-systemic-orange/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-soft-apricot text-systemic-orange rounded">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-deep-navy">{label}</p>
                      <p className="text-sm text-on-surface-variant">Última edición: {last}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={`/${label.toLowerCase().replace(' ', '-').replace('é', 'e')}`} target="_blank" className="p-2 hover:bg-surface-container text-deep-navy rounded">
                      <span className="material-symbols-outlined">visibility</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
