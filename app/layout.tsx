import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700']
})

export const metadata: Metadata = {
  title: 'Western Jobs | Premium Recruitment & Staffing | Ontario',
  description: 'Ontario\'s leading premium recruitment agency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-50 text-slate-800 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}