'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/metodo', label: 'Programas' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10" style={{ background: 'rgba(6, 10, 40, 0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', boxShadow: '0 1px 0 rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
      <div className="border-b border-white/5 py-1.5 px-6 md:px-12 flex justify-end items-center gap-2">
        <span className="material-symbols-outlined text-systemic-orange text-[13px]">location_on</span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-systemic-orange uppercase">Rosario — Valencia</span>
      </div>
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1280px] mx-auto h-20">
        <Link href="/">
          <Image src="/logo-blanco.svg" alt="Kergoat Argentina" width={225} height={99} priority />
        </Link>

        <div className="hidden md:flex items-center gap-8 rounded-full px-8 py-2.5" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
          {links.map(({ href, label }) => {
            const active = pathname === href || (href === '/metodo' && pathname.startsWith('/metodo'))
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
      </div>
    </nav>
  )
}
