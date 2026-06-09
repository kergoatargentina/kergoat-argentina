import PublicLayout from '@/components/PublicLayout'

export const metadata = {
  title: 'Contacto | Kergoat Argentina',
}

export default function ContactoPage() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="text-xs font-bold tracking-widest text-systemic-orange uppercase block mb-4">Contacto</span>
            <h1 className="text-5xl font-bold text-deep-navy mb-6 tracking-tight leading-tight">Empezá tu transformación sistémica</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
              El primer paso es un diagnóstico sin costo. Analizamos tu estructura y te mostramos con claridad el camino hacia la profesionalización.
            </p>

            <div className="space-y-6">
              {[
                { icon: 'schedule', title: 'Respuesta en 48hs', desc: 'Un consultor Kergoat se comunica con vos para coordinar el diagnóstico.' },
                { icon: 'payments', title: 'Sin costo inicial', desc: 'El diagnóstico de pre-evaluación es completamente gratuito y sin compromiso.' },
                { icon: 'verified', title: 'Metodología probada', desc: 'Más de 120 empresas argentinas ya pasaron por el proceso Kergoat.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-soft-apricot flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-systemic-orange">{icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy">{title}</div>
                    <div className="text-sm text-on-surface-variant mt-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pure-white p-10 rounded-2xl border border-deep-navy/10 shadow-sm">
            <h2 className="text-2xl font-semibold text-deep-navy mb-8">Formulario de Pre-Diagnóstico</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Nombre</label>
                  <input type="text" className="w-full border border-outline/40 rounded px-4 py-3 text-base text-on-surface focus:outline-none focus:border-systemic-orange transition-colors" placeholder="Juan García" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Empresa</label>
                  <input type="text" className="w-full border border-outline/40 rounded px-4 py-3 text-base text-on-surface focus:outline-none focus:border-systemic-orange transition-colors" placeholder="Mi Empresa S.A." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Email</label>
                <input type="email" className="w-full border border-outline/40 rounded px-4 py-3 text-base text-on-surface focus:outline-none focus:border-systemic-orange transition-colors" placeholder="juan@empresa.com" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Teléfono</label>
                <input type="tel" className="w-full border border-outline/40 rounded px-4 py-3 text-base text-on-surface focus:outline-none focus:border-systemic-orange transition-colors" placeholder="+54 9 11 0000 0000" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">¿Cuál es tu principal desafío?</label>
                <textarea rows={4} className="w-full border border-outline/40 rounded px-4 py-3 text-base text-on-surface focus:outline-none focus:border-systemic-orange transition-colors resize-none" placeholder="Contanos brevemente qué problema querés resolver..." />
              </div>
              <button type="submit" className="w-full bg-systemic-orange text-pure-white py-4 font-bold text-sm tracking-widest uppercase hover:bg-deep-navy transition-all duration-300 flex items-center justify-center gap-2">
                ENVIAR SOLICITUD DE DIAGNÓSTICO
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </PublicLayout>
  )
}
