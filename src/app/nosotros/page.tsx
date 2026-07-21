import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Link from 'next/link'

export const metadata = {
  title: 'Nosotros | Kergoat Argentina',
}

export default function NosotrosPage() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Quiénes somos */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Nosotros</span>
              <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-8 tracking-tight leading-tight">Quiénes Somos</h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                Kergoat es una <strong className="text-deep-navy">consultora estratégica internacional</strong> dedicada a transformar empresas mediante el desarrollo de estrategias sólidas, estructuras corporativas eficientes y una profunda valorización del capital humano.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Nuestro enfoque integra visión empresarial, inteligencia estratégica y consciencia organizacional, ayudando a las empresas a evolucionar hacia modelos de negocio más sólidos, rentables y sostenibles.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="lg:w-1/2 w-full">
              <div className="grid grid-cols-3 gap-6">
                {['Socio Fundador', 'Socio Fundador', 'Socio Fundador'].map((rol, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-surface-container-low border-4 border-white shadow-lg flex items-center justify-center mb-4 group-hover:border-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">person</span>
                    </div>
                    <p className="text-xs font-bold tracking-widest text-systemic-orange uppercase">{rol}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Banner filosofía */}
        <AnimateOnScroll direction="up">
          <div className="bg-systemic-orange rounded-2xl p-8 md:p-12 text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-widest uppercase">
              Analizamos tus objetivos, alcanzamos tu éxito.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Filosofía: Pilares, Misión, Visión */}
        <section className="mb-32">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-deep-navy mb-3">Nuestra Filosofía</h2>
              <p className="text-xs font-black tracking-[0.3em] uppercase text-systemic-orange">Consciencia Empresarial</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll direction="up" delay={0}>
              <div className="bg-white p-10 rounded-2xl border border-deep-navy/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-deep-navy/5 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-deep-navy text-3xl">layers</span>
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-6 uppercase">Nuestros Pilares</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  {[
                    'Estrategia y definición clara del rumbo empresarial.',
                    'Estructura organizacional, comercial y operativa eficiente.',
                    'Transformación y potenciación del capital humano.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-systemic-orange rounded-full shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={100}>
              <div className="bg-white p-10 rounded-2xl border border-deep-navy/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-systemic-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-systemic-orange text-3xl">target</span>
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-6 uppercase">Nuestra Misión</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Impulsar el potencial de cada empresa u organización, acompañando a nuestros clientes en sus procesos de transformación organizacional, para generar un impacto duradero que favorezca su expansión, consolidación y crecimiento sostenible.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={200}>
              <div className="bg-white p-10 rounded-2xl border border-deep-navy/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-deep-navy/5 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-deep-navy text-3xl">visibility</span>
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-6 uppercase">Nuestra Visión</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Convertirnos en una firma de consultoría estratégica de referencia internacional, reconocida por impulsar empresas que transforman positivamente sus negocios y generan un impacto valioso en la sociedad.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <AnimateOnScroll direction="up">
          <div className="text-center py-16 border-t border-deep-navy/10">
            <h3 className="text-3xl font-semibold text-deep-navy mb-6">¿Querés trabajar con nosotros?</h3>
            <Link href="/contacto" className="inline-flex items-center gap-3 bg-systemic-orange text-white px-12 py-5 font-bold text-sm hover:bg-deep-navy transition-all duration-300">
              INICIAR CONVERSACIÓN
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </AnimateOnScroll>

      </main>
    </PublicLayout>
  )
}
