import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ModalProvider } from './context/ModalContext'
import ContactModal from '@/components/ContactModal'

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
  metadataBase: new URL('https://westernjobs.ca'),
  title: {
    default: "Western Jobs | Premium Staffing & Recruitment Agency | Toronto, GTA & Ontario",
    template: "%s | Western Jobs",
  },
  description: "Ontario's trusted premium staffing agency. Fast temporary, permanent, and contract staffing solutions across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor, Kitchener and the GTA. Pre-vetted talent. 48-hour average fill time. 98.4% retention rate.",
  
icons: {
    icon: '/favicon.ico',
  },

  verification: {
    google: 'google882b2e61a265dec5',
  },

  openGraph: {
    title: "Western Jobs | Premium Staffing & Recruitment Agency in Ontario",
    description: "Expert temporary, permanent, and contract staffing solutions. Fast hiring support for employers and job seekers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor and the GTA.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Western Jobs - Premium Staffing Agency Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
    siteName: "Western Jobs",
  },

  twitter: {
    card: "summary_large_image",
    title: "Western Jobs | Premium Staffing Agency | Toronto & GTA",
    description: "Fast, reliable temporary, permanent & contract staffing across Ontario. 48-hour average fill time. Trusted by employers across the GTA.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://westernjobs.ca",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-50 text-slate-800 font-sans antialiased">
        <ModalProvider>
          <Navbar />

          {/* Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Western Jobs",
                "url": "https://westernjobs.ca",
                "logo": "https://westernjobs.ca/logo.png",
                "description": "Premium staffing and recruitment agency serving Toronto, Mississauga, Brampton, Vaughan and across Ontario.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "6660 Kennedy Rd, Suite 201",
                  "addressLocality": "Mississauga",
                  "addressRegion": "ON",
                  "postalCode": "L5T 2M9",
                  "addressCountry": "CA"
                },
                "telephone": "+1-647-632-6464",
                "email": "hr@westernjobs.ca",
                "areaServed": [
                  "Toronto",
                  "Mississauga",
                  "Brampton",
                  "Vaughan",
                  "Hamilton",
                  "London",
                  "Windsor",
                  "Kitchener",
                  "Guelph",
                  "Barrie",
                  "Ontario"
                ]
              })
            }}
          />

          {children}
          <Footer />
          <ContactModal />           {/* Global Contact Modal */}
        </ModalProvider>
      </body>
    </html>
  )
}