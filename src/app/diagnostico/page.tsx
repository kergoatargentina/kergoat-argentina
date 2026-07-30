'use client'

import { useState } from 'react'
import Link from 'next/link'
import PublicLayout from '@/components/PublicLayout'
import { NAVY_GRADIENT, ORANGE_GRADIENT } from '@/lib/theme'

type Programa = 'impulso90' | 'foundation' | 'growth' | 'corporate' | 'international' | 'evolucion360'
type Weights = Partial<Record<Programa, number>>

interface Opcion { label: string; weights: Weights }
interface Pregunta { pregunta: string; icon: string; opciones: Opcion[] }

const programaInfo: Record<Programa, { title: string; sub: string; href: string; icon: string; desc: string }> = {
  impulso90: {
    title: 'Impulso 90', sub: 'Diagnóstico y Visibilidad',
    href: '/metodo/impulso-90', icon: 'rocket_launch',
    desc: 'Para empresas que necesitan resultados rápidos: eliminar cuellos de botella, profesionalizar procesos y generar métricas reales en 90 días.',
  },
  foundation: {
    title: 'Foundation', sub: 'Ordenamiento y Coordinación',
    href: '/metodo/foundation', icon: 'layers',
    desc: 'Instalación del sistema operativo organizacional. Para empresas que necesitan procesos, coordinación y estructura antes de seguir creciendo.',
  },
  growth: {
    title: 'Growth', sub: 'Profesionalización y Gobernanza',
    href: '/metodo/growth', icon: 'trending_up',
    desc: 'Para empresas donde el equipo directivo no escala al mismo ritmo que el negocio. Gobernanza, liderazgo estructurado y segunda línea de conducción.',
  },
  corporate: {
    title: 'Corporate', sub: 'Integración Sistémica',
    href: '/metodo/corporate', icon: 'corporate_fare',
    desc: 'Transformación integral para organizaciones complejas. Reestructuración, procesos críticos, cultura y conducción sistémica simultáneamente.',
  },
  international: {
    title: 'International', sub: 'Expansión Global',
    href: '/metodo/international', icon: 'public',
    desc: 'Para empresas con planes de expansión a nuevos mercados. Estructura corporativa, adaptación cultural y posicionamiento estratégico internacional.',
  },
  evolucion360: {
    title: 'Evolución 360', sub: 'Salud Sistémica Recurrente',
    href: '/metodo/evolucion-360', icon: 'autorenew',
    desc: 'Para empresas que ya hicieron una transformación y quieren garantizar que los resultados se mantengan y sigan creciendo trimestralmente.',
  },
}

const preguntas: Pregunta[] = [
  {
    pregunta: '¿Cuántas personas trabajan en tu empresa?',
    icon: 'groups',
    opciones: [
      { label: '1 a 10 personas', weights: { impulso90: 2, foundation: 1 } },
      { label: '11 a 50 personas', weights: { foundation: 2, impulso90: 1, growth: 1 } },
      { label: '51 a 200 personas', weights: { growth: 2, corporate: 2 } },
      { label: 'Más de 200 personas', weights: { corporate: 3, international: 1 } },
    ],
  },
  {
    pregunta: '¿Cuál es el principal desafío de tu empresa hoy?',
    icon: 'flag',
    opciones: [
      { label: 'Los resultados dependen de mí o de pocas personas clave', weights: { impulso90: 3, foundation: 2 } },
      { label: 'El equipo directivo no crece al mismo ritmo que el negocio', weights: { growth: 3, corporate: 1 } },
      { label: 'Necesitamos una reestructuración profunda y sostenida', weights: { corporate: 3, foundation: 1 } },
      { label: 'Queremos expandirnos a nuevos mercados', weights: { international: 4 } },
      { label: 'Ya transformamos la empresa y queremos sostener los cambios', weights: { evolucion360: 4 } },
    ],
  },
  {
    pregunta: '¿En cuánto tiempo necesitás ver resultados concretos?',
    icon: 'schedule',
    opciones: [
      { label: 'En los próximos 90 días', weights: { impulso90: 3 } },
      { label: 'En 6 a 12 meses', weights: { foundation: 2, growth: 2 } },
      { label: 'Pienso en el largo plazo y quiero construir algo sólido', weights: { corporate: 2, evolucion360: 2, international: 2 } },
    ],
  },
  {
    pregunta: '¿Cómo se toman hoy las decisiones importantes en tu empresa?',
    icon: 'account_tree',
    opciones: [
      { label: 'Todo pasa por el dueño o por una sola persona', weights: { impulso90: 3, foundation: 2 } },
      { label: 'Hay mandos medios pero sin sistemas claros de decisión', weights: { foundation: 3, growth: 1 } },
      { label: 'Hay equipo directivo pero necesita más estructura y método', weights: { growth: 3, corporate: 1 } },
      { label: 'Tenemos estructura sólida y queremos escalar', weights: { corporate: 2, international: 2, evolucion360: 1 } },
    ],
  },
  {
    pregunta: '¿Tu empresa tiene planes de expansión internacional?',
    icon: 'flight_takeoff',
    opciones: [
      { label: 'No, nos enfocamos en el mercado local por ahora', weights: {} },
      { label: 'Lo estamos evaluando para el futuro', weights: { international: 2 } },
      { label: 'Sí, es una prioridad para los próximos 2 años', weights: { international: 4 } },
    ],
  },
  {
    pregunta: '¿Trabajaron antes con consultoría estratégica o de gestión?',
    icon: 'history_edu',
    opciones: [
      { label: 'No, nunca hemos trabajado con consultoría', weights: { impulso90: 2, foundation: 2 } },
      { label: 'Sí, algo puntual, pero queremos ir más profundo', weights: { growth: 2, corporate: 2 } },
      { label: 'Sí, hicimos una transformación y queremos sostenerla', weights: { evolucion360: 4 } },
    ],
  },
]

export default function DiagnosticoPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(preguntas.length).fill(null))

  const selected = answers[current]

  const choose = (idx: number) => {
    const next = [...answers]
    next[current] = idx
    setAnswers(next)
  }

  const goNext = () => {
    if (current < preguntas.length - 1) setCurrent(current + 1)
    else setStep('result')
  }

  const goBack = () => {
    if (current > 0) setCurrent(current - 1)
    else setStep('intro')
  }

  const restart = () => {
    setStep('intro')
    setCurrent(0)
    setAnswers(Array(preguntas.length).fill(null))
  }

  const calcResult = (): { first: Programa; second: Programa | null } => {
    const scores: Record<Programa, number> = {
      impulso90: 0, foundation: 0, growth: 0,
      corporate: 0, international: 0, evolucion360: 0,
    }
    answers.forEach((ans, qi) => {
      if (ans === null) return
      const w = preguntas[qi].opciones[ans]?.weights ?? {}
      for (const [p, pts] of Object.entries(w)) {
        scores[p as Programa] += pts as number
      }
    })
    const sorted = (Object.entries(scores) as [Programa, number][]).sort(([, a], [, b]) => b - a)
    return {
      first: sorted[0][0],
      second: sorted[1][1] > 0 ? sorted[1][0] : null,
    }
  }

  /* ─── INTRO ─────────────────────────────────────────────────── */
  if (step === 'intro') {
    return (
      <PublicLayout>
        <section
          className="min-h-[92vh] flex items-center justify-center relative overflow-hidden"
          style={{ background: NAVY_GRADIENT }}
        >
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.07)', filter: 'blur(100px)' }} />
          <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-systemic-orange/40 text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8">
              <span className="material-symbols-outlined text-sm">quiz</span>
              Diagnóstico Express — 2 minutos
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Descubrí qué programa Kergoat es para tu empresa
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-12 max-w-lg mx-auto">
              Respondé 6 preguntas y te recomendamos el programa exacto según el momento de madurez de tu organización.
            </p>
            <button
              onClick={() => setStep('quiz')}
              className="inline-flex items-center gap-3 text-white px-12 py-5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: ORANGE_GRADIENT }}
            >
              EMPEZAR EL DIAGNÓSTICO
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </PublicLayout>
    )
  }

  /* ─── QUIZ ───────────────────────────────────────────────────── */
  if (step === 'quiz') {
    const q = preguntas[current]
    const progressPct = (current / preguntas.length) * 100

    return (
      <PublicLayout>
        <section
          className="min-h-[92vh] py-16 flex items-center relative overflow-hidden"
          style={{ background: NAVY_GRADIENT }}
        >
          <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(255,107,0,0.05)', filter: 'blur(80px)' }} />
          <div className="max-w-[680px] mx-auto px-6 w-full relative z-10">

            {/* Progress */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase">
                  Pregunta {current + 1} de {preguntas.length}
                </span>
                <span className="text-xs text-white/35">{Math.round(progressPct)}% completado</span>
              </div>
              <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%`, background: ORANGE_GRADIENT }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-systemic-orange">{q.icon}</span>
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight">{q.pregunta}</h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-10">
              {q.opciones.map((op, idx) => (
                <button
                  key={idx}
                  onClick={() => choose(idx)}
                  className="w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center gap-4"
                  style={{
                    background: selected === idx ? 'rgba(255,107,0,0.10)' : 'rgba(255,255,255,0.04)',
                    borderColor: selected === idx ? 'rgba(255,107,0,0.55)' : 'rgba(255,255,255,0.09)',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      borderColor: selected === idx ? '#FF6B00' : 'rgba(255,255,255,0.25)',
                      background: selected === idx ? '#FF6B00' : 'transparent',
                    }}
                  >
                    {selected === idx && (
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '11px' }}>check</span>
                    )}
                  </div>
                  <span className="text-sm leading-snug" style={{ color: selected === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)' }}>
                    {op.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 text-white/35 hover:text-white/70 text-sm font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                {current === 0 ? 'Inicio' : 'Anterior'}
              </button>
              <button
                onClick={goNext}
                disabled={selected === null}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
                style={{
                  background: selected !== null ? '#FF6B00' : 'rgba(255,255,255,0.08)',
                  color: 'white',
                }}
              >
                {current === preguntas.length - 1 ? 'Ver mi programa' : 'Siguiente'}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </PublicLayout>
    )
  }

  /* ─── RESULT ─────────────────────────────────────────────────── */
  const { first, second } = calcResult()
  const main = programaInfo[first]
  const alt = second ? programaInfo[second] : null

  return (
    <PublicLayout>
      <section
        className="py-24 min-h-[92vh] flex items-center relative overflow-hidden"
        style={{ background: NAVY_GRADIENT }}
      >
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(100px)' }} />
        <div className="max-w-[680px] mx-auto px-6 w-full relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-systemic-orange/15 flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-systemic-orange text-3xl">check_circle</span>
            </div>
            <p className="text-xs font-bold tracking-widest text-systemic-orange uppercase mb-3">Tu diagnóstico está listo</p>
            <h1 className="text-4xl font-bold text-white">El programa para tu empresa es</h1>
          </div>

          {/* Main recommendation */}
          <div
            className="p-10 rounded-2xl border mb-5"
            style={{ background: 'rgba(255,107,0,0.08)', borderColor: 'rgba(255,107,0,0.35)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-systemic-orange/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-systemic-orange text-3xl">{main.icon}</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">{main.title}</h2>
                <p className="text-xs font-bold tracking-widest text-systemic-orange uppercase">{main.sub}</p>
              </div>
            </div>
            <p className="text-base text-white/70 leading-relaxed mb-8">{main.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={main.href}
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ background: '#FF6B00' }}
              >
                Ver programa completo
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm hover:border-white/40 transition-colors"
              >
                Hablar con un consultor
              </Link>
            </div>
          </div>

          {/* Secondary */}
          {alt && (
            <div
              className="p-6 rounded-xl border flex items-start gap-5 mb-10"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-systemic-orange/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-systemic-orange text-lg">{alt.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-white/35 uppercase mb-1">También podría interesarte</p>
                <p className="text-white font-bold text-sm mb-2">
                  {alt.title}
                  <span className="text-white/40 font-normal ml-2">— {alt.sub}</span>
                </p>
                <Link href={alt.href} className="text-systemic-orange text-xs font-bold hover:underline inline-flex items-center gap-1">
                  Ver programa
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={restart}
              className="text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              ← Volver a empezar
            </button>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
