import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Staffing Agency Newmarket | Temporary & Permanent Staffing | Western Jobs",
  description: "Trusted staffing agency in Newmarket, Ontario. Fast temporary, permanent, and contract staffing solutions. 48-hour average fill time. Serving employers across Newmarket and York Region.",
  alternates: { canonical: "https://www.westernjobs.ca/newmarket" },
}

export default function NewmarketPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Newmarket Staffing Agency",
            "url": "https://www.westernjobs.ca/newmarket",
            "telephone": "+1-226-697-7800",
            "email": "info@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Trusted staffing agency in Newmarket. Fast temporary, permanent, and contract staffing solutions for employers across Newmarket and York Region.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6660 Kennedy Rd, Suite 201",
              "addressLocality": "Mississauga",
              "addressRegion": "ON",
              "postalCode": "L5T 2M9",
              "addressCountry": "CA"
            },
            "areaServed": { "@type": "City", "name": "Newmarket" },
            "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }],
            "priceRange": "$$",
            "sameAs": ["https://www.linkedin.com/company/western-jobs/"]
          })
        }}
      />

      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">NEWMARKET STAFFING</div>
            <h1 className="section-header mt-3 text-white">Premium Staffing Agency in Newmarket</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs delivers fast and reliable temporary, permanent, and contract staffing solutions for businesses across Newmarket and York Region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Hire Staff in Newmarket <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                Find Work in Newmarket
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY NEWMARKET BUSINESSES CHOOSE WESTERN JOBS</div>
            <h2 className="section-header mt-3">Fast, reliable staffing support in Newmarket</h2>
            <p className="mt-6 text-lg text-slate-600">
              Newmarket is one of York Region&apos;s fastest-growing communities with a strong mix of industrial, commercial, and healthcare employers. Western Jobs connects Newmarket businesses with pre-screened candidates across temporary, permanent, and contract roles — fast.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "48-Hour Average Fill Time", desc: "We move fast to fill urgent roles in Newmarket." },
                { title: "98.4% Retention Rate", desc: "Our placements stay because we focus on the right fit." },
                { title: "York Region Coverage", desc: "Deep candidate networks across Newmarket, Aurora, and York Region." },
                { title: "Flexible Hiring Models", desc: "Temporary, permanent, temp-to-perm, and contract staffing." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">STAFFING SERVICES IN NEWMARKET</div>
            <h2 className="section-header mt-3">Flexible solutions for Newmarket employers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Temporary Staffing", desc: "Quick coverage for seasonal peaks, absences, and urgent needs in Newmarket." },
              { title: "Permanent Placement", desc: "Strategic hiring for long-term roles in Newmarket and York Region." },
              { title: "Temp-to-Perm", desc: "Evaluate candidates on the job before making permanent hires in Newmarket." },
              { title: "Contract Staffing", desc: "Specialized talent for projects and fixed-term roles in Newmarket." },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold tracking-tight">Need staff in Newmarket?</h2>
          <p className="mt-4 text-xl text-white/80">Let&apos;s discuss your hiring needs and find the right solution.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all">Hire Staff Now</Link>
            <Link href="/apply" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all">I&apos;m Looking for Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}