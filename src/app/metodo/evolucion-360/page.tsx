import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Evolución 360 — Salud Sistémica Recurrente | Kergoat Argentina',
}

const pilares = [
  { icon: 'monitoring', title: 'Revisión Trimestral de Salud Sistémica', desc: 'Cada trimestre auditamos el estado real de la organización: procesos, liderazgo, indicadores y cultura. Detectamos desviaciones antes de que se conviertan en crisis.' },
  { icon: 'leaderboard', title: 'Tablero de Dirección Activo', desc: 'Diseñamos e instalamos indicadores de conducción que permiten a los directivos tomar decisiones con información real, no con intuición.' },
  { icon: 'groups', title: 'Acompañamiento del Equipo Directivo', desc: 'Trabajo continuo con los líderes de la organización para sostener los estándares alcanzados y seguir elevando la capacidad de conducción en cada ciclo.' },
  { icon: 'autorenew', title: 'Ciclos de Mejora Continua', desc: 'Cada revisión genera un plan de acción trimestral. La organización no vuelve al desorden porque el sistema de mejora está instalado y es recurrente.' },
]

const metricas = [
  { value: '4x', label: 'Revisiones sistémicas al año' },
  { value: '0', label: 'Recaídas al desorden' },
  { value: '+30%', label: 'Capacidad de conducción acumulada' },
  { value: '100%', label: 'Indicadores activos y visibles' },
]

const perfil = [
  'Ya completaste Impulso 90, Foundation, Growth, Corporate o International',
  'No querés perder los cambios logrados con el tiempo',
  'Tu empresa crece y necesitás un sistema de seguimiento permanente',
  'Querés institucionalizar la mejora continua como parte del negocio',
  'Buscás un socio externo que te dé la mirada sistémica de manera recurrente',
]

const trimestres = [
  { q: 'Q1', title: 'Auditoría y Reseteo', desc: 'Revisión profunda del estado sistémico. Identificación de desviaciones y rediseño de prioridades.' },
  { q: 'Q2', title: 'Ajuste y Aceleración', desc: 'Implementación de mejoras del Q1. Revisión de indicadores y ajuste del tablero de dirección.' },
  { q: 'Q3', title: 'Consolidación', desc: 'Verificación de resultados. Instalación de nuevos procesos y elevación del estándar de conducción.' },
  { q: 'Q4', title: 'Proyección del Siguiente Ciclo', desc: 'Cierre de año sistémico, celebración de logros y diseño del plan de evolución para el próximo año.' },
]

export default function Evolucion360Page() {
  return (
    <PublicLayout>

      {/* 1. Hero */}
      <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <ParticleCanvas opacity={0.4} />
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(100px)' }} />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <Link href="/metodo" className="inline-flex items-center gap-2 text-white/40 hover:text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Programas
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 ml-6">
              <span className="material-symbols-outlined text-sm">autorenew</span>
              Nivel 06 — Evolución 360
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Salud Sistémica Recurrente
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Tu empresa ya transformó su estructura. Evolución 360 garantiza que no vuelva al desorden. Un ciclo trimestral de revisión, ajuste y elevación sistémica que convierte la mejora continua en parte del ADN organizacional.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Los 4 trimestres — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Ciclo Anual</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Un trimestre a la vez, todo el año</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Cada trimestre tiene un foco claro. El ciclo completo garantiza que la organización nunca pierda su norte sistémico.
              </p>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
            {trimestres.map(({ q, title, desc }) => (
              <StaggerItem key={q}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-7 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-systemic-orange rounded-full" />
                    <div className="text-4xl font-black text-systemic-orange mb-4">{q}</div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                </MouseGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Pilares — navy */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Qué incluye Evolución 360</span>
              <h2 className="text-4xl font-semibold text-white mb-4">El sistema que sostiene la transformación</h2>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed">Evolución 360 no es un programa de inicio. Es el sistema que garantiza que lo construido se sostenga y siga creciendo.</p>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {pilares.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all group h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5 group-hover:bg-systemic-orange transition-colors duration-300">
                    <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateOnScroll direction="up" delay={200}>
            <div className="mt-10 border border-white/10 rounded-2xl p-8 md:p-12" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <span className="material-symbols-outlined text-systemic-orange text-5xl shrink-0">format_quote</span>
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "Una empresa que no revisa su sistema periódicamente no está en control — está en suerte. Evolución 360 convierte el control sistémico en un hábito organizacional."
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Métricas + para quién — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Perfil Ideal</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-6 leading-tight">
                ¿Evolución 360 es <span className="text-systemic-orange">para tu empresa?</span>
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                Evolución 360 está diseñado para empresas que ya hicieron el trabajo de transformación y quieren garantizar que los resultados se sostengan y se multipliquen en el tiempo.
              </p>
              <div className="space-y-3">
                {perfil.map((item) => (
                  <div key={item} className="flex items-start gap-4 bg-white border border-deep-navy/8 rounded-xl p-4 hover:border-systemic-orange/30 transition-all">
                    <div className="w-2 h-2 rounded-full bg-systemic-orange shrink-0 mt-2" />
                    <span className="text-sm text-on-surface-variant leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={150} className="lg:w-1/2 w-full">
              <div className="bg-white border border-deep-navy/10 rounded-2xl p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-deep-navy mb-8">Resultados del ciclo anual</h3>
                <StaggerGroup className="grid grid-cols-2 gap-5" stagger={0.08}>
                  {metricas.map(({ value, label }) => (
                    <StaggerItem key={label}>
                      <div className="p-6 rounded-xl border border-deep-navy/8 text-center hover:border-systemic-orange/30 transition-all">
                        <div className="text-3xl font-black text-systemic-orange mb-2">{value}</div>
                        <div className="text-xs font-bold tracking-widest uppercase text-on-surface-variant leading-tight">{label}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">La transformación no termina. Evoluciona.</h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              Evolución 360 es el programa de sostenimiento sistémico para empresas que ya transformaron su estructura y quieren seguir creciendo sin volver al desorden.
            </p>
            <MagneticButton className="inline-block">
              <Link href="/contacto" className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300">
                HABLEMOS DE EVOLUCIÓN 360
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
