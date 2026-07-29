import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'International — Expansión Global | Kergoat Argentina',
}

const pilares = [
  { icon: 'public', title: 'Arquitectura para Nuevos Mercados', desc: 'Diseñamos la estructura corporativa, legal y operativa que permite operar con éxito en mercados internacionales, adaptando el modelo de negocio a cada contexto.' },
  { icon: 'translate', title: 'Adaptación Cultural y Operativa', desc: 'Preparamos a los equipos y sistemas para operar en entornos culturales distintos, con estándares de liderazgo y comunicación que trascienden fronteras.' },
  { icon: 'travel_explore', title: 'Posicionamiento Estratégico Internacional', desc: 'Definimos la propuesta de valor adaptada al nuevo mercado y el plan de entrada que maximiza las probabilidades de consolidación.' },
  { icon: 'groups_3', title: 'Estructura y Capital Humano Global', desc: 'Optimizamos los equipos para la expansión: quién lidera cada mercado, cómo se coordinan y qué estándares aplican en cada geografía.' },
]

const mercados = [
  { icon: 'location_on', label: 'España', desc: 'Presencia activa en el mercado ibérico con red de contactos y conocimiento profundo del tejido empresarial.' },
  { icon: 'location_on', label: 'Argentina', desc: 'Base operativa principal con expertise en economías complejas y alta adaptabilidad.' },
  { icon: 'language', label: 'LATAM', desc: 'Experiencia en mercados de habla hispana con comprensión de sus dinámicas particulares.' },
  { icon: 'flight_takeoff', label: 'Nuevos mercados', desc: 'Acompañamos la expansión a cualquier mercado donde el cliente quiera operar.' },
]

const impactos = [
  { icon: 'rocket_launch', title: 'Entrada exitosa', desc: 'La empresa llega al nuevo mercado con estructura, propuesta de valor y equipo preparados.' },
  { icon: 'shield', title: 'Riesgo controlado', desc: 'El modelo de expansión contempla los riesgos específicos de cada mercado y los mitiga desde el diseño.' },
  { icon: 'trending_up', title: 'Crecimiento sostenible', desc: 'La expansión internacional no canibaliza la operación local: ambas se potencian mutuamente.' },
  { icon: 'hub', title: 'Red internacional', desc: 'Acceso a la red de contactos y experiencia internacional de los socios Kergoat.' },
]

export default function InternationalPage() {
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
              <span className="material-symbols-outlined text-sm">public</span>
              Nivel 05 — International
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Arquitectura corporativa para el éxito global
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Diseñamos la estructura, cultura y liderazgo para que tu empresa opere con éxito en nuevos mercados. Presencia en España y Argentina, con experiencia en toda la región de habla hispana.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Mercados — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Presencia Internacional</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Operamos donde tu empresa quiere llegar</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Kergoat tiene presencia activa en España y Argentina, con experiencia comprobada en mercados de habla hispana y capacidad de acompañar expansiones a cualquier mercado objetivo.
              </p>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
            {mercados.map(({ icon, label, desc }) => (
              <StaggerItem key={label}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-6 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all text-center">
                    <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{label}</h3>
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
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Intervención International</span>
              <h2 className="text-4xl font-semibold text-white mb-4">Expansión con estructura desde el día uno</h2>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed">Acompañamos cada etapa de la expansión internacional con metodología probada y red de contactos activa en múltiples mercados.</p>
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
                  "Muchas veces, una mirada externa experta identifica en semanas lo que internamente lleva años sin resolverse. En la expansión internacional, esa mirada vale más que nunca."
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Impacto — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Resultados</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Qué genera International en tu empresa</h2>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.1}>
            {impactos.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-8 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5 group-hover:bg-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-deep-navy mb-2">{title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                </MouseGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">El mundo es el mercado. Nosotros ponemos la estructura.</h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              International es para empresas que ya piensan en global y necesitan el acompañamiento correcto para ejecutarlo. El diagnóstico es sin costo.
            </p>
            <MagneticButton className="inline-block">
              <Link href="/contacto" className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300">
                HABLEMOS DE EXPANSIÓN
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
