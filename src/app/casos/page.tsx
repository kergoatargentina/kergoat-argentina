import PublicLayout from '@/components/PublicLayout'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Casos de Éxito | Kergoat Argentina',
}

type Caso = {
  id: string
  sector: string
  title: string
  description: string
  metric_value: string
  metric_label: string
  featured: boolean
  orden: number
  image_url: string | null
}

export default async function CasosPage() {
  const supabase = await createClient()
  const { data } = await supabase.from('casos').select('*').order('orden')
  const casos: Caso[] = data ?? []

  const featured = casos.find(c => c.featured) ?? casos[0] ?? null
  const rest = casos.filter(c => c.id !== featured?.id)

  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-20">

        {/* Hero */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">TRANSFORMACIÓN SISTÉMICA</span>
          <h1 className="text-6xl md:text-7xl font-bold text-deep-navy mb-8 tracking-tight">Casos de Éxito</h1>
          <p className="text-lg text-on-surface-variant">
            Evidencia tangible de empresas que profesionalizaron su estructura y escalaron sus resultados a través de nuestra metodología de consultoría sistémica.
          </p>
        </header>

        {/* Sin casos */}
        {casos.length === 0 && (
          <div className="text-center py-32">
            <span className="material-symbols-outlined text-6xl text-deep-navy/20 block mb-4">inbox</span>
            <p className="text-xl font-bold text-deep-navy/40">Próximamente</p>
            <p className="text-on-surface-variant mt-2">Estamos cargando los casos. Volvé pronto.</p>
          </div>
        )}

        {/* Bento Grid */}
        {casos.length > 0 && (
          <div className="grid grid-cols-12 gap-6 mb-32">

            {/* Caso destacado */}
            {featured && (
              <div className="col-span-12 lg:col-span-8 bg-pure-white border border-deep-navy/10 rounded-xl overflow-hidden group hover:border-systemic-orange/30 transition-all">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 bg-graphite min-h-[300px] flex items-center justify-center overflow-hidden">
                    {featured.image_url
                      ? <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover" />
                      : <span className="material-symbols-outlined text-9xl text-white/20">corporate_fare</span>
                    }
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-between bg-soft-apricot/30">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-systemic-orange">trending_up</span>
                        <span className="text-xs font-bold tracking-widest text-deep-navy uppercase">{featured.sector}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-deep-navy mb-4">{featured.title}</h3>
                      <p className="text-base text-on-surface-variant mb-6 leading-relaxed">{featured.description}</p>
                      {(featured.metric_value || featured.metric_label) && (
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="border-l-2 border-systemic-orange pl-4">
                            <div className="text-2xl font-semibold text-deep-navy">{featured.metric_value}</div>
                            <div className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">{featured.metric_label}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contacto"
                      className="liquid-glass inline-flex items-center justify-center py-4 px-8 text-deep-navy font-bold rounded-lg group-hover:bg-systemic-orange group-hover:text-white transition-all"
                    >
                      QUIERO ESTE RESULTADO
                      <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Metric Card estático */}
            <div className="col-span-12 lg:col-span-4 bg-deep-navy text-pure-white p-10 rounded-xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[140px]">analytics</span>
              </div>
              <h4 className="text-xs font-bold tracking-widest text-systemic-orange uppercase mb-4">IMPACTO TOTAL 2024</h4>
              <div className="space-y-8 relative z-10">
                <div>
                  <div className="text-5xl font-bold mb-1">120+</div>
                  <div className="text-base text-white/70">Empresas profesionalizadas</div>
                </div>
                <div className="h-px bg-pure-white/20 w-full" />
                <div>
                  <div className="text-5xl font-bold mb-1">AR$ 2.5B</div>
                  <div className="text-base text-white/70">En ahorros operativos generados</div>
                </div>
              </div>
            </div>

            {/* Casos secundarios */}
            {rest.map((caso) => (
              <div key={caso.id} className="col-span-12 md:col-span-6 lg:col-span-4 bg-pure-white border border-deep-navy/10 rounded-xl flex flex-col hover:border-systemic-orange/30 transition-all">
                <div className="h-48 bg-surface-container-high rounded-t-xl flex items-center justify-center relative overflow-hidden">
                  {caso.image_url
                    ? <img src={caso.image_url} alt={caso.title} className="w-full h-full object-cover" />
                    : <span className="material-symbols-outlined text-7xl text-deep-navy/20">business</span>
                  }
                  <div className="absolute bottom-4 left-4 bg-pure-white px-3 py-1 text-xs font-bold tracking-widest text-deep-navy rounded">
                    {caso.sector}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">{caso.title}</h3>
                  <p className="text-base text-on-surface-variant mb-6 leading-relaxed">{caso.description}</p>
                  <div className="mt-auto pt-6 border-t border-deep-navy/5 flex items-center justify-between">
                    <div>
                      <span className="text-systemic-orange font-bold text-2xl block">{caso.metric_value}</span>
                      <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase">{caso.metric_label}</span>
                    </div>
                    <Link href="/contacto" className="text-deep-navy font-bold text-sm hover:text-systemic-orange flex items-center">
                      Ver más <span className="material-symbols-outlined ml-1">chevron_right</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        <section className="mb-32 bg-soft-apricot rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 -mr-20 -mt-20">
            <span className="material-symbols-outlined text-[300px]">format_quote</span>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="material-symbols-outlined text-systemic-orange text-5xl mb-8 block">format_quote</span>
            <blockquote className="text-3xl font-semibold text-deep-navy mb-10 leading-snug">
              "Kergoat no solo nos trajo un consultor; nos trajo una estructura que no sabíamos que necesitábamos. En 6 meses, la empresa pasó de ser dirigida por intuición a ser gobernada por datos y procesos sistémicos."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-deep-navy/10 flex items-center justify-center mb-4 border-2 border-systemic-orange">
                <span className="material-symbols-outlined text-deep-navy text-2xl">person</span>
              </div>
              <div className="text-xl font-semibold text-deep-navy">Carlos Rodriguez</div>
              <div className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mt-1">CEO, DISTRIBUIDORA AUSTRAL</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 border-t border-deep-navy/10">
          <h2 className="text-4xl font-semibold text-deep-navy mb-8">¿Tu empresa es el próximo caso de éxito?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-systemic-orange text-pure-white px-10 py-5 font-bold text-xs tracking-widest uppercase hover:bg-deep-navy transition-all duration-300 shadow-xl shadow-systemic-orange/20"
            >
              AGENDAR DIAGNÓSTICO SIN COSTO
            </Link>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}
