import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Automotive Staffing Agency Ontario | Honda Toyota Magna | Western Jobs",
  description: "Western Jobs supplies skilled labour to Ontario's automotive sector. We staff warehousing, general labour, and production roles for Honda, Toyota, Magna and tier-1 auto suppliers across Alliston, Tilsonburg, Ingersoll, and Oshawa.",
  alternates: { canonical: "https://www.westernjobs.ca/automotive-staffing-ontario" },
}

export default function AutomotiveStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Automotive Staffing Ontario",
            "url": "https://www.westernjobs.ca/automotive-staffing-ontario",
            "telephone": "+1-647-632-6464",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Automotive staffing agency supplying skilled labour to Honda, Toyota, Magna and tier-1 auto suppliers across Ontario.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6660 Kennedy Rd, Suite 201",
              "addressLocality": "Mississauga",
              "addressRegion": "ON",
              "postalCode": "L5T 2M9",
              "addressCountry": "CA"
            },
            "areaServed": [
              "Alliston", "Tilsonburg", "Ingersoll", "Oshawa",
              "Brampton", "Mississauga", "Ontario"
            ],
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">AUTOMOTIVE SECTOR STAFFING</div>
            <h1 className="section-header mt-3 text-white">
              Automotive Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supplies skilled warehouse associates, general labour, and production workers to Ontario's automotive sector — supporting tier-1 suppliers and assembly plants across Alliston, Tilsonburg, Ingersoll, Oshawa, and the GTA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/hire-staff"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all"
              >
                Request Auto Sector Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all"
              >
                Find Auto Sector Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPLY TO */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR PARTNERS & CLIENTS</div>
          <h2 className="section-header mt-3">Supplying labour to Ontario's automotive supply chain</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We work directly with quality management and staffing partners who supply workers to some of the biggest automotive manufacturers in Canada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Honda Canada",
              location: "Alliston, Ontario",
              desc: "Honda's Canadian manufacturing plant in Alliston produces the CR-V and Civic — one of the largest auto employers in Ontario.",
              path: "/alliston"
            },
            {
              name: "Toyota Motor",
              location: "Tilsonburg & Cambridge, Ontario",
              desc: "Toyota's Ontario operations manufacture vehicles and components across multiple facilities in southwestern Ontario.",
              path: "/tilsonburg"
            },
            {
              name: "Magna International",
              location: "Multiple Ontario locations",
              desc: "Magna is one of the world's largest automotive suppliers with dozens of facilities across Ontario needing consistent labour.",
              path: "/oshawa"
            },
          ].map((client, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-2">AUTO MANUFACTURER</div>
              <h3 className="text-2xl font-bold mb-1">{client.name}</h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">{client.location}</p>
              <p className="text-slate-600 leading-relaxed">{client.desc}</p>
              <Link href={client.path} className="mt-4 inline-block text-sm font-semibold text-[#00C9A7] hover:underline">
                View {client.location.split(',')[0]} staffing →
              </Link>
            </div>
          ))}
        </div>

        {/* Partner agencies */}
        <div className="bg-slate-50 rounded-3xl p-10">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">STAFFING PARTNERS</div>
            <h3 className="text-2xl font-bold mt-2">Working with Ontario's leading automotive staffing firms</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Western Jobs partners with specialist automotive quality and staffing agencies who place our workers directly inside tier-1 automotive facilities across Ontario.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-2">Stratosphere Quality</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A leading automotive quality and staffing firm operating across North America. Western Jobs supplies pre-screened labour to Stratosphere Quality for deployment at Honda, Toyota, and Magna facilities throughout Ontario.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-2">Q2 Management</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A specialized automotive workforce management company. Western Jobs works with Q2 Management to supply reliable general labour and warehouse associates for automotive production environments across the province.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES WE FILL */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ROLES WE FILL</div>
            <h2 className="section-header mt-3">Automotive sector positions we staff across Ontario</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "General Labour",
                desc: "Assembly line support, parts handling, material movement, and general production floor labour for automotive facilities."
              },
              {
                title: "Warehouse Associates",
                desc: "Receiving, picking, packing, and inventory management for automotive parts warehouses and distribution centres."
              },
              {
                title: "Forklift Operators",
                desc: "Certified counterbalance and reach truck operators for automotive parts movement and logistics within plants."
              },
              {
                title: "Quality Inspection",
                desc: "Visual and dimensional inspection of automotive components to ensure compliance with OEM quality standards."
              },
              {
                title: "Production Workers",
                desc: "Assembly, sub-assembly, and production support roles within tier-1 and tier-2 automotive supplier facilities."
              },
              {
                title: "Shipping & Receiving",
                desc: "Inbound and outbound freight management, documentation, and logistics coordination for automotive parts."
              },
              {
                title: "Material Handlers",
                desc: "Movement and staging of raw materials and finished components throughout automotive production facilities."
              },
              {
                title: "Line Supervisors",
                desc: "Experienced supervisors to oversee production lines, manage shift teams, and maintain throughput targets."
              },
            ].map((role, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS WE SERVE */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">AUTOMOTIVE STAFFING LOCATIONS</div>
          <h2 className="section-header mt-3">Where we staff in Ontario's auto corridor</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We supply automotive labour across Ontario's key manufacturing communities — from the GTA to southwestern Ontario.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Alliston", path: "/alliston", note: "Honda Canada" },
            { name: "Tilsonburg", path: "/tilsonburg", note: "Toyota / Magna" },
            { name: "Ingersoll", path: "/ingersoll", note: "CAMI / GM" },
            { name: "Oshawa", path: "/oshawa", note: "GM Oshawa" },
            { name: "Cambridge", path: "/cambridge", note: "Toyota Cambridge" },
            { name: "Brampton", path: "/brampton", note: "Tier-1 suppliers" },
            { name: "Mississauga", path: "/mississauga", note: "Tier-1 suppliers" },
            { name: "Vaughan", path: "/vaughan", note: "Parts & logistics" },
            { name: "Hamilton", path: "/hamilton", note: "Steel & components" },
            { name: "Windsor", path: "/windsor", note: "Stellantis" },
          ].map((city, index) => (
            <Link
              key={index}
              href={city.path}
              className="group bg-white border border-slate-200 rounded-2xl px-5 py-4 hover:border-[#00C9A7] hover:shadow-sm transition-all"
            >
              <div className="font-bold text-slate-900 group-hover:text-[#00C9A7] transition-colors">{city.name}</div>
              <div className="text-xs text-slate-400 mt-1">{city.note}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY WESTERN JOBS FOR AUTO */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY WESTERN JOBS</div>
            <h2 className="section-header mt-3">What makes us the right automotive staffing partner</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proven auto sector experience",
                desc: "We have direct experience supplying labour to automotive facilities across Ontario through established partnerships with Stratosphere Quality and Q2 Management."
              },
              {
                title: "48-hour deployment",
                desc: "Automotive plants can't afford downtime. We maintain ready-to-deploy pools of pre-screened candidates for urgent same-day and next-day placement."
              },
              {
                title: "Safety-first candidates",
                desc: "All candidates are screened for WHMIS compliance, safety awareness, and physical suitability before being placed in automotive environments."
              },
              {
                title: "Certified forklift operators",
                desc: "We maintain an active pool of counterbalance and reach truck certified operators — critical for automotive parts warehouses and receiving docks."
              },
              {
                title: "High retention rates",
                desc: "Our 98.4% 12-month retention rate means less turnover disruption on your production floor and fewer re-training costs."
              },
              {
                title: "24/7 emergency coverage",
                desc: "Production doesn't stop at 5pm. Our emergency staffing line operates around the clock to cover unexpected absences on any shift."
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">AUTOMOTIVE STAFFING ONTARIO</div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Need automotive labour in Ontario?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Whether you're a tier-1 supplier, staffing firm, or OEM facility — Western Jobs has the pre-screened automotive workforce you need, fast.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire-staff"
              className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all"
            >
              Request Automotive Staff
            </Link>
            <Link
              href="/apply"
              className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all"
            >
              Find Auto Sector Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}