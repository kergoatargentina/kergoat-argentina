import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Link from 'next/link'

export const metadata = {
  title: 'El Método Kergoat | Kergoat Argentina',
}

const programas = [
  {
    num: '01',
    title: 'IMPULSO 90',
    sub: 'Empresa Visible',
    desc: 'Diagnóstico ejecutivo. Hacemos visible lo invisible: qué te frena y cuánto te cuesta.',
    href: '/metodo/impulso-90',
    dark: false,
  },
  {
    num: '02',
    title: 'FOUNDATION',
    sub: 'Empresa Coordinada',
    desc: 'Instalación del sistema operativo. Se termina el "todo pasa por el dueño".',
    href: '/metodo/foundation',
    dark: false,
  },
  {
    num: '03',
    title: 'GROWTH',
    sub: 'Empresa Profesional',
    desc: 'Gobernanza y liderazgo corporativo para crecer sin romperse.',
    href: null,
    dark: false,
  },
  {
    num: '04',
    title: 'CORPORATE',
    sub: 'Empresa Integrada',
    desc: 'Transformación sistémica integral para corporaciones complejas.',
    href: null,
    dark: false,
  },
  {
    num: '05',
    title: 'INTERNATIONAL',
    sub: 'Expansión Estratégica',
    desc: 'Estructura, cultura y arquitectura corporativa para operar en el exterior.',
    href: null,
    dark: false,
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
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Hero */}
        <AnimateOnScroll direction="up">
          <header className="mb-20 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Metodología</span>
            <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-8 tracking-tight leading-tight">Método Kergoat de Transformación Empresarial</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Planes pensados para cada nivel de madurez. Proponemos saltos de capacidad organizacional que llevan tu empresa del caos operativo a la escalabilidad sistémica.
            </p>
          </header>
        </AnimateOnScroll>

        {/* 5 programas en grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programas.map(({ num, title, sub, desc, href }, i) => {
              const card = (
                <div className="bg-pure-white p-10 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/50 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col group">
                  <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-2">{num}</span>
                  <h2 className="text-2xl font-black text-deep-navy mb-1">{title}</h2>
                  <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-6">{sub}</p>
                  <p className="text-base text-on-surface-variant leading-relaxed flex-1">{desc}</p>
                  {href && (
                    <div className="flex items-center gap-2 text-systemic-orange font-bold text-sm mt-8 group-hover:gap-4 transition-all">
                      Ver programa
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </div>
                  )}
                </div>
              )
              return (
                <AnimateOnScroll key={num} direction="up" delay={i * 60}>
                  {href ? <Link href={href}>{card}</Link> : card}
                </AnimateOnScroll>
              )
            })}

            {/* Evolución 360 — destacado */}
            <AnimateOnScroll direction="up" delay={300} className="md:col-span-2 lg:col-span-3 lg:col-start-1">
              <div className="bg-systemic-orange p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-[120px] font-black text-white/10 select-none pointer-events-none">6</div>
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-widest text-white/70 uppercase block mb-2">06 — Gobernanza Recurrente</span>
                  <h2 className="text-3xl font-black text-white mb-3">EVOLUCIÓN 360</h2>
                  <p className="text-white/90 leading-relaxed max-w-xl">
                    Tu empresa no vuelve al desorden: cada trimestre evoluciona con dirección, indicadores y liderazgo activo.
                  </p>
                </div>
                <Link href="/contacto" className="shrink-0 bg-deep-navy text-white px-10 py-5 rounded-xl font-black hover:bg-white hover:text-deep-navy transition-all tracking-widest uppercase text-sm relative z-10">
                  Agendar Asesoría
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Fases del proceso */}
        <section className="py-20 border-t border-deep-navy/10 mt-16">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">El Proceso</span>
              <h2 className="text-3xl font-semibold text-deep-navy">Fases de los Programas</h2>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Línea conectora — solo desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-systemic-orange/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {fases.map(({ num, icon, title }, i) => (
                <AnimateOnScroll key={num} direction="up" delay={i * 80}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-deep-navy/10 flex items-center justify-center text-systemic-orange mb-6 group-hover:bg-systemic-orange group-hover:text-white group-hover:border-systemic-orange group-hover:-translate-y-2 transition-all duration-300 shadow-md z-10">
                      <div className="absolute -top-3 -right-3 w-7 h-7 bg-deep-navy text-white text-xs font-black rounded-full flex items-center justify-center">
                        {num}
                      </div>
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <p className="text-sm font-bold text-deep-navy leading-snug px-2">{title}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}
