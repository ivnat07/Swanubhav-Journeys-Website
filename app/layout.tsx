import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Swanubhav - Premium Tourism Experiences',
  description: 'Discover extraordinary travel experiences with Swanubhav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="bg-lavender border-t border-gray-200 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Swanubhav</h3>
                <p className="text-gray-600 text-sm">
                  Your gateway to unforgettable travel experiences
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-primary transition-smooth">Home</Link></li>
                  <li><Link href="/about" className="hover:text-primary transition-smooth">About</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-smooth">Services</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-primary transition-smooth cursor-pointer">Custom Trips</li>
                  <li className="hover:text-primary transition-smooth cursor-pointer">Group Tours</li>
                  <li className="hover:text-primary transition-smooth cursor-pointer">Corporate Travel</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>info@swanubhav.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-gray-600 text-sm">© 2024 Swanubhav. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
