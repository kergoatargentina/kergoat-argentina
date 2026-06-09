import PublicLayout from '@/components/PublicLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-background min-h-[90vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-soft-apricot text-systemic-orange text-xs font-bold tracking-widest uppercase mb-8">
              <span className="material-symbols-outlined text-base">account_tree</span>
              Consultoría Sistémica
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-deep-navy leading-tight tracking-tight mb-8">
              Del Caos al<br />
              <span className="text-systemic-orange">Orden Sistémico</span>
            </h1>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Profesionalizamos empresas argentinas a través de metodologías estructurales probadas. Diseñamos los cimientos donde la autoridad y el propósito se alinean perfectamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="liquid-glass-primary text-pure-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                Agendar Diagnóstico Gratuito
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/metodo"
                className="bg-transparent border-2 border-deep-navy text-deep-navy px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-soft-apricot transition-all duration-300"
              >
                Conocer el Método
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-deep-navy text-pure-white p-8 rounded-2xl col-span-2">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-systemic-orange mb-2">120+</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/60">Empresas</div>
                </div>
                <div className="border-x border-white/10 px-4">
                  <div className="text-4xl font-bold text-systemic-orange mb-2">90</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/60">Días al resultado</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-systemic-orange mb-2">3.2x</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/60">ROI promedio</div>
                </div>
              </div>
            </div>

            <div className="bg-soft-apricot p-8 rounded-2xl border border-systemic-orange/20">
              <span className="material-symbols-outlined text-deep-navy text-4xl mb-4 block">layers</span>
              <h3 className="text-lg font-semibold text-deep-navy mb-2">Nivel Foundation</h3>
              <p className="text-sm text-on-surface-variant">Orden y coordinación organizacional</p>
            </div>

            <div className="bg-pure-white p-8 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/30 transition-all">
              <span className="material-symbols-outlined text-systemic-orange text-4xl mb-4 block">rocket_launch</span>
              <h3 className="text-lg font-semibold text-deep-navy mb-2">Impulso 90</h3>
              <p className="text-sm text-on-surface-variant">Escalamiento sistémico en 90 días</p>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Por Qué Kergoat</span>
            <h2 className="text-4xl font-semibold text-deep-navy mb-6">
              Una organización sin estructura es un grupo de personas trabajando duro en direcciones opuestas
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Nuestra metodología transforma esa energía dispersa en un sistema escalable donde cada persona conoce su rol, sus procesos y su impacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'manage_accounts',
                title: 'Diagnóstico Sistémico',
                desc: 'Analizamos la estructura actual, identificamos fugas operativas y diseñamos el mapa de transformación.',
              },
              {
                icon: 'schema',
                title: 'Implementación del Método',
                desc: 'Aplicamos Foundation e Impulso 90 en etapas claras, con hitos medibles y acompañamiento directo.',
              },
              {
                icon: 'trending_up',
                title: 'Escalamiento Sostenible',
                desc: 'Una vez consolidada la estructura, activamos el crecimiento con procesos que no colapsan bajo presión.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-pure-white p-10 rounded-2xl border border-deep-navy/10 hover:border-systemic-orange/30 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-systemic-orange text-4xl mb-6 block">{icon}</span>
                <h3 className="text-xl font-semibold text-deep-navy mb-4">{title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología — preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">El Método Kergoat</span>
            <h2 className="text-4xl font-semibold text-deep-navy mb-6">Un camino previsible hacia la profesionalización</h2>
            <p className="text-base text-on-surface-variant leading-relaxed mb-10">
              No trabajamos con parches ni soluciones temporales. Diseñamos la arquitectura sistémica que permite a tu empresa crecer x10 sin colapsar por falta de estructura.
            </p>

            <div className="space-y-6">
              {[
                { num: '01', label: 'Foundation', desc: 'Ordenamiento, roles y procesos base' },
                { num: '02', label: 'Impulso 90', desc: 'Escalamiento comercial en 90 días' },
                { num: '03', label: 'Growth', desc: 'Expansión y autonomía directiva' },
              ].map(({ num, label, desc }) => (
                <div key={num} className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-systemic-orange text-pure-white flex items-center justify-center font-bold text-xs shrink-0">
                    {num}
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy">{label}</div>
                    <div className="text-sm text-on-surface-variant">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/metodo"
              className="mt-10 inline-flex items-center gap-2 text-systemic-orange font-bold hover:underline"
            >
              Ver el método completo
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="lg:w-1/2 bg-deep-navy rounded-3xl p-10 text-pure-white">
            <div className="text-xs font-bold tracking-widest text-systemic-orange uppercase mb-8">Caso de Éxito</div>
            <blockquote className="text-xl font-semibold leading-relaxed mb-8">
              "En 6 meses, la empresa pasó de ser dirigida por intuición a ser gobernada por datos y procesos sistémicos."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-systemic-orange">person</span>
              </div>
              <div>
                <div className="font-bold">Carlos Rodriguez</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">CEO, Distribuidora Austral</div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-systemic-orange">+45%</div>
                <div className="text-xs text-white/60 uppercase tracking-widest mt-1">Eficiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-systemic-orange">90 días</div>
                <div className="text-xs text-white/60 uppercase tracking-widest mt-1">Implementación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-soft-apricot">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold text-deep-navy mb-6">¿Tu empresa es el próximo caso de éxito?</h2>
          <p className="text-base text-on-surface-variant mb-10 max-w-xl mx-auto">
            El primer paso es un diagnóstico sin costo donde analizamos tu estructura y te mostramos el camino.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-systemic-orange text-pure-white px-12 py-5 font-bold text-sm hover:bg-deep-navy transition-all duration-300"
          >
            AGENDAR DIAGNÓSTICO SIN COSTO
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
