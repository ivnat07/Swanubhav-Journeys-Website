'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-playfair font-bold text-primary">
            Swanubhav
          </Link>
          <div className="flex space-x-8">
            <NavLink href="/" pathname={pathname}>Home</NavLink>
            <NavLink href="/about" pathname={pathname}>About</NavLink>
            <NavLink href="/services" pathname={pathname}>Services</NavLink>
            <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, pathname, children }: { href: string; pathname: string; children: React.ReactNode }) {
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`relative text-gray-700 hover:text-primary transition-smooth font-medium ${
        isActive ? 'text-primary' : ''
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform -translate-y-1"></span>
      )}
    </Link>
  )
}

