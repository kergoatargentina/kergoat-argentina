import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
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
    desc: 'Reestructuración y eficiencia organizacional. Optimización de equipos y liderazgo. Nuevas estrategias comerciales y expansión.',
    icon: 'manage_accounts',
    items: ['Reestructuración y eficiencia organizacional', 'Optimización de equipos y liderazgo', 'Nuevas estrategias comerciales y expansión'],
  },
  {
    num: '02',
    title: 'Ordenamiento Organizacional',
    desc: 'Revisión de procesos críticos y rentabilidad. Posicionamiento estratégico internacional. Cultura orientada a resultados.',
    icon: 'schema',
    items: ['Revisión de procesos críticos y rentabilidad', 'Posicionamiento estratégico internacional', 'Cultura organizacional orientada a resultados'],
  },
  {
    num: '03',
    title: 'Conducción y Coordinación',
    desc: 'Sistemas que permiten conducir, liderar, comunicar y anticipar. Equipos verdaderamente coordinados para salir de la reactividad.',
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

export default function MetodoPage() {
  return (
    <PublicLayout>

      {/* Hero — navy con imagen */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-systemic-orange blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-[100px]" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Sistema Kergoat</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Transformación Sistémica para el Crecimiento Sostenido
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-12">
              Facilitamos la evolución empresarial desde un enfoque sistémico, integrando personas, procesos y estrategia para resultados predecibles y escalables.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={250}>
            <div className="flex flex-wrap gap-3">
              {['Impulso 90', 'Foundation', 'Growth', 'Corporate', 'International', 'Evolución 360'].map((p, i) => (
                <span key={p} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs font-bold tracking-wider">
                  {String(i + 1).padStart(2, '0')} {p}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Frase clave */}
      <section className="py-16 border-b border-deep-navy/10" style={{ background: '#fbf9f8' }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-deep-navy leading-snug max-w-3xl mx-auto">
              "Muchas veces, una mirada externa experta identifica en semanas{' '}
              <span className="text-systemic-orange">lo que internamente lleva años sin resolverse.</span>"
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Los 6 programas */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Los 6 Niveles</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">
                Un programa para cada etapa de tu empresa
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl">
                Cada nivel está diseñado para el momento exacto de madurez de tu organización. No se trata de elegir — se trata de saber dónde estás.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6" stagger={0.08}>
            {programas.map(({ num, title, sub, desc, href, icon }) => {
              const card = (
                <div className="bg-white p-10 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-systemic-orange/20 group-hover:bg-systemic-orange transition-colors duration-300" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 group-hover:bg-systemic-orange flex items-center justify-center transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-lg transition-colors duration-300">{icon}</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-systemic-orange uppercase">{num}</span>
                  </div>
                  <h2 className="text-2xl font-black text-deep-navy mb-1">{title}</h2>
                  <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-5">{sub}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{desc}</p>
                  {href && (
                    <div className="flex items-center gap-2 text-systemic-orange font-bold text-sm mt-8 group-hover:gap-4 transition-all duration-300">
                      Ver programa completo
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </div>
                  )}
                  {!href && (
                    <p className="text-xs text-on-surface-variant/50 mt-8 uppercase tracking-widest font-bold">Próximamente</p>
                  )}
                </div>
              )
              return (
                <StaggerItem key={num}>
                  {href ? <Link href={href} className="block h-full">{card}</Link> : card}
                </StaggerItem>
              )
            })}

            {/* Evolución 360 */}
            <StaggerItem>
              <div className="md:col-span-2 lg:col-span-1 p-10 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden h-full" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #e55e00 100%)' }}>
                <div className="absolute -right-4 -top-4 text-[100px] font-black text-white/10 select-none pointer-events-none leading-none">06</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">autorenew</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-white/80 uppercase">06</span>
                  </div>
                  <h2 className="text-2xl font-black text-white mb-1">Evolución 360</h2>
                  <p className="text-xs font-bold tracking-widest text-white/70 uppercase mb-5">Salud Sistémica Recurrente</p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Su empresa evoluciona trimestralmente sin volver al desorden. Salud sistémica recurrente con dirección, indicadores y liderazgo activo.
                  </p>
                </div>
                <Link href="/contacto" className="relative z-10 bg-white text-systemic-orange px-6 py-3 rounded-xl font-black hover:bg-deep-navy hover:text-white transition-all text-sm tracking-widest uppercase text-center">
                  Agendar Asesoría
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Los 3 Engranajes */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Intervención Integral</span>
              <h2 className="text-4xl font-bold text-white mb-6">Los 3 Engranajes del Sistema</h2>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                Un engranaje aislado no mueve la máquina. Intervenimos en los tres ejes simultáneamente para garantizar resultados estructurales y duraderos.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {engranajes.map(({ num, title, desc, icon, items }) => (
              <StaggerItem key={num}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-systemic-orange/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-systemic-orange text-2xl">{icon}</span>
                    </div>
                    <div>
                      <span className="text-xs font-black text-systemic-orange tracking-widest uppercase block">Engranaje {num}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/60">
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
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">El Proceso</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Fases de Transformación</h2>
              <p className="text-base text-on-surface-variant max-w-xl mx-auto">
                Cada programa sigue una metodología de 5 fases diseñada para garantizar resultados medibles en cada etapa.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-systemic-orange/30 to-transparent" />
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-5 gap-8" stagger={0.1}>
              {fases.map(({ num, icon, title }) => (
                <StaggerItem key={num}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-deep-navy/10 flex items-center justify-center text-systemic-orange mb-6 group-hover:bg-systemic-orange group-hover:text-white group-hover:border-systemic-orange group-hover:-translate-y-2 transition-all duration-300 shadow-md z-10">
                      <div className="absolute -top-3 -right-3 w-7 h-7 bg-deep-navy text-white text-xs font-black rounded-full flex items-center justify-center">
                        {num}
                      </div>
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <p className="text-sm font-bold text-deep-navy leading-snug px-2">{title}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-deep-navy/10" style={{ background: '#fbf9f8' }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-deep-navy mb-4">
              Descubrí el programa adecuado para la madurez de tu empresa
            </h2>
            <p className="text-base text-on-surface-variant mb-8 max-w-lg mx-auto">
              El diagnóstico inicial es sin costo. Un consultor Kergoat te orienta en 48hs.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-systemic-orange text-white px-12 py-5 font-bold text-sm hover:bg-deep-navy transition-all duration-300"
            >
              HABLEMOS
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
