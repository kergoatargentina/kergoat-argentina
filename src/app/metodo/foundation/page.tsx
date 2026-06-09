import PublicLayout from '@/components/PublicLayout'
import Link from 'next/link'

export const metadata = {
  title: 'Método Kergoat — Nivel Foundation | Kergoat Argentina',
}

export default function FoundationPage() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Hero */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-soft-apricot text-systemic-orange mb-6">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            <span className="text-xs font-bold tracking-widest uppercase">Nivel 01 — Foundation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-deep-navy mb-8 tracking-tight leading-tight">
            Ordenamiento y Coordinación Organizacional
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            El Nivel Foundation es la piedra angular del Método Kergoat. Aquí transformamos el caos operativo en una estructura sistémica escalable, diseñando los cimientos donde la autoridad y el propósito se alinean perfectamente.
          </p>
        </header>

        {/* Filosofía Foundation */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-deep-navy mb-6">Filosofía Foundation</h2>
              <div className="space-y-6">
                <p className="text-base text-on-surface-variant">
                  Creemos que la libertad empresarial no nace de la ausencia de reglas, sino de la perfección de la estructura. La filosofía Foundation busca erradicar la incertidumbre operativa mediante la definición clara de "Quién", "Cómo" y "Para Qué".
                </p>
                <div className="bg-soft-apricot p-8 rounded-xl border-l-4 border-systemic-orange">
                  <p className="text-lg italic text-deep-navy">
                    "Una organización sin cimientos es simplemente un grupo de personas trabajando duro en direcciones opuestas. Foundation crea el eje central."
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-deep-navy rounded-xl h-[400px] flex items-center justify-center">
                <div className="text-center text-white/30">
                  <span className="material-symbols-outlined text-9xl">corporate_fare</span>
                  <p className="text-sm mt-4">Imagen arquitectónica</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-2">Implementación</span>
            <h2 className="text-3xl font-semibold text-deep-navy">Gestión Sistémica de Procesos</h2>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Large Card */}
            <div className="col-span-12 md:col-span-8 bg-pure-white p-10 rounded-xl border border-deep-navy/10 hover:border-systemic-orange transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-deep-navy mb-4">Matriz de Roles Dinámicos</h3>
                  <p className="text-base text-on-surface-variant max-w-md">Eliminamos la ambigüedad definiendo responsabilidades no solo por cargo, sino por impacto sistémico y rendición de cuentas.</p>
                </div>
                <span className="material-symbols-outlined text-systemic-orange text-4xl">diversity_3</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'DISEÑO', value: 'Jerarquía Plana' },
                  { label: 'FLUJO', value: 'Owner de Proceso' },
                  { label: 'CONTROL', value: 'KPIs de Función' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 bg-background rounded-lg border border-outline-variant/30">
                    <span className="text-[10px] font-bold tracking-widest text-systemic-orange block mb-2">{label}</span>
                    <p className="text-base font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric Card */}
            <div className="col-span-12 md:col-span-4 bg-deep-navy p-10 rounded-xl text-pure-white flex flex-col justify-between">
              <span className="material-symbols-outlined text-systemic-orange text-4xl mb-8">analytics</span>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Métricas de Salud</h3>
                <p className="text-base text-white/70">Monitoreo constante del orden organizacional y la carga operativa.</p>
              </div>
            </div>

            {/* Process Card */}
            <div className="col-span-12 md:col-span-4 bg-soft-apricot p-10 rounded-xl border border-systemic-orange/20">
              <span className="material-symbols-outlined text-deep-navy text-4xl mb-8">rebase_edit</span>
              <h3 className="text-2xl font-semibold text-deep-navy mb-2">Manual de Procesos</h3>
              <p className="text-base text-on-surface-variant">Documentación viva que garantiza la repetibilidad y excelencia.</p>
            </div>

            {/* Image Card */}
            <div className="col-span-12 md:col-span-8 overflow-hidden rounded-xl relative h-[320px] bg-graphite">
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy to-transparent flex items-center p-12">
                <div className="max-w-xs">
                  <h3 className="text-2xl font-semibold text-pure-white mb-4">Sincronización Digital</h3>
                  <button className="liquid-glass text-pure-white px-6 py-2 rounded-lg text-xs font-bold tracking-widest">VER MÓDULO</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rutinas de Gestión */}
        <section className="mb-32 py-16 bg-surface-container-low rounded-3xl px-8 md:px-16 border border-outline-variant/20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-deep-navy mb-4">Rutinas de Gestión: El Ritmo de la Empresa</h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">Implementamos ciclos de coordinación que aseguran que la estrategia baje a la ejecución sin fricciones.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {[
              {
                cadencia: 'DIARIO',
                color: 'border-systemic-orange',
                title: 'Check-in Operativo',
                desc: '15 minutos para alinear objetivos diarios y remover bloqueos inmediatos.',
                items: ['Alineación rápida', 'Foco en prioridades'],
                iconColor: 'text-systemic-orange',
              },
              {
                cadencia: 'SEMANAL',
                color: 'border-deep-navy',
                title: 'Sincronización Táctica',
                desc: 'Revisión de indicadores clave y ajuste de la hoja de ruta semanal.',
                items: ['Análisis de KPIs', 'Gestión de proyectos'],
                iconColor: 'text-deep-navy',
              },
              {
                cadencia: 'MENSUAL',
                color: 'border-systemic-orange',
                title: 'Comité Sistémico',
                desc: 'Evaluación profunda del nivel Foundation y preparación para el escalamiento.',
                items: ['Visión estratégica', 'Feedback 360°'],
                iconColor: 'text-systemic-orange',
              },
            ].map(({ cadencia, color, title, desc, items, iconColor }) => (
              <div key={cadencia} className={`flex-1 bg-pure-white p-8 rounded-2xl shadow-sm border-t-4 ${color} flex flex-col`}>
                <span className={`text-xs font-bold tracking-widest uppercase ${iconColor} mb-4`}>{cadencia}</span>
                <h4 className="text-2xl font-semibold text-deep-navy mb-4">{title}</h4>
                <p className="text-base text-on-surface-variant mb-6">{desc}</p>
                <ul className="mt-auto space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-base">
                      <span className={`material-symbols-outlined ${iconColor} text-sm`}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Impacto Foundation */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-2 bg-deep-navy rounded-3xl overflow-hidden p-2">
            <div className="w-full md:w-5/12 h-[400px] md:h-auto bg-graphite rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-9xl text-white/20">business</span>
            </div>
            <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-pure-white mb-8">El Impacto Foundation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Escalabilidad Real', desc: 'Preparamos el negocio para crecer x10 sin colapsar por falta de estructura.' },
                  { title: 'Autonomía Directiva', desc: 'Los líderes se liberan de la micro-gestión para enfocarse en la estrategia.' },
                  { title: 'Cultura de Orden', desc: 'Se establece un lenguaje común y una ética de trabajo profesionalizada.' },
                  { title: 'Valor de Mercado', desc: 'Una empresa con procesos Foundation es un activo mucho más valioso.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <h5 className="text-lg font-bold text-systemic-orange mb-2">{title}</h5>
                    <p className="text-base text-white/70">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/contacto"
                  className="liquid-glass-primary text-pure-white px-10 py-4 rounded-xl font-bold inline-flex items-center gap-3"
                >
                  Comenzar con Foundation
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  )
}
