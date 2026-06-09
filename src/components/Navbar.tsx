'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/metodo', label: 'Método Kergoat' },
  { href: '/metodo/foundation', label: 'Niveles' },
  { href: '/casos', label: 'Casos de Éxito' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 border-b border-white/10" style={{ background: 'rgba(8,13,46,0.92)', backdropFilter: 'blur(16px)' }}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1280px] mx-auto h-20">
        <Link href="/" className="text-2xl font-semibold text-white">
          Kergoat Argentina
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active
                    ? 'text-systemic-orange font-bold border-b-2 border-systemic-orange pb-1'
                    : 'text-white/70 hover:text-systemic-orange'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://kergoattrading.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-sm font-medium text-white/70 hover:text-systemic-orange transition-colors"
          >
            <span className="material-symbols-outlined text-base">public</span>
            Kergoat España
          </a>
          <Link
            href="/contacto"
            className="liquid-glass-primary text-white px-6 py-3 rounded-xl font-bold text-sm"
          >
            Agendar Asesoría
          </Link>
        </div>
      </div>
    </nav>
  )
}
