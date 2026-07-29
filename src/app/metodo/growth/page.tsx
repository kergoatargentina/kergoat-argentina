import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Growth — Profesionalización y Gobernanza | Kergoat Argentina',
}

const pilares = [
  { icon: 'manage_accounts', title: 'Liderazgo Estructurado', desc: 'Desarrollamos líderes que conducen con sistemas, no con intuición. Cada nivel jerárquico sabe qué decide, cómo comunica y a quién rinde cuentas.' },
  { icon: 'schema', title: 'Gobernanza Corporativa', desc: 'Instalamos la arquitectura de toma de decisiones que permite a la empresa crecer sin que todo pase por una sola persona.' },
  { icon: 'school', title: 'Escuelas de Oficios', desc: 'Creamos y gestionamos programas de formación interna para profesionalizar cada área y garantizar estándares de calidad sostenibles.' },
  { icon: 'groups', title: 'Equipos Directivos', desc: 'Optimizamos la composición, dinámica y rendición de cuentas de los equipos de conducción para multiplicar el impacto organizacional.' },
]

const metricas = [
  { value: '60%', label: 'Reducción de dependencia del fundador' },
  { value: '2.8x', label: 'Velocidad de toma de decisiones' },
  { value: '+55%', label: 'Retención de talento clave' },
  { value: '100%', label: 'Líderes con sistema de gestión propio' },
]

const perfil = [
  'Tu empresa crece pero el equipo directivo no escala al mismo ritmo',
  'Las decisiones importantes siguen concentradas en una o dos personas',
  'No tenés un sistema claro de evaluación y desarrollo de líderes',
  'Querés construir una segunda línea de conducción sólida',
  'El crecimiento genera desorden porque la estructura no acompañó',
]

const impactos = [
  { icon: 'rocket_launch', title: 'Crecimiento sin colapso', desc: 'La empresa puede crecer x10 porque la gobernanza escala junto con el negocio.' },
  { icon: 'record_voice_over', title: 'Conducción dinámica', desc: 'Sistemas que permiten liderar, comunicar y anticipar — saliendo definitivamente de la reactividad.' },
  { icon: 'hub', title: 'Articulación fluida', desc: 'Equipos verdaderamente coordinados con articulación fluida entre todos los niveles jerárquicos.' },
  { icon: 'trending_up', title: 'Capacidad organizacional', desc: 'Aumento sostenido de la capacidad para gestionar procesos complejos de cambio y crecimiento.' },
]

export default function GrowthPage() {
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
              <span className="material-symbols-outlined text-sm">trending_up</span>
              Nivel 03 — Growth
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Profesionalización y Gobernanza
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Liderazgo estructurado para el crecimiento sostenido. Gobernanza y estructura corporativa para crecer sin romperse, construyendo equipos directivos que escalan junto con el negocio.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Pilares — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Intervención Growth</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Los cuatro pilares de la profesionalización</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Growth actúa sobre la estructura de conducción: quién decide, cómo se forma y cómo se coordina cada nivel de la organización.
              </p>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {pilares.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-8 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5 group-hover:bg-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-deep-navy mb-3">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                </MouseGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Métricas — navy */}
      <section className="py-24 md:py-32" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Resultados Promedio</span>
              <h2 className="text-4xl font-semibold text-white">Qué genera Growth en tu organización</h2>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
            {metricas.map(({ value, label }) => (
              <StaggerItem key={label}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="text-4xl md:text-5xl font-black text-systemic-orange mb-3">{value}</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/50 leading-tight">{label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimateOnScroll direction="up" delay={200}>
            <div className="mt-12 border border-white/10 rounded-2xl p-8 md:p-12" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <span className="material-symbols-outlined text-systemic-orange text-5xl shrink-0">format_quote</span>
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "Muchas veces, una mirada externa experta identifica en semanas lo que internamente lleva años sin resolverse."
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Para quién — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Perfil Ideal</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-6 leading-tight">
                ¿Growth es <span className="text-systemic-orange">para tu empresa?</span>
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                Growth está diseñado para empresas que ya tienen base operativa sólida pero cuyo crecimiento está limitado por la falta de profesionalización en la conducción.
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
                <h3 className="text-2xl font-bold text-deep-navy mb-3">El Impacto: Conducción Dinámica</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">Growth transforma la forma en que tu empresa se conduce, coordina y crece.</p>
                <div className="space-y-5">
                  {impactos.map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-systemic-orange text-lg">{icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-deep-navy text-sm mb-0.5">{title}</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">Crecé sin romperte.</h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              Growth construye la estructura de liderazgo que tu empresa necesita para la próxima etapa. El diagnóstico inicial es sin costo.
            </p>
            <MagneticButton className="inline-block">
              <Link href="/contacto" className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300">
                HABLEMOS DE GROWTH
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
