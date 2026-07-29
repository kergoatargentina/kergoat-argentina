import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Foundation — Ordenamiento y Coordinación | Kergoat Argentina',
}

const procesos = [
  { label: 'DISEÑO', value: 'Jerarquía Plana', icon: 'account_tree' },
  { label: 'FLUJO', value: 'Owner de Proceso', icon: 'swap_horiz' },
  { label: 'CONTROL', value: 'KPIs de Función', icon: 'monitoring' },
]

const rutinas = [
  {
    cadencia: 'Diario',
    icon: 'today',
    title: 'Check-in Operativo',
    desc: '15 minutos para alinear objetivos diarios y remover bloqueos inmediatos.',
    items: ['Alineación rápida', 'Foco en prioridades'],
    accent: true,
  },
  {
    cadencia: 'Semanal',
    icon: 'calendar_view_week',
    title: 'Sincronización Táctica',
    desc: 'Revisión de indicadores clave y ajuste de la hoja de ruta semanal.',
    items: ['Análisis de KPIs', 'Gestión de proyectos'],
    accent: false,
  },
  {
    cadencia: 'Mensual',
    icon: 'calendar_month',
    title: 'Comité Sistémico',
    desc: 'Evaluación profunda del nivel Foundation y preparación para el escalamiento.',
    items: ['Visión estratégica', 'Feedback 360°'],
    accent: true,
  },
]

const impactos = [
  { icon: 'rocket_launch', title: 'Escalabilidad Real', desc: 'Preparamos el negocio para crecer x10 sin colapsar por falta de estructura.' },
  { icon: 'manage_accounts', title: 'Autonomía Directiva', desc: 'Los líderes se liberan de la micro-gestión para enfocarse en la estrategia.' },
  { icon: 'handshake', title: 'Cultura de Orden', desc: 'Se establece un lenguaje común y una ética de trabajo profesionalizada.' },
  { icon: 'trending_up', title: 'Valor de Mercado', desc: 'Una empresa con procesos Foundation es un activo mucho más valioso.' },
]

export default function FoundationPage() {
  return (
    <PublicLayout>

      {/* 1. Hero — navy + partículas */}
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
              <span className="material-symbols-outlined text-sm">layers</span>
              Nivel 02 — Foundation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Ordenamiento y Coordinación Organizacional
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              El Nivel Foundation es la piedra angular del Método Kergoat. Transformamos el caos operativo en una estructura sistémica escalable, diseñando los cimientos donde la autoridad y el propósito se alinean perfectamente.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Filosofía — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Filosofía Foundation</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-8 leading-tight">
                La libertad nace de la <span className="text-systemic-orange">perfección de la estructura</span>
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                Creemos que la libertad empresarial no nace de la ausencia de reglas, sino de la perfección de la estructura. La filosofía Foundation busca erradicar la incertidumbre operativa mediante la definición clara de <strong className="text-deep-navy">"Quién", "Cómo" y "Para Qué"</strong>.
              </p>
              <div className="bg-deep-navy/5 border border-deep-navy/10 rounded-2xl p-6">
                <p className="text-sm font-bold text-deep-navy italic leading-relaxed">
                  "Una organización sin cimientos es simplemente un grupo de personas trabajando duro en direcciones opuestas. Foundation crea el eje central."
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={150} className="lg:w-1/2 w-full">
              <StaggerGroup className="grid grid-cols-1 gap-4" stagger={0.1}>
                {procesos.map(({ label, value, icon }) => (
                  <StaggerItem key={label}>
                    <div className="bg-white border border-deep-navy/10 rounded-2xl p-6 flex items-center gap-5 hover:border-systemic-orange/40 hover:shadow-md transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center shrink-0 group-hover:bg-systemic-orange transition-colors duration-300">
                        <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-systemic-orange uppercase block mb-0.5">{label}</span>
                        <p className="text-base font-bold text-deep-navy">{value}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* 3. Gestión Sistémica — navy glassmorphism */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Implementación</span>
              <h2 className="text-4xl font-semibold text-white mb-4">Gestión Sistémica de Procesos</h2>
              <p className="text-base text-white/60 max-w-2xl">Eliminamos la ambigüedad definiendo responsabilidades no solo por cargo, sino por impacto sistémico y rendición de cuentas.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-12 gap-6">
            <AnimateOnScroll direction="up" delay={0} className="col-span-12 md:col-span-8">
              <div className="h-full p-10 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Matriz de Roles Dinámicos</h3>
                    <p className="text-sm text-white/60 max-w-md leading-relaxed">Eliminamos la ambigüedad definiendo responsabilidades no solo por cargo, sino por impacto sistémico.</p>
                  </div>
                  <span className="material-symbols-outlined text-systemic-orange text-4xl ml-4 shrink-0">diversity_3</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {procesos.map(({ label, value }) => (
                    <div key={label} className="p-4 rounded-xl border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <span className="text-[10px] font-black tracking-widest text-systemic-orange block mb-2">{label}</span>
                      <p className="text-sm font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={100} className="col-span-12 md:col-span-4">
              <div className="h-full p-10 rounded-2xl border border-systemic-orange/20 flex flex-col justify-between" style={{ background: 'rgba(255,107,0,0.06)' }}>
                <span className="material-symbols-outlined text-systemic-orange text-4xl mb-8">analytics</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Métricas de Salud Organizacional</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Monitoreo constante del orden organizacional y la carga operativa en tiempo real.</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={150} className="col-span-12 md:col-span-4">
              <div className="h-full p-10 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="material-symbols-outlined text-systemic-orange text-4xl mb-8">rebase_edit</span>
                <h3 className="text-xl font-semibold text-white mb-3">Manual de Procesos</h3>
                <p className="text-sm text-white/60 leading-relaxed">Documentación viva que garantiza la repetibilidad y la excelencia operativa.</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={200} className="col-span-12 md:col-span-8">
              <div className="h-full p-10 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all flex items-center gap-8" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="material-symbols-outlined text-systemic-orange text-6xl shrink-0">device_hub</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sincronización Digital</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Integramos herramientas digitales con los procesos diseñados, garantizando que la tecnología amplifique la estructura, no la reemplace.</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 4. Rutinas — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Cadencia de Gestión</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Rutinas que crean el ritmo de la empresa</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Implementamos ciclos de coordinación que aseguran que la estrategia baje a la ejecución sin fricciones.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {rutinas.map(({ cadencia, icon, title, desc, items, accent }) => (
              <StaggerItem key={cadencia}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-8 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 flex items-center justify-center group-hover:bg-systemic-orange transition-colors duration-300">
                        <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-lg transition-colors duration-300">{icon}</span>
                      </div>
                      <span className={`text-xs font-black tracking-widest uppercase ${accent ? 'text-systemic-orange' : 'text-deep-navy'}`}>{cadencia}</span>
                    </div>
                    <h3 className="text-xl font-bold text-deep-navy mb-3">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{desc}</p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-deep-navy font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-systemic-orange shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MouseGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Impacto — navy */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Resultados</span>
              <h2 className="text-4xl font-semibold text-white">El Impacto Foundation</h2>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.1}>
            {impactos.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all group" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5 group-hover:bg-systemic-orange transition-colors duration-300">
                    <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-systemic-orange mb-2">{title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. CTA — naranja */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              ¿Listo para ordenar tu organización?
            </h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              Foundation es el punto de partida. El diagnóstico inicial es sin costo.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300"
              >
                COMENZAR CON FOUNDATION
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
