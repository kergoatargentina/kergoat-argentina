import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup'
import ParticleCanvas from '@/components/ParticleCanvas'
import MouseGlowCard from '@/components/MouseGlowCard'
import MagneticButton from '@/components/MagneticButton'
import Link from 'next/link'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

export const metadata = {
  title: 'Impulso 90 — Diagnóstico y Visibilidad | Kergoat Argentina',
}

const fases = [
  {
    num: '01',
    dias: 'Días 1–30',
    title: 'Diagnóstico y Diseño',
    desc: 'Auditoría sistémica completa. Identificación de cuellos de botella y diseño del plan de aceleración a medida.',
    icon: 'search',
    items: ['Mapeo de procesos actuales', 'Identificación de fugas operativas', 'Diseño del roadmap de 90 días'],
  },
  {
    num: '02',
    dias: 'Días 31–60',
    title: 'Implementación y Ajuste',
    desc: 'Puesta en marcha del plan con acompañamiento semanal. Ajustes en tiempo real según resultados.',
    icon: 'build',
    items: ['Activación de procesos nuevos', 'Capacitación de mandos medios', 'KPIs semanales de seguimiento'],
  },
  {
    num: '03',
    dias: 'Días 61–90',
    title: 'Escalamiento y Entrega',
    desc: 'Consolidación del sistema, medición de impacto y transferencia de autonomía al equipo directivo.',
    icon: 'trending_up',
    items: ['Informe de impacto sistémico', 'Protocolo de mantenimiento', 'Plan de escalamiento siguiente'],
  },
]

const metricas = [
  { value: '+40%', label: 'Eficiencia operativa' },
  { value: '3.2x', label: 'ROI estimado' },
  { value: '-30%', label: 'Costos de estructura' },
  { value: '100%', label: 'Procesos documentados' },
]

const perfil = [
  'Tu empresa factura pero no escala',
  'Tenés un equipo pero seguís siendo el cuello de botella',
  'Los resultados dependen de personas, no de procesos',
  'Querés profesionalizar antes de abrir nuevas sucursales o contratar',
  'Necesitás métricas reales para tomar decisiones',
]

const pasos = [
  { step: '1', text: 'Completás el formulario de pre-diagnóstico (10 min)' },
  { step: '2', text: 'Un consultor Kergoat te contacta en 48hs' },
  { step: '3', text: 'Realizamos el diagnóstico inicial sin costo' },
  { step: '4', text: 'Presentamos el plan de Impulso 90 a medida' },
]

export default function Impulso90Page() {
  return (
    <PublicLayout>

      {/* 1. Hero — navy + partículas */}
      <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <ParticleCanvas opacity={0.4} />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(100px)' }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <AnimateOnScroll direction="up">
            <Link href="/metodo" className="inline-flex items-center gap-2 text-white/40 hover:text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Programas
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8 ml-6">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Nivel 01 — Impulso 90
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl">
              Resultados visibles en 90 días
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={150}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Impulso 90 es el programa de aceleración estructural de Kergoat. En 90 días transformamos la estructura comercial y operativa para generar crecimiento sostenible y medible, eliminando cuellos de botella.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Las 3 fases — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Estructura del Programa</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-4">Las 3 Fases de Impulso 90</h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Cada fase tiene objetivos claros, entregables medibles y acompañamiento constante del equipo Kergoat.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {fases.map(({ num, dias, title, desc, icon, items }) => (
              <StaggerItem key={num}>
                <MouseGlowCard className="rounded-2xl h-full">
                  <div className="bg-white/92 p-8 rounded-[19px] border border-deep-navy/10 h-full group hover:border-systemic-orange/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-systemic-orange rounded-full" />
                    <span className="text-xs font-black tracking-widest text-systemic-orange uppercase block mb-3">{dias}</span>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <h3 className="text-xl font-bold text-deep-navy">{title}</h3>
                      <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 flex items-center justify-center shrink-0 group-hover:bg-systemic-orange transition-colors duration-300">
                        <span className="material-symbols-outlined text-systemic-orange group-hover:text-white text-lg transition-colors duration-300">{icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{desc}</p>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-deep-navy font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-systemic-orange shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-6xl font-black text-deep-navy/4 absolute bottom-4 right-5 leading-none">{num}</div>
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
              <h2 className="text-4xl font-semibold text-white">Qué esperar al finalizar Impulso 90</h2>
            </div>
          </AnimateOnScroll>

          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
            {metricas.map(({ value, label }) => (
              <StaggerItem key={label}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-systemic-orange/40 transition-all text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="text-4xl md:text-5xl font-black text-systemic-orange mb-3">{value}</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/50">{label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Para quién es — light cream */}
      <section className="py-24 md:py-32" style={{ background: '#fbf9f8' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            <AnimateOnScroll direction="up" className="lg:w-1/2">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-5">Perfil Ideal</span>
              <h2 className="text-4xl font-bold text-deep-navy mb-6 leading-tight">
                ¿Impulso 90 es <span className="text-systemic-orange">para tu empresa?</span>
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                El programa está diseñado para empresas que ya tienen operación establecida pero sienten que el crecimiento está limitado por falta de estructura y procesos claros.
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
                <h3 className="text-2xl font-bold text-deep-navy mb-8">Comenzar el proceso</h3>
                <div className="space-y-5 mb-10">
                  {pasos.map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-systemic-orange flex items-center justify-center font-black text-white text-xs shrink-0">{step}</div>
                      <span className="text-sm text-on-surface-variant leading-relaxed pt-1.5">{text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contacto"
                  className="liquid-glass-primary w-full text-white py-4 font-bold text-sm flex items-center justify-center gap-2 rounded-xl"
                >
                  QUIERO ARRANCAR IMPULSO 90
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* 5. CTA — naranja */}
      <section className="py-24 overflow-hidden" style={{ background: ORANGE_GRADIENT }}>
        <AnimateOnScroll direction="up">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              90 días para cambiar la trayectoria de tu empresa.
            </h2>
            <p className="text-base text-white/80 mb-10 max-w-xl mx-auto">
              El diagnóstico inicial es sin costo. Sin compromiso.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-systemic-orange px-12 py-5 rounded-xl font-bold text-sm hover:bg-deep-navy hover:text-white transition-all duration-300"
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
