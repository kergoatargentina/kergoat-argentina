import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CountUp from '@/components/CountUp'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

const obstaculos = [
  { num: '01', icon: 'explore', title: 'Falta de dirección estratégica' },
  { num: '02', icon: 'trending_down', title: 'Crecimiento desordenado' },
  { num: '03', icon: 'groups', title: 'Conflictos internos o desmotivación del equipo' },
  { num: '04', icon: 'money_off', title: 'Baja rentabilidad' },
  { num: '05', icon: 'corporate_fare', title: 'Estructuras corporativas ineficientes' },
  { num: '06', icon: 'map', title: 'Dificultad para expandirse a nuevos mercados' },
  { num: '07', icon: 'language', title: 'Falta de visión internacional' },
]

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero — navy profundo */}
      <section className="min-h-[90vh] flex items-center overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateOnScroll direction="up" delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8">
                <span className="material-symbols-outlined text-base">public</span>
                Consultoría Estratégica Internacional
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-white">
                Las organizaciones que crecen no lo hacen por inercia,{' '}
                <span className="text-systemic-orange">escalan con propósito y diseño estratégico.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={200}>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
                Arquitectura de organizaciones diseñadas para escalar, decidir y evolucionar. Conectando talento y visión en un mercado global sin fronteras.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Link href="/metodo" className="liquid-glass-primary text-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                    Conocé nuestros programas
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Link href="/contacto" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-systemic-orange hover:text-systemic-orange transition-all duration-300">
                    Iniciar transformación
                  </Link>
                </MagneticButton>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="right" delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 rounded-2xl p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-systemic-orange mb-2">
                      <CountUp end={120} suffix="+" />
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/70">Empresas</div>
                  </div>
                  <div className="border-x border-white/10 px-4">
                    <div className="text-4xl font-bold text-systemic-orange mb-2">
                      <CountUp end={90} />
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/70">Días</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-systemic-orange mb-2">
                      <CountUp end={3.2} suffix="x" decimals={1} />
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/70">ROI promedio</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-systemic-orange/20 hover:border-systemic-orange/50 transition-all" style={{ background: 'rgba(255,107,0,0.08)' }}>
                <span className="material-symbols-outlined text-systemic-orange text-4xl mb-4 block">layers</span>
                <h3 className="text-lg font-semibold text-white mb-2">Foundation</h3>
                <p className="text-sm text-white/60">Orden y coordinación organizacional</p>
              </div>

              <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="material-symbols-outlined text-systemic-orange text-4xl mb-4 block">rocket_launch</span>
                <h3 className="text-lg font-semibold text-white mb-2">Impulso 90</h3>
                <p className="text-sm text-white/60">Escalamiento sistémico en 90 días</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Problemas que resolvemos — blanco roto */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Texto sticky */}
            <AnimateOnScroll direction="up" className="lg:w-1/3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-systemic-orange/10 text-systemic-orange text-xs font-bold tracking-widest uppercase border border-systemic-orange/20 mb-6">
                <span className="material-symbols-outlined text-base">target</span>
                Identificamos y Erradicamos
              </span>
              <h2 className="text-4xl font-bold text-deep-navy mb-6 leading-tight">
                Los obstáculos que <span className="text-systemic-orange">frenan su expansión</span>
              </h2>
              <div className="w-12 h-1 bg-systemic-orange rounded-full mb-6" />
              <p className="text-base text-on-surface-variant leading-relaxed">
                <strong className="text-deep-navy">Hacemos visible lo invisible</strong> para convertirlo en capacidad instalada. Identificamos los obstáculos silenciosos que destruyen su rentabilidad y bloquean el verdadero potencial de su negocio.
              </p>
            </AnimateOnScroll>

            {/* Grid de obstáculos */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {obstaculos.map(({ num, icon, title }, i) => (
                <AnimateOnScroll key={num} direction="up" delay={i * 60}>
                  <div className="relative bg-white p-8 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/40 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="absolute -right-3 -top-4 text-[80px] font-black text-deep-navy/4 group-hover:text-systemic-orange/5 transition-colors select-none pointer-events-none">
                      {num}
                    </div>
                    <div className="w-12 h-12 bg-deep-navy/5 group-hover:bg-systemic-orange rounded-xl flex items-center justify-center text-systemic-orange group-hover:text-white mb-5 transition-all duration-300">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-deep-navy leading-snug">{title}</h3>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-systemic-orange group-hover:w-full transition-all duration-500" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque — navy */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-white mb-6">Intervenimos donde su empresa más lo necesita</h2>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl mx-auto">
                Un engranaje aislado no mueve la máquina. Nuestro abordaje es siempre estructural — integrando estrategia, cultura y capital humano.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: 'manage_accounts', title: 'Productividad y Resultados', desc: 'Activamos el potencial operativo de cada área para generar resultados concretos y medibles.' },
              { icon: 'schema', title: 'Ordenamiento Organizacional', desc: 'Diseñamos la estructura que permite a tu empresa funcionar sin depender de una sola persona.' },
              { icon: 'settings', title: 'Conducción y Coordinación', desc: 'Implementamos sistemas de gestión que aseguran que la estrategia baje a la ejecución sin fricciones.' },
            ].map(({ icon, title, desc }, i) => (
              <AnimateOnScroll key={title} direction="up" delay={i * 100}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="material-symbols-outlined text-systemic-orange text-4xl mb-6 block">{icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up">
            <div className="border-2 border-systemic-orange/60 rounded-xl p-8 text-center">
              <div className="w-3 h-3 bg-systemic-orange rounded-full animate-pulse mx-auto mb-4" />
              <p className="text-systemic-orange font-black tracking-[0.2em] text-lg uppercase">
                Transformamos empresas desde su estrategia, su cultura y su capital humano.
                <span className="block text-white mt-2">Trabajamos para que alcancen su máximo potencial de crecimiento.</span>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Método preview — blanco roto */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Método Kergoat</span>
              <h2 className="text-4xl font-semibold text-deep-navy mb-6">
                6 programas para cada nivel de madurez organizacional
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Proponemos saltos de capacidad organizacional. Cada programa está diseñado para el momento exacto de tu empresa.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { num: '01', title: 'Impulso 90', sub: 'Empresa Visible', desc: 'Diagnóstico ejecutivo. Hacemos visible lo invisible: qué te frena y cuánto te cuesta.' },
              { num: '02', title: 'Foundation', sub: 'Empresa Coordinada', desc: 'Instalación del sistema operativo. Se termina el "todo pasa por el dueño".' },
              { num: '03', title: 'Growth', sub: 'Empresa Profesional', desc: 'Gobernanza y liderazgo corporativo para crecer sin romperse.' },
            ].map(({ num, title, sub, desc }, i) => (
              <AnimateOnScroll key={title} direction="up" delay={i * 80}>
                <div className="bg-white p-8 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/40 hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">{num}</span>
                  <h3 className="text-xl font-bold text-deep-navy mb-1">{title}</h3>
                  <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">{sub}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="up" delay={200}>
            <div className="text-center">
              <Link href="/metodo" className="inline-flex items-center gap-2 text-systemic-orange font-bold hover:underline">
                Ver los 6 programas completos
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
            <h2 className="text-4xl font-semibold text-white mb-6">Analizamos tus objetivos, alcanzamos tu éxito.</h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              El primer paso es un diagnóstico sin costo donde analizamos tu estructura y te mostramos el camino.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300"
              >
                INICIAR TRANSFORMACIÓN
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>
    </PublicLayout>
  )
}
