import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Corporate — Integración Sistémica | Kergoat Argentina',
}

const pilares = [
  { icon: 'account_balance', title: 'Reestructuración Organizacional', desc: 'Rediseñamos la arquitectura de la empresa para eliminar redundancias, aumentar la eficiencia y liberar capacidad operativa en cada área.' },
  { icon: 'analytics', title: 'Procesos Críticos y Rentabilidad', desc: 'Revisión profunda de los procesos que más impactan en el margen: identificamos fugas, optimizamos flujos y establecemos controles de rentabilidad.' },
  { icon: 'settings_suggest', title: 'Conducción y Coordinación Operativa', desc: 'Instalamos sistemas de conducción que permiten liderar, comunicar y anticipar — sacando definitivamente a la organización de la reactividad.' },
  { icon: 'corporate_fare', title: 'Cultura Organizacional', desc: 'Desarrollamos una cultura orientada a resultados con lenguaje común, ética profesional y estándares de calidad internalizados en todos los niveles.' },
]

const engranajes = [
  { num: '01', icon: 'manage_accounts', title: 'Productividad y Resultados', desc: 'Reestructuración y eficiencia organizacional. Optimización de equipos y liderazgo. Nuevas estrategias comerciales y expansión.' },
  { num: '02', icon: 'schema', title: 'Ordenamiento Organizacional', desc: 'Revisión de procesos críticos y rentabilidad. Posicionamiento estratégico internacional. Cultura orientada a resultados.' },
  { num: '03', icon: 'settings', title: 'Conducción y Coordinación', desc: 'Sistemas de conducción y liderazgo activo. Articulación fluida entre niveles jerárquicos. Capacidad de anticipación y planificación.' },
]

const impactos = [
  { icon: 'hub', title: 'Articulación fluida', desc: 'Equipos verdaderamente coordinados con comunicación clara entre todos los niveles jerárquicos.' },
  { icon: 'record_voice_over', title: 'Salida de la reactividad', desc: 'Sistemas que permiten conducir, liderar y anticipar en lugar de apagar incendios permanentemente.' },
  { icon: 'trending_up', title: 'Crecimiento sostenido', desc: 'Aumento de la capacidad organizacional para sostener procesos complejos de cambio a largo plazo.' },
  { icon: 'workspace_premium', title: 'Valor corporativo', desc: 'Una corporación con integración sistémica real es un activo que atrae inversión y talento de primer nivel.' },
]

export default function CorporatePage() {
  return (
    <PublicLayout>

      {/* 1. Hero */}
      <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <ParticleCanvas opacity={0.4} />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(100px)' }} />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <Link href="/metodo" className="inline-flex items-center gap-2 text-white/40 hover:text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Programas
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 ml-6">
              <span className="material-symbols-outlined text-sm">corporate_fare</span>
              Nivel 04 — Corporate
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Integración Sistémica para organizaciones complejas
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Transformación integral para corporaciones en plena expansión. Intervenimos donde su empresa más lo necesita, integrando los tres engranajes del Método Kergoat en una arquitectura sistémica de alto impacto.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Los 3 engranajes — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Método Kergoat — Intervención Integral</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Los 3 engranajes que mueven su empresa</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Un engranaje aislado no mueve la máquina. Corporate actúa en los tres ejes simultáneamente para lograr una transformación real y duradera.
              </p>
            </div>
          </AnimateOnScroll>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {engranajes.map(({ num, icon, title, desc }) => (
              <StaggerItem key={num}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-8 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-black text-deep-navy/4 leading-none">{num}</div>
                    <div className="w-12 h-12 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5 group-hover:bg-systemic-orange transition-colors duration-300">
                      <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-xl transition-colors duration-300">{icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-3">Engranaje {num} — {title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
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
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Áreas de Intervención</span>
              <h2 className="text-4xl font-semibold text-white mb-4">Diseñamos intervenciones de alto impacto</h2>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed">Adaptadas a cada estructura empresarial. Cada intervención Corporate es única porque cada organización compleja tiene sus propias palancas de transformación.</p>
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
                  "Muchas veces, una mirada externa experta identifica en semanas lo que internamente lleva años sin resolverse."
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
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">El Impacto</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Conducción Dinámica y Organizacional</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Corporate genera un cambio estructural profundo que se traduce en crecimiento sostenido y capacidad real de escala.
              </p>
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
            <h2 className="text-4xl font-semibold text-white mb-6">Transformación integral para el próximo nivel.</h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              Corporate es para organizaciones que no se conforman con crecer — quieren escalar con solidez sistémica. El diagnóstico es sin costo.
            </p>
            <MagneticButton className="inline-block">
              <Link href="/contacto" className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300">
                HABLEMOS DE CORPORATE
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </section>

    </PublicLayout>
  )
}
