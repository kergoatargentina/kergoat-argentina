import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Nosotros | Kergoat Argentina',
}

const pilares = [
  'Estrategia y definición clara del rumbo empresarial.',
  'Estructura organizacional, comercial y operativa eficiente.',
  'Transformación y potenciación del capital humano.',
]

const filosofia = [
  {
    icon: 'layers',
    title: 'Nuestros Pilares',
    content: pilares,
    type: 'list' as const,
  },
  {
    icon: 'target',
    title: 'Nuestra Misión',
    content: 'Impulsar el potencial de cada empresa u organización, acompañando a nuestros clientes en sus procesos de transformación organizacional, para generar un impacto duradero que favorezca su expansión, consolidación y crecimiento sostenible.',
    type: 'text' as const,
  },
  {
    icon: 'visibility',
    title: 'Nuestra Visión',
    content: 'Convertirnos en una firma de consultoría estratégica de referencia internacional, reconocida por impulsar empresas que transforman positivamente sus negocios y generan un impacto valioso en la sociedad.',
    type: 'text' as const,
  },
]

const diferenciadores = [
  { icon: 'public', label: 'Presencia internacional', desc: 'Operamos en múltiples mercados de habla hispana' },
  { icon: 'schema', label: 'Enfoque sistémico', desc: 'Integramos estrategia, estructura y capital humano' },
  { icon: 'trending_up', label: 'Resultados medibles', desc: 'Metodologías con indicadores claros en cada etapa' },
]

const equipo = [
  { initials: 'KA', rol: 'Socio Fundador', area: 'Estrategia Corporativa' },
  { initials: 'KA', rol: 'Socio Fundador', area: 'Desarrollo Organizacional' },
  { initials: 'KA', rol: 'Socio Fundador', area: 'Capital Humano' },
]

export default function NosotrosPage() {
  return (
    <PublicLayout>

      {/* 1. Hero — dark navy + partículas */}
      <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <ParticleCanvas opacity={0.4} />
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(255,107,0,0.1)', filter: 'blur(90px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Nosotros</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-3xl">
              Consultoría Estratégica Internacional
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Kergoat es una firma dedicada a transformar empresas mediante estrategias sólidas, estructuras corporativas eficientes y una profunda valorización del capital humano.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Quiénes somos — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Quiénes somos</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-8 leading-tight">
                Una firma que acompaña a las empresas a evolucionar
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                Kergoat es una <strong className="text-deep-navy">consultora estratégica internacional</strong> dedicada a transformar empresas mediante el desarrollo de estrategias sólidas, estructuras corporativas eficientes y una profunda valorización del capital humano.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Nuestro enfoque integra visión empresarial, inteligencia estratégica y consciencia organizacional, ayudando a las empresas a evolucionar hacia modelos de negocio más sólidos, rentables y sostenibles.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={100} className="lg:w-1/2 w-full">
              <StaggerGroup className="flex flex-col gap-5" stagger={0.1}>
                {diferenciadores.map(({ icon, label, desc }) => (
                  <StaggerItem key={label}>
                    <div className="bg-white border border-deep-navy/10 rounded-2xl p-6 flex items-start gap-5 hover:border-systemic-orange/40 hover:shadow-md transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center shrink-0 group-hover:bg-systemic-orange transition-colors duration-300">
                        <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-2xl transition-colors duration-300">{icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-deep-navy mb-1">{label}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* 3. Equipo — dark navy glassmorphism */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(255,107,0,0.07)', filter: 'blur(80px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Liderazgo</span>
              <h2 className="text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Profesionales con trayectoria internacional en transformación organizacional y consultoría estratégica.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {equipo.map(({ initials, rol, area }, i) => (
              <StaggerItem key={i}>
                <div
                  className="p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group border border-white/10 hover:border-systemic-orange/40"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #FF6B00, #e55e00)' }}
                  >
                    {initials}
                  </div>
                  <p className="text-xs font-black tracking-widest text-systemic-orange uppercase mb-2">{rol}</p>
                  <p className="text-sm font-semibold text-white/80">{area}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Filosofía — light cream con MouseGlowCard */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Consciencia Empresarial</span>
              <h2 className="text-4xl font-bold text-deep-navy">Nuestra Filosofía</h2>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {filosofia.map(({ icon, title, content, type }) => (
              <StaggerItem key={title}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-10 rounded-[19px] border border-deep-navy/10 h-full group">
                    <div className="w-14 h-14 bg-systemic-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-3xl transition-colors duration-300">{icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-deep-navy mb-6 uppercase tracking-wide">{title}</h3>
                    {type === 'list' ? (
                      <ul className="space-y-4">
                        {(content as string[]).map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-systemic-orange rounded-full shrink-0" />
                            <span className="text-sm text-on-surface-variant leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-on-surface-variant leading-relaxed">{content as string}</p>
                    )}
                  </div>
                </MouseGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Banner cita — dark navy */}
      <section className="py-20 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[300px] rounded-full" style={{ background: 'rgba(255,107,0,0.07)', filter: 'blur(80px)' }} />
        </div>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Analizamos tus objetivos,{' '}
              <span className="text-systemic-orange">alcanzamos tu éxito.</span>
            </h2>
          </div>
        </AnimateOnScroll>
      </section>

      {/* 6. CTA — naranja degradado */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Querés trabajar con nosotros?
            </h3>
            <p className="text-base text-white/80 mb-10 max-w-lg mx-auto">
              El primer paso es una conversación sin costo. Conocemos tu empresa y te mostramos qué programa se adapta mejor.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300"
            >
              INICIAR CONVERSACIÓN
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
