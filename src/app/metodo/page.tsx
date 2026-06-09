import PublicLayout from '@/components/PublicLayout'
import Link from 'next/link'

export const metadata = {
  title: 'El Método Kergoat | Kergoat Argentina',
}

export default function MetodoPage() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <header className="mb-24 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Metodología</span>
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-8 tracking-tight leading-tight">El Método Kergoat</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Un sistema de consultoría estructural en dos niveles que lleva tu empresa del caos operativo a la escalabilidad sistémica, con resultados medibles en cada etapa.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <Link href="/metodo/foundation" className="group bg-pure-white p-12 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase">Nivel 01</span>
              <span className="material-symbols-outlined text-systemic-orange text-4xl">account_tree</span>
            </div>
            <h2 className="text-3xl font-bold text-deep-navy mb-4">Foundation</h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-8">
              Ordenamiento y coordinación organizacional. Definimos quién hace qué, cómo y para qué. La base que todo lo demás necesita.
            </p>
            <div className="flex items-center gap-2 text-systemic-orange font-bold text-sm group-hover:gap-4 transition-all">
              Ver nivel Foundation
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>

          <Link href="/metodo/impulso-90" className="group bg-deep-navy p-12 rounded-2xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase">Nivel 02</span>
              <span className="material-symbols-outlined text-systemic-orange text-4xl">rocket_launch</span>
            </div>
            <h2 className="text-3xl font-bold text-pure-white mb-4">Impulso 90</h2>
            <p className="text-base text-white/70 leading-relaxed mb-8">
              Escalamiento sistémico en 90 días. Profesionalización de mandos medios, KPIs reales y crecimiento sostenible.
            </p>
            <div className="flex items-center gap-2 text-systemic-orange font-bold text-sm group-hover:gap-4 transition-all">
              Ver Impulso 90
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </main>
    </PublicLayout>
  )
}
