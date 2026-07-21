import PublicLayout from '@/components/PublicLayout'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata = {
  title: 'Contacto | Kergoat Argentina',
}

export default function ContactoPage() {
  return (
    <PublicLayout>
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">

        <AnimateOnScroll direction="up">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-systemic-orange/10 text-systemic-orange text-xs font-bold border border-systemic-orange/20 uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-base">mail</span>
              Contacto Directo
            </span>
            <h1 className="text-5xl font-bold text-deep-navy tracking-tight leading-tight">Inicie su proceso de transformación</h1>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Formulario */}
          <AnimateOnScroll direction="up" className="lg:w-2/3 w-full">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-deep-navy/10 shadow-sm h-full">
              <h2 className="text-xl font-bold text-deep-navy mb-8 uppercase tracking-widest">Mensaje Directo</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Nombre completo</label>
                    <input type="text" className="w-full border border-outline/40 rounded-xl px-4 py-4 text-base text-on-surface bg-white focus:outline-none focus:border-systemic-orange focus:ring-2 focus:ring-systemic-orange/20 transition-all" placeholder="Ej: Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Empresa</label>
                    <input type="text" className="w-full border border-outline/40 rounded-xl px-4 py-4 text-base text-on-surface bg-white focus:outline-none focus:border-systemic-orange focus:ring-2 focus:ring-systemic-orange/20 transition-all" placeholder="Nombre de su organización" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Email corporativo</label>
                  <input type="email" className="w-full border border-outline/40 rounded-xl px-4 py-4 text-base text-on-surface bg-white focus:outline-none focus:border-systemic-orange focus:ring-2 focus:ring-systemic-orange/20 transition-all" placeholder="jperez@empresa.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Teléfono</label>
                  <input type="tel" className="w-full border border-outline/40 rounded-xl px-4 py-4 text-base text-on-surface bg-white focus:outline-none focus:border-systemic-orange focus:ring-2 focus:ring-systemic-orange/20 transition-all" placeholder="+54 9 341 000 0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">¿Cómo podemos ayudarle?</label>
                  <textarea rows={4} className="w-full border border-outline/40 rounded-xl px-4 py-4 text-base text-on-surface bg-white focus:outline-none focus:border-systemic-orange focus:ring-2 focus:ring-systemic-orange/20 transition-all resize-none" placeholder="Describa sus objetivos..." />
                </div>
                <button type="submit" className="w-full bg-systemic-orange text-pure-white py-5 font-bold text-sm tracking-widest uppercase hover:bg-deep-navy transition-all duration-300 flex items-center justify-center gap-2 rounded-xl shadow-lg">
                  ENVIAR MENSAJE
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Datos de contacto */}
          <AnimateOnScroll direction="right" delay={100} className="lg:w-1/3 w-full">
            <div className="p-10 rounded-3xl text-white shadow-2xl h-full flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #05091f 0%, #0B124A 45%, #0d1660 100%)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />

              <div className="space-y-10 relative z-10 my-auto">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-systemic-orange rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <a href="https://kergoattrading.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold hover:text-systemic-orange transition-colors">
                    kergoattrading.com
                  </a>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-systemic-orange rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <a href="mailto:consultoria@kergoattrading.com" className="text-base font-bold hover:text-systemic-orange transition-colors break-all">
                    consultoria@kergoattrading.com
                  </a>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-systemic-orange rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div className="space-y-1 text-sm font-bold text-white/90">
                    <p>+34 642 489 821</p>
                    <p>+34 672 104 109</p>
                    <p>+54 9 341 272 5212</p>
                    <p>+54 9 341 306 9706</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-systemic-orange rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <p className="text-base font-bold leading-relaxed uppercase tracking-wider">
                    Rosario, Argentina<br />Valencia, España
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10 text-center">
                <p className="text-xs text-white/40 font-black italic tracking-widest uppercase">
                  Consultoría Estratégica Internacional
                </p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </main>
    </PublicLayout>
  )
}
