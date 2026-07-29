import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedTitle from '@/components/AnimatedTitle'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

const programas = [
  {
    num: '01',
    title: 'Impulso 90',
    sub: 'Diagnóstico y Visibilidad',
    desc: 'Resultados visibles en 90 días, eliminando cuellos de botella.',
    icon: 'rocket_launch',
  },
  {
    num: '02',
    title: 'Foundation',
    sub: 'Ordenamiento y Coordinación',
    desc: 'Instalación del sistema operativo organizacional.',
    icon: 'layers',
  },
  {
    num: '03',
    title: 'Growth',
    sub: 'Profesionalización y Gobernanza',
    desc: 'Liderazgo estructurado para el crecimiento sostenido.',
    icon: 'trending_up',
  },
  {
    num: '04',
    title: 'Corporate',
    sub: 'Integración Sistémica',
    desc: 'Transformación integral para organizaciones complejas.',
    icon: 'corporate_fare',
  },
  {
    num: '05',
    title: 'International',
    sub: 'Expansión Global',
    desc: 'Arquitectura corporativa para el éxito en nuevos mercados.',
    icon: 'public',
  },
  {
    num: '06',
    title: 'Evolución 360',
    sub: 'Salud Sistémica Recurrente',
    desc: 'Su empresa evoluciona trimestralmente sin volver al desorden.',
    icon: 'autorenew',
  },
]

const engranajes = [
  {
    num: '01',
    title: 'Productividad y Resultados',
    desc: 'Activamos el potencial operativo de cada área para generar resultados concretos y medibles de negocio.',
    icon: 'manage_accounts',
  },
  {
    num: '02',
    title: 'Ordenamiento Organizacional',
    desc: 'Diseñamos la estructura que permite a tu empresa funcionar sin depender de una sola persona.',
    icon: 'schema',
  },
  {
    num: '03',
    title: 'Conducción y Coordinación',
    desc: 'Implementamos sistemas que permiten liderar, comunicar y anticipar — saliendo definitivamente de la reactividad.',
    icon: 'settings',
  },
]

export default function HomePage() {
  return (
    <PublicLayout>

      {/* Hero — imagen de fondo con overlay */}
      <section
        className="min-h-[92vh] flex items-center justify-center overflow-hidden relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(5,9,31,0.90) 0%, rgba(11,18,74,0.84) 50%, rgba(13,22,96,0.87) 100%)' }} />
        <ParticleCanvas opacity={0.35} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-24 text-center">
          <AnimateOnScroll direction="up" delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-10">
              <span className="material-symbols-outlined text-base">public</span>
              Consultoría Estratégica Internacional
            </span>
          </AnimateOnScroll>

          <AnimatedTitle
            text="Impulsamos empresas, transformamos personas"
            highlight="transformamos"
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8 text-white max-w-4xl mx-auto"
          />

          <AnimateOnScroll direction="up" delay={200}>
            <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              Facilitamos la evolución empresarial desde un enfoque sistémico, integrando personas, procesos y estrategia para resultados predecibles y escalables.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link href="/metodo" className="liquid-glass-primary text-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                  Conocé el Sistema Kergoat
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link href="/contacto" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-systemic-orange hover:text-systemic-orange transition-all duration-300">
                  Hablemos
                </Link>
              </MagneticButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* El costo real — círculo vicioso */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-systemic-orange/10 text-systemic-orange text-xs font-bold tracking-widest uppercase border border-systemic-orange/20 mb-6">
                <span className="material-symbols-outlined text-base">warning</span>
                El Costo Real de la Urgencia Operativa
              </span>
              <h2 className="text-4xl font-bold text-deep-navy mb-6 leading-tight">
                Los obstáculos que <span className="text-systemic-orange">frenan su expansión</span>
              </h2>
              <div className="w-12 h-1 bg-systemic-orange rounded-full mb-6" />
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                <strong className="text-deep-navy">Muchas veces, una mirada externa experta identifica en semanas lo que internamente lleva años sin resolverse.</strong> Los costos ocultos de la descoordinación no aparecen en ningún tablero, pero comprometen estructuralmente los márgenes del negocio.
              </p>
              <div className="bg-deep-navy/5 border border-deep-navy/10 rounded-2xl p-6">
                <p className="text-sm font-bold text-deep-navy italic">
                  "Costos que no aparecen en ningún tablero pero que comprometen estructuralmente los márgenes del negocio."
                </p>
              </div>
            </AnimateOnScroll>

            {/* Círculo vicioso visual */}
            <AnimateOnScroll direction="right" delay={150} className="lg:w-1/2">
              <div className="relative">
                <StaggerGroup className="grid grid-cols-2 gap-4" stagger={0.1}>
                  {[
                    { icon: 'error', label: 'Sistemas insuficientes', color: 'bg-systemic-orange/10 border-systemic-orange/30 text-systemic-orange' },
                    { icon: 'alarm', label: 'Jefaturas gestionando urgencias', color: 'bg-deep-navy/5 border-deep-navy/20 text-deep-navy' },
                    { icon: 'visibility_off', label: 'Pérdida de capacidad de anticipación', color: 'bg-deep-navy/5 border-deep-navy/20 text-deep-navy' },
                    { icon: 'sync_problem', label: 'Más descoordinación', color: 'bg-systemic-orange/10 border-systemic-orange/30 text-systemic-orange' },
                  ].map(({ icon, label, color }) => (
                    <StaggerItem key={label}>
                      <div className={`border rounded-xl p-5 flex flex-col items-center text-center gap-3 ${color}`}>
                        <span className="material-symbols-outlined text-3xl">{icon}</span>
                        <span className="text-xs font-bold tracking-wide uppercase leading-tight">{label}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                <div className="mt-4 text-center bg-systemic-orange rounded-xl p-4">
                  <span className="material-symbols-outlined text-white text-2xl block mb-1">autorenew</span>
                  <p className="text-white font-black text-xs tracking-widest uppercase">Círculo Vicioso</p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Los 3 Engranajes — navy */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Intervención Integral</span>
              <h2 className="text-4xl font-semibold text-white mb-6">Intervenimos donde su empresa más lo necesita</h2>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl mx-auto">
                Un engranaje aislado no mueve la máquina. Nuestro abordaje es siempre estructural — integrando estrategia, cultura y capital humano.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" stagger={0.12}>
            {engranajes.map(({ num, icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all h-full relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="absolute top-4 right-4 text-5xl font-black text-white/4">{num}</div>
                  <span className="material-symbols-outlined text-systemic-orange text-4xl mb-6 block">{icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-4">Engranaje {num} — {title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateOnScroll direction="up">
            <div className="border-2 border-systemic-orange/60 rounded-xl p-8 text-center">
              <div className="w-3 h-3 bg-systemic-orange rounded-full animate-pulse mx-auto mb-4" />
              <p className="text-systemic-orange font-black tracking-[0.2em] text-lg uppercase">
                Intervención Integral — Sistema Kergoat
                <span className="block text-white/80 mt-2 font-normal text-base tracking-normal normal-case">
                  Sistemas que permiten conducir, liderar, comunicar y anticipar. Equipos verdaderamente coordinados con articulación fluida entre niveles jerárquicos.
                </span>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sistema Kergoat — 6 programas */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Sistema Kergoat</span>
              <h2 className="text-4xl font-semibold text-deep-navy mb-6">
                6 niveles de transformación para cada etapa de madurez organizacional
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Facilitamos la evolución empresarial desde un enfoque sistémico. Cada programa está diseñado para el momento exacto de tu empresa.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" stagger={0.08}>
            {programas.map(({ num, title, sub, desc, icon }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/40 hover:shadow-lg transition-all hover:-translate-y-1 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-systemic-orange/60 to-systemic-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 rounded-lg bg-systemic-orange/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-systemic-orange text-base">{icon}</span>
                    </span>
                    <span className="text-xs font-black tracking-widest text-systemic-orange uppercase">{num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy mb-1">{title}</h3>
                  <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">{sub}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateOnScroll direction="up" delay={200}>
            <div className="text-center">
              <Link href="/metodo" className="inline-flex items-center gap-2 text-systemic-orange font-bold hover:underline">
                Descubrí el programa adecuado para tu empresa
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA final — naranja */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Transformamos la forma en que las empresas piensan, creando organizaciones preparadas para el futuro.
            </h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              Descubrí el plan adecuado para la madurez actual de tu empresa. El diagnóstico inicial es sin costo.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300"
              >
                HABLEMOS
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>
    </PublicLayout>
  )
}
