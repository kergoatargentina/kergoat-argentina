import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-pure-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-10 md:mb-0">
          <div className="text-2xl font-bold mb-4">Kergoat Argentina</div>
          <p className="text-sm text-white/70 max-w-xs leading-relaxed">
            Transformando organizaciones a través del orden sistémico y la metodología de alto rendimiento.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-systemic-orange mb-6">Navegación</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/metodo" className="text-white/70 hover:text-systemic-orange transition-colors">Método Kergoat</Link></li>
              <li><Link href="/casos" className="text-white/70 hover:text-systemic-orange transition-colors">Casos de Éxito</Link></li>
              <li><Link href="/contacto" className="text-white/70 hover:text-systemic-orange transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-systemic-orange mb-6">Legal</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacidad" className="text-white/70 hover:text-systemic-orange transition-colors">Privacidad</Link></li>
              <li><Link href="/terminos" className="text-white/70 hover:text-systemic-orange transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-systemic-orange mb-6">Global</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-systemic-orange transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">public</span>
                  K-Trading España
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/50">© 2024 Kergoat Argentina. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-xs text-white/50">
          <Link href="#" className="hover:text-systemic-orange transition-colors">LINKEDIN</Link>
          <Link href="#" className="hover:text-systemic-orange transition-colors">INSTAGRAM</Link>
        </div>
      </div>
    </footer>
  )
}
