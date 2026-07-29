import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import Link from 'next/link'
import { NAVY_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Sistema Kergoat | Kergoat Argentina',
}

const programas = [
  {
    num: '01',
    title: 'Impulso 90',
    sub: 'Diagnóstico y Visibilidad',
    desc: 'Resultados visibles en 90 días, eliminando cuellos de botella. Hacemos visible lo invisible: qué te frena y cuánto te cuesta.',
    href: '/metodo/impulso-90',
    icon: 'rocket_launch',
  },
  {
    num: '02',
    title: 'Foundation',
    sub: 'Ordenamiento y Coordinación',
    desc: 'Instalación del sistema operativo organizacional. Se termina el "todo pasa por el dueño".',
    href: '/metodo/foundation',
    icon: 'layers',
  },
  {
    num: '03',
    title: 'Growth',
    sub: 'Profesionalización y Gobernanza',
    desc: 'Liderazgo estructurado para el crecimiento sostenido. Gobernanza y estructura corporativa para crecer sin romperse.',
    href: null,
    icon: 'trending_up',
  },
  {
    num: '04',
    title: 'Corporate',
    sub: 'Integración Sistémica',
    desc: 'Transformación integral para organizaciones complejas. Intervención sistémica para corporaciones en plena expansión.',
    href: null,
    icon: 'corporate_fare',
  },
  {
    num: '05',
    title: 'International',
    sub: 'Expansión Global',
    desc: 'Arquitectura corporativa para el éxito en nuevos mercados. Estructura, cultura y liderazgo para operar en el exterior.',
    href: null,
    icon: 'public',
  },
]

const engranajes = [
  {
    num: '01',
    title: 'Productividad y Resultados',
    icon: 'manage_accounts',
    items: ['Reestructuración y eficiencia organizacional', 'Optimización de equipos y liderazgo', 'Nuevas estrategias comerciales y expansión'],
  },
  {
    num: '02',
    title: 'Ordenamiento Organizacional',
    icon: 'schema',
    items: ['Revisión de procesos críticos y rentabilidad', 'Posicionamiento estratégico internacional', 'Cultura organizacional orientada a resultados'],
  },
  {
    num: '03',
    title: 'Conducción y Coordinación',
    icon: 'settings',
    items: ['Sistemas de conducción y liderazgo activo', 'Articulación fluida entre niveles jerárquicos', 'Capacidad de anticipación y planificación'],
  },
]

const fases = [
  { num: 1, icon: 'search', title: 'Diagnóstico Estratégico Integral' },
  { num: 2, icon: 'edit_note', title: 'Diseño o Rediseño Estratégico' },
  { num: 3, icon: 'autorenew', title: 'Transformación Organizacional' },
  { num: 4, icon: 'trending_up', title: 'Escalamiento Empresarial' },
  { num: 5, icon: 'workspace_premium', title: 'Consolidación del Liderazgo Sectorial' },
]

const glassCard = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
}

const glassCardHover = 'hover:border-[rgba(255,107,0,0.4)] hover:bg-[rgba(255,255,255,0.09)]'

export default function MetodoPage() {
  return (
    <PublicLayout>

      {/* Hero */}
      <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <ParticleCanvas opacity={0.4} />
        <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(255,107,0,0.12)', filter: 'blur(80px)' }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(255,255,255,0.04)', filter: 'blur(70px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Sistema Kergoat</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Transformación Sistémica para el Crecimiento Sostenido
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-12">
              Facilitamos la evolución empresarial desde un enfoque sistémico, integrando personas, procesos y estrategia para resultados predecibles y escalables.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={250}>
            <div className="flex flex-wrap gap-3">
              {['Impulso 90', 'Foundation', 'Growth', 'Corporate', 'International', 'Evolución 360'].map((p, i) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-white/60"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {String(i + 1).padStart(2, '0')} {p}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Frase clave — glass card */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060a22 0%, #0d1660 100%)' }}>
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)' }} />
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden" style={glassCard}>
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(30px)' }} />
              <p className="text-xl md:text-2xl font-semibold text-white/90 leading-snug max-w-3xl mx-auto relative z-10">
                "Muchas veces, una mirada externa experta identifica en semanas{' '}
                <span className="text-systemic-orange">lo que internamente lleva años sin resolverse.</span>"
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Los 6 programas */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060a22 0%, #0c1155 50%, #060a22 100%)' }}>
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.06)', filter: 'blur(100px)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(255,255,255,0.03)', filter: 'blur(80px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Los 6 Niveles</span>
              <h2 className="text-4xl font-bold text-white mb-4">
                Un programa para cada etapa de tu empresa
              </h2>
              <p className="text-base text-white/50 max-w-2xl">
                Cada nivel está diseñado para el momento exacto de madurez de tu organización. No se trata de elegir — se trata de saber dónde estás.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5" stagger={0.08}>
            {programas.map(({ num, title, sub, desc, href, icon }) => {
              const card = (
                <div
                  className={`p-8 rounded-2xl h-full flex flex-col transition-all duration-300 group relative overflow-hidden ${glassCardHover}`}
                  style={glassCard}
                >
                  <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(255,107,0,0.1)', filter: 'blur(20px)' }} />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.35)' }}
                    >
                      <span className="material-symbols-outlined text-systemic-orange text-lg">{icon}</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-systemic-orange uppercase">{num}</span>
                  </div>
                  <h2 className="text-xl font-black text-white mb-1 relative z-10">{title}</h2>
                  <p className="text-xs font-bold tracking-widest uppercase mb-4 relative z-10" style={{ color: 'rgba(255,255,255,0.35)' }}>{sub}</p>
                  <p className="text-sm leading-relaxed flex-1 relative z-10" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
                  {href && (
                    <div className="flex items-center gap-2 text-systemic-orange font-bold text-xs mt-8 relative z-10 group-hover:gap-4 transition-all duration-300 uppercase tracking-widest">
                      Ver programa
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  )}
                  {!href && (
                    <p className="text-xs mt-8 uppercase tracking-widest font-bold relative z-10" style={{ color: 'rgba(255,255,255,0.2)' }}>Próximamente</p>
                  )}
                </div>
              )
              return (
                <StaggerItem key={num}>
                  {href ? <Link href={href} className="block h-full">{card}</Link> : card}
                </StaggerItem>
              )
            })}

            {/* Evolución 360 — orange glass */}
            <StaggerItem>
              <div
                className="p-8 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden h-full"
                style={{ background: 'rgba(255,107,0,0.14)', border: '1px solid rgba(255,107,0,0.35)' }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 w-40 h-40 rounded-full" style={{ background: 'rgba(255,107,0,0.2)', filter: 'blur(40px)' }} />
                <div className="absolute -right-3 -top-3 text-[88px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.06)' }}>06</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                      <span className="material-symbols-outlined text-white text-lg">autorenew</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-white/70 uppercase">06</span>
                  </div>
                  <h2 className="text-xl font-black text-white mb-1">Evolución 360</h2>
                  <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Salud Sistémica Recurrente</p>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Su empresa evoluciona trimestralmente sin volver al desorden. Salud sistémica recurrente con dirección, indicadores y liderazgo activo.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="relative z-10 text-center px-6 py-3 rounded-xl font-black text-sm tracking-widest uppercase transition-all duration-300 text-deep-navy hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.92)' }}
                >
                  Agendar Asesoría
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Los 3 Engranajes */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full" style={{ background: 'rgba(255,107,0,0.05)', filter: 'blur(80px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Intervención Integral</span>
              <h2 className="text-4xl font-bold text-white mb-6">Los 3 Engranajes del Sistema</h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Un engranaje aislado no mueve la máquina. Intervenimos en los tres ejes simultáneamente para garantizar resultados estructurales y duraderos.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
            {engranajes.map(({ num, title, icon, items }) => (
              <StaggerItem key={num}>
                <div
                  className={`p-8 rounded-2xl h-full transition-all duration-300 relative overflow-hidden group ${glassCardHover}`}
                  style={glassCard}
                >
                  <div className="pointer-events-none absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(25px)' }} />
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{ background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.35)' }}
                    >
                      <span className="material-symbols-outlined text-systemic-orange text-2xl">{icon}</span>
                    </div>
                    <span className="text-xs font-black text-systemic-orange tracking-widest uppercase">Engranaje {num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-5">{title}</h3>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <span className="material-symbols-outlined text-systemic-orange text-base mt-0.5 shrink-0">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Fases del proceso */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060a22 0%, #0c1155 50%, #060a22 100%)' }}>
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[200px] rounded-full" style={{ background: 'rgba(255,107,0,0.05)', filter: 'blur(60px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">El Proceso</span>
              <h2 className="text-4xl font-bold text-white mb-4">Fases de Transformación</h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Cada programa sigue una metodología de 5 fases diseñada para garantizar resultados medibles en cada etapa.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent)' }} />
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-5 gap-6" stagger={0.1}>
              {fases.map(({ num, icon, title }) => (
                <StaggerItem key={num}>
                  <div className="flex flex-col items-center text-center group">
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-systemic-orange mb-6 z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                      style={{ ...glassCard, border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <div
                        className="absolute -top-3 -right-3 w-7 h-7 text-white text-xs font-black rounded-full flex items-center justify-center"
                        style={{ background: '#FF6B00' }}
                      >
                        {num}
                      </div>
                      <span className="material-symbols-outlined text-systemic-orange">{icon}</span>
                    </div>
                    <p className="text-sm font-bold leading-snug px-2 text-white/80">{title}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent)' }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(80px)' }} />

        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="rounded-2xl p-14 relative overflow-hidden" style={glassCard}>
              <h2 className="text-3xl font-bold text-white mb-4">
                Descubrí el programa adecuado para la madurez de tu empresa
              </h2>
              <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                El diagnóstico inicial es sin costo. Un consultor Kergoat te orienta en 48hs.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-12 py-5 font-bold text-sm transition-all duration-300 text-deep-navy hover:text-white rounded-xl"
                style={{ background: 'rgba(255,255,255,0.92)' }}
              >
                HABLEMOS
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
