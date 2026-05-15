import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Staffing Agency Brampton | Temporary & Permanent Staffing | Western Jobs",
  description: "Trusted staffing agency in Brampton. Fast temporary, permanent, and contract staffing solutions. 48-hour average fill time. Serving employers across Brampton and the GTA.",
alternates: {
    canonical: "https://www.westernjobs.ca/brampton",
  },
}


export default function BramptonPage() {
  return (
    <main className="pt-20">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Western Jobs - Brampton Staffing Agency",
      "url": "https://www.westernjobs.ca/brampton",
      "telephone": "+1-226-697-7800",
      "email": "info@westernjobs.ca",
      "image": "https://www.westernjobs.ca/logo.png",
      "description": "Trusted staffing agency in Brampton. Fast temporary, permanent, and contract staffing solutions. 48-hour average fill time.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6660 Kennedy Rd, Suite 201",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "postalCode": "L5T 2M9",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.7315,
        "longitude": -79.7624
      },
      "areaServed": {
        "@type": "City",
        "name": "Brampton"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "$$",
      "sameAs": [
        "https://www.linkedin.com/company/western-jobs/"
      ]
    })
  }}
/>
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">BRAMPTON STAFFING</div>
            <h1 className="section-header mt-3 text-white">
              Premium Staffing Agency in Brampton
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs delivers fast and reliable temporary, permanent, and contract staffing solutions for businesses across Brampton and the Greater Toronto Area.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/hire-staff" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all"
              >
                Hire Staff in Brampton <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link 
                href="/apply" 
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all"
              >
                Find Work in Brampton
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BRAMPTON EMPLOYERS CHOOSE US */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY BRAMPTON BUSINESSES CHOOSE WESTERN JOBS</div>
            <h2 className="section-header mt-3">Fast, reliable staffing support in Brampton</h2>
            <p className="mt-6 text-lg text-slate-600">
              Brampton has a large manufacturing and logistics presence. We help employers quickly find warehouse associates, production staff, forklift operators, and supervisors across the city.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "48-Hour Average Fill Time", desc: "We move fast to fill urgent roles in Brampton." },
                { title: "98.4% Retention Rate", desc: "Our placements stay because we focus on the right fit." },
                { title: "Strong Local Market Knowledge", desc: "We understand Brampton’s manufacturing and logistics needs." },
                { title: "Flexible Hiring Models", desc: "Temporary, permanent, temp-to-perm, and contract staffing." },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN BRAMPTON */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">STAFFING SERVICES IN BRAMPTON</div>
            <h2 className="section-header mt-3">Flexible solutions for Brampton employers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Temporary Staffing", desc: "Quick coverage for seasonal peaks, absences, and urgent needs in Brampton." },
              { title: "Permanent Placement", desc: "Strategic hiring for long-term roles in Brampton’s competitive market." },
              { title: "Temp-to-Perm", desc: "Evaluate candidates on the job before making permanent hires in Brampton." },
              { title: "Contract Staffing", desc: "Specialized talent for projects and fixed-term roles in Brampton." },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold tracking-tight">Need staff in Brampton?</h2>
          <p className="mt-4 text-xl text-white/80">Let’s discuss your hiring needs and find the right solution for your business.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/hire-staff" 
              className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all"
            >
              Hire Staff Now
            </Link>
            <Link 
              href="/apply" 
              className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all"
            >
              I'm Looking for Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}