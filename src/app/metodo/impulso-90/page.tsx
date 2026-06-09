import PublicLayout from '@/components/PublicLayout'
import Link from 'next/link'

export const metadata = {
  title: 'Impulso 90 | Kergoat Argentina',
}

export default function Impulso90Page() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Hero */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-soft-apricot text-systemic-orange mb-6">
            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
            <span className="text-xs font-bold tracking-widest uppercase">Nivel 02 — Impulso 90</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-deep-navy mb-8 tracking-tight leading-tight">
            Escalamiento Sistémico en 90 Días
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Impulso 90 es el programa de aceleración estructural de Kergoat. En 90 días transformamos la estructura comercial y operativa para generar crecimiento sostenible y medible.
          </p>
        </header>

        {/* Fases del programa */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Estructura del Programa</span>
            <h2 className="text-3xl font-semibold text-deep-navy">Las 3 Fases de Impulso 90</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                dias: 'Días 1–30',
                title: 'Diagnóstico y Diseño',
                desc: 'Auditoría sistémica completa. Identificación de cuellos de botella y diseño del plan de aceleración a medida.',
                icon: 'search',
                items: ['Mapeo de procesos actuales', 'Identificación de fugas operativas', 'Diseño del roadmap de 90 días'],
              },
              {
                num: '02',
                dias: 'Días 31–60',
                title: 'Implementación y Ajuste',
                desc: 'Puesta en marcha del plan con acompañamiento semanal. Ajustes en tiempo real según resultados.',
                icon: 'build',
                items: ['Activación de procesos nuevos', 'Capacitación de mandos medios', 'KPIs semanales de seguimiento'],
              },
              {
                num: '03',
                dias: 'Días 61–90',
                title: 'Escalamiento y Entrega',
                desc: 'Consolidación del sistema, medición de impacto y transferencia de autonomía al equipo directivo.',
                icon: 'trending_up',
                items: ['Informe de impacto sistémico', 'Protocolo de mantenimiento', 'Plan de escalamiento siguiente'],
              },
            ].map(({ num, dias, title, desc, icon, items }) => (
              <div key={num} className="bg-pure-white p-10 rounded-xl border border-deep-navy/10 hover:border-systemic-orange/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-systemic-orange" />
                <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-2">{dias}</span>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-deep-navy">{title}</h3>
                  <span className="material-symbols-outlined text-systemic-orange text-3xl">{icon}</span>
                </div>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">{desc}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="material-symbols-outlined text-systemic-orange text-base mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-5xl font-bold text-deep-navy/5 absolute bottom-4 right-6">{num}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Resultados esperados */}
        <section className="mb-32 bg-deep-navy rounded-3xl p-10 md:p-16 text-pure-white">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Resultados Promedio</span>
            <h2 className="text-3xl font-semibold">Qué esperar al finalizar Impulso 90</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '+40%', label: 'Eficiencia operativa' },
              { value: '3.2x', label: 'ROI estimado' },
              { value: '-30%', label: 'Costos de estructura' },
              { value: '100%', label: 'Procesos documentados' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl font-bold text-systemic-orange mb-3">{value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Para quién es */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Perfil Ideal</span>
              <h2 className="text-3xl font-semibold text-deep-navy mb-6">¿Impulso 90 es para tu empresa?</h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                El programa está diseñado para empresas que ya tienen operación establecida pero sienten que el crecimiento está limitado por falta de estructura y procesos claros.
              </p>
              <div className="space-y-4">
                {[
                  'Tu empresa factura pero no escala',
                  'Tenés un equipo pero seguís siendo el cuello de botella',
                  'Los resultados dependen de personas, no de procesos',
                  'Querés profesionalizar antes de abrir nuevas sucursales o contratar',
                  'Necesitás métricas reales para tomar decisiones',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-systemic-orange text-xl mt-0.5">check_circle</span>
                    <span className="text-base text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-soft-apricot rounded-2xl p-10 border border-systemic-orange/20">
              <h3 className="text-2xl font-semibold text-deep-navy mb-8">Comenzar el proceso</h3>
              <div className="space-y-6 mb-10">
                {[
                  { step: '1', text: 'Completás el formulario de pre-diagnóstico (10 min)' },
                  { step: '2', text: 'Un consultor Kergoat te contacta en 48hs' },
                  { step: '3', text: 'Realizamos el diagnóstico inicial sin costo' },
                  { step: '4', text: 'Presentamos el plan de Impulso 90 a medida' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-deep-navy text-pure-white flex items-center justify-center font-bold text-xs shrink-0">{step}</div>
                    <span className="text-base text-on-surface-variant pt-1">{text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contacto"
                className="w-full bg-systemic-orange text-pure-white py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-deep-navy transition-all duration-300"
              >
                QUIERO ARRANCAR IMPULSO 90
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}
