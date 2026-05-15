import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Logistics Staffing Agency Ontario | Dispatch & Supply Chain Staff | Western Jobs",
  description: "Western Jobs supplies logistics coordinators, dispatchers, freight coordinators, and supply chain specialists to transportation and logistics companies across Ontario.",
  alternates: { canonical: "https://www.westernjobs.ca/logistics-staffing-ontario" },
}

export default function LogisticsStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Logistics Staffing Ontario",
            "url": "https://www.westernjobs.ca/logistics-staffing-ontario",
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Logistics staffing agency supplying coordinators, dispatchers, and supply chain staff to transportation and logistics companies across Ontario.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6660 Kennedy Rd, Suite 201",
              "addressLocality": "Mississauga",
              "addressRegion": "ON",
              "postalCode": "L5T 2M9",
              "addressCountry": "CA"
            },
            "areaServed": "Ontario",
            "sameAs": ["https://www.linkedin.com/company/western-jobs/"]
          })
        }}
      />

      {/* HERO */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LOGISTICS STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Logistics Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supplies logistics coordinators, dispatchers, freight coordinators, and supply chain specialists to transportation and logistics companies across Ontario. Pre-screened candidates with real logistics experience — deployed fast.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Request Logistics Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="tel:2266977800" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                <i className="fa-solid fa-phone"></i> 226-697-7800
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "48hr", label: "Standard deployment" },
                { stat: "9.2 days", label: "Avg. time to hire" },
                { stat: "98.4%", label: "12-month retention" },
                { stat: "47", label: "Industries served" },
              ].map((item, i) => (
                <div key={i} className="border border-white/20 rounded-2xl px-6 py-5">
                  <div className="text-2xl font-bold text-[#00C9A7]">{item.stat}</div>
                  <div className="text-sm text-white/60 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHO WE WORK WITH</div>
            <h2 className="section-header mt-3">Logistics staffing across the Ontario supply chain</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Ontario&apos;s logistics sector — concentrated along the 400-series highway corridors in Brampton, Mississauga, Vaughan, and Milton — is one of the most active in Canada. The growth of e-commerce and near-shoring of supply chains has accelerated demand for skilled logistics professionals.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Western Jobs understands the pace and precision this industry demands. We screen logistics candidates for TMS and WMS familiarity, carrier management experience, and the communication skills that keep supply chains moving.
            </p>
            <div className="mt-8">
              <Link href="/hire-staff" className="inline-flex items-center gap-2 bg-[#0A2540] text-white font-semibold px-8 py-4 rounded-3xl hover:bg-black transition-all">
                Start a staffing request <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: "fa-truck-fast",
                  title: "3PL & freight brokerage",
                  desc: "Logistics coordinators, freight brokers, and customer service staff for third-party logistics providers. We screen for carrier management experience, TMS platforms, and load tendering workflows."
                },
                {
                  icon: "fa-ship",
                  title: "Import, export & customs",
                  desc: "Import/export coordinators and customs compliance specialists for companies managing cross-border trade through Windsor, Toronto, and Hamilton ports and border crossings."
                },
                {
                  icon: "fa-boxes-stacked",
                  title: "Supply chain & procurement",
                  desc: "Supply chain analysts, procurement coordinators, and demand planning specialists for manufacturers and distributors across Ontario managing complex inventory and vendor relationships."
                },
                {
                  icon: "fa-route",
                  title: "Transportation & fleet operations",
                  desc: "Dispatchers, fleet coordinators, and transportation planners for trucking, courier, and last-mile delivery operations across Ontario. TMS experience screened before placement."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 flex gap-6 items-start hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${item.icon} text-[#00C9A7] text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ROLES WE PLACE</div>
            <h2 className="section-header mt-3">Every logistics role your operation needs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Logistics Coordinators", desc: "End-to-end shipment coordination, carrier management, and customer communication for 3PL and in-house logistics teams.", tags: ["TMS exp.", "Multi-modal"] },
              { title: "Dispatchers", desc: "Experienced dispatchers for trucking, courier, and last-mile delivery operations. Load assignment and driver communication.", tags: ["Fleet exp.", "TMS"] },
              { title: "Freight Coordinators", desc: "Inbound and outbound freight management, carrier booking, rate negotiation, and documentation.", tags: ["LTL/FTL exp.", "Cross-border"] },
              { title: "Supply Chain Analysts", desc: "Data-driven supply chain professionals for inventory planning, demand forecasting, and procurement support.", tags: ["Analytical", "ERP exp."] },
              { title: "Import & Export Clerks", desc: "Trade compliance, customs documentation, HS code classification, and B3 filing specialists.", tags: ["Customs exp.", "B3 filing"] },
              { title: "Procurement Coordinators", desc: "Purchase order management, vendor communication, and procurement administration for manufacturing and distribution.", tags: ["SAP/Oracle", "Vendor mgmt"] },
              { title: "Customer Service Reps", desc: "Logistics customer service and order management staff for 3PLs, carriers, and e-commerce fulfilment operations.", tags: ["Order mgmt", "Client-facing"] },
              { title: "Operations Supervisors", desc: "Logistics operations supervisors for dock management, carrier relations, KPI tracking, and team leadership.", tags: ["Leadership", "Perm & contract"] },
            ].map((role, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{role.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">LOGISTICS STAFFING LOCATIONS</div>
          <h2 className="section-header mt-3">Covering Ontario&apos;s logistics corridor</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We maintain active candidate pipelines across every major logistics hub in Ontario.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Brampton", note: "Largest logistics hub", path: "/brampton" },
            { name: "Mississauga", note: "Airport & port freight", path: "/mississauga" },
            { name: "Vaughan", note: "400-series corridor", path: "/vaughan" },
            { name: "Milton", note: "Major distribution", path: "/locations" },
            { name: "Hamilton", note: "Port logistics", path: "/hamilton" },
            { name: "Toronto", note: "Urban last-mile", path: "/toronto" },
            { name: "Windsor", note: "Cross-border trade", path: "/windsor" },
            { name: "London", note: "SW Ontario logistics", path: "/london" },
            { name: "Cambridge", note: "Toyota logistics", path: "/cambridge" },
            { name: "Oshawa", note: "Durham distribution", path: "/oshawa" },
          ].map((city, i) => (
            <Link key={i} href={city.path} className="group bg-white border border-slate-200 rounded-2xl px-5 py-5 hover:border-[#00C9A7] hover:shadow-sm transition-all">
              <div className="font-bold text-slate-900 group-hover:text-[#00C9A7] transition-colors">{city.name}</div>
              <div className="text-xs text-slate-400 mt-1">{city.note}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LOGISTICS STAFFING ONTARIO</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">Need logistics staff in Ontario?</h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Pre-screened logistics coordinators, dispatchers, and supply chain professionals placed across Ontario.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all text-center">Submit a staffing request</Link>
                <a href="tel:2266977800" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all text-center">226-697-7800</a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR LOGISTICS COMPANIES</div>
                <h3 className="text-xl font-bold mb-3">Direct staffing request</h3>
                <p className="text-white/60 leading-relaxed">3PLs, freight brokers, carriers, and in-house logistics teams request staff directly. We present pre-screened candidates within 48 hours.</p>
                <Link href="/hire-staff" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Start a request</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR JOB SEEKERS</div>
                <h3 className="text-xl font-bold mb-3">Find logistics work in Ontario</h3>
                <p className="text-white/60 leading-relaxed">Looking for a logistics coordinator, dispatcher, or supply chain role in Ontario? Submit your resume and get matched within 48 hours.</p>
                <Link href="/apply" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Apply now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}