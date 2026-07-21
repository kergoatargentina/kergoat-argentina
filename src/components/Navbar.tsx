'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/metodo', label: 'Método' },
  { href: '/casos', label: 'Casos de Éxito' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
    {/* Barra de ubicación */}
    <div className="bg-deep-navy border-b border-white/5 py-1.5 px-6 md:px-12 flex justify-end items-center gap-2">
      <span className="material-symbols-outlined text-systemic-orange text-[13px]">location_on</span>
      <span className="text-[10px] font-bold tracking-[0.25em] text-systemic-orange uppercase">Rosario — Valencia</span>
    </div>
    <nav className="sticky top-0 z-50 transition-all duration-300 border-b border-white/10" style={{ background: 'rgba(8,13,46,0.92)', backdropFilter: 'blur(16px)' }}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1280px] mx-auto h-20">
        <Link href="/">
          <Image src="/logo-blanco.svg" alt="Kergoat Argentina" width={180} height={79} priority />
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
          <MagneticButton>
            <Link
              href="/contacto"
              className="liquid-glass-primary text-white px-6 py-3 rounded-xl font-bold text-sm block"
            >
              Agendar Asesoría
            </Link>
          </MagneticButton>
        </div>
      </div>
    </nav>
    </>
  )
}
