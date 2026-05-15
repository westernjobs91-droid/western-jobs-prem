import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Warehouse Staffing Agency Ontario | Forklift Operators & Associates | Western Jobs",
  description: "Western Jobs supplies certified forklift operators, warehouse associates, order pickers, and shipping staff to distribution centres and warehouses across Ontario. 48-hour fill time.",
  alternates: { canonical: "https://www.westernjobs.ca/warehouse-staffing-ontario" },
}

export default function WarehouseStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Warehouse Staffing Ontario",
            "url": "https://www.westernjobs.ca/warehouse-staffing-ontario",
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Warehouse staffing agency supplying certified forklift operators, order pickers, and warehouse associates to distribution centres across Ontario.",
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">WAREHOUSE STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Warehouse Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supplies certified forklift operators, warehouse associates, order pickers, and shipping staff to distribution centres, e-commerce fulfilment facilities, and parts warehouses across Ontario. Fill time under 48 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Request Warehouse Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="tel:2266977800" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                <i className="fa-solid fa-phone"></i> 226-697-7800
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "48hr", label: "Standard fill time" },
                { stat: "Same day", label: "Emergency coverage" },
                { stat: "98.4%", label: "12-month retention" },
                { stat: "24/7", label: "Staffing support" },
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
            <h2 className="section-header mt-3">Built for the Ontario warehousing corridor</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Brampton, Mississauga, and Vaughan are home to some of Canada&apos;s largest distribution hubs — concentrated along Highway 400, 407, and 427. The growth of e-commerce has accelerated demand for warehouse workers in this corridor at a pace that supply has not kept up with.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Western Jobs maintains ready-to-deploy pools of pre-screened warehouse workers specifically for this corridor. When you call, we deploy — not recruit.
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
                  icon: "fa-box",
                  title: "E-commerce fulfilment centres",
                  desc: "High-volume order picking, packing, and shipping for e-commerce fulfilment operations. We staff day, afternoon, and overnight shifts — scaling up for Q4 surges and scaling down in slower periods."
                },
                {
                  icon: "fa-truck",
                  title: "3PL and distribution centres",
                  desc: "Third-party logistics providers and distribution centres across the GTA corridor trust Western Jobs for consistent shift coverage — forklift operators, general associates, and shipping clerks available within 48 hours."
                },
                {
                  icon: "fa-car",
                  title: "Automotive parts warehouses",
                  desc: "Sequencing centres, inbound parts logistics, and automotive parts distribution operations require fast, reliable labour with an understanding of production-supply timelines. We staff these environments daily."
                },
                {
                  icon: "fa-snowflake",
                  title: "Cold storage & food distribution",
                  desc: "Warehouse workers for cold storage, food distribution, and temperature-controlled environments. All candidates are briefed on cold chain protocols and appropriate PPE requirements."
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
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ROLES WE FILL</div>
            <h2 className="section-header mt-3">Every warehouse role you need filled fast</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Forklift Operators", desc: "Certified counterbalance, reach truck, and order picker operators. Credentials verified before deployment.", tags: ["Counterbalance", "Reach truck"] },
              { title: "Warehouse Associates", desc: "General warehouse labour — receiving, picking, packing, and inventory management.", tags: ["High volume", "Any shift"] },
              { title: "Order Pickers", desc: "Fast, accurate order pickers for e-commerce and parts distribution operations.", tags: ["RF scanner exp.", "High accuracy"] },
              { title: "Shipping & Receiving", desc: "Inbound and outbound freight management, documentation, and carrier coordination.", tags: ["ERP familiar", "Detail-oriented"] },
              { title: "Inventory Control", desc: "Cycle count specialists and inventory coordinators for WMS-driven warehouses.", tags: ["WMS exp.", "Analytical"] },
              { title: "Warehouse Leads", desc: "Experienced leads to manage small teams, direct workflow, and maintain throughput.", tags: ["Leadership exp.", "Temp-to-perm"] },
              { title: "Sorters & Scanners", desc: "High-speed sorting and scanning staff for fulfilment and returns processing operations.", tags: ["Fast-paced", "Same-day avail."] },
              { title: "Warehouse Supervisors", desc: "Experienced supervisors to manage full shifts, KPIs, and warehouse team performance.", tags: ["Perm & contract", "Vetted"] },
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

      {/* SCREENING */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR SCREENING PROCESS</div>
          <h2 className="section-header mt-3">Warehouse-ready before day one</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            { step: "01", title: "In-person screening", desc: "Every candidate is interviewed in person. We assess reliability, physical readiness, and warehouse experience." },
            { step: "02", title: "Work history check", desc: "Previous warehouse, distribution, and logistics experience verified. References checked before placement." },
            { step: "03", title: "WHMIS & safety", desc: "WHMIS training and safety orientation covering PPE, racking awareness, and warehouse safety protocols." },
            { step: "04", title: "Forklift verification", desc: "Counterbalance, reach truck, and order picker certifications verified and kept on file before deployment." },
            { step: "05", title: "Facility briefing", desc: "Candidates briefed on your specific facility, shift requirements, and expectations before arrival." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-7">
              <div className="text-3xl font-bold text-[#00C9A7] mb-4">{item.step}</div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WAREHOUSE STAFFING LOCATIONS</div>
            <h2 className="section-header mt-3">Covering Ontario&apos;s key warehousing hubs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Brampton", note: "Largest hub in GTA", path: "/brampton" },
              { name: "Mississauga", note: "Airport & port logistics", path: "/mississauga" },
              { name: "Vaughan", note: "400-series corridor", path: "/vaughan" },
              { name: "Toronto", note: "Urban fulfilment", path: "/toronto" },
              { name: "Hamilton", note: "Port & rail logistics", path: "/hamilton" },
              { name: "Oshawa", note: "Durham distribution", path: "/oshawa" },
              { name: "Cambridge", note: "SW Ontario logistics", path: "/cambridge" },
              { name: "London", note: "Regional distribution", path: "/london" },
              { name: "Windsor", note: "Cross-border logistics", path: "/windsor" },
              { name: "Woodstock", note: "Central Ontario hub", path: "/woodstock" },
            ].map((city, i) => (
              <Link key={i} href={city.path} className="group bg-white border border-slate-200 rounded-2xl px-5 py-5 hover:border-[#00C9A7] hover:shadow-sm transition-all">
                <div className="font-bold text-slate-900 group-hover:text-[#00C9A7] transition-colors">{city.name}</div>
                <div className="text-xs text-slate-400 mt-1">{city.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">WAREHOUSE STAFFING ONTARIO</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">Need warehouse workers in Ontario?</h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Certified forklift operators and pre-screened warehouse associates deployed across Ontario within 48 hours. Same-day emergency coverage available.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all text-center">
                  Submit a staffing request
                </Link>
                <a href="tel:2266977800" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all text-center">
                  226-697-7800
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR WAREHOUSES & DISTRIBUTION</div>
                <h3 className="text-xl font-bold mb-3">Direct facility staffing</h3>
                <p className="text-white/60 leading-relaxed">Distribution centres, 3PLs, e-commerce fulfilment operations, and automotive parts warehouses request workers directly. We confirm availability within 2 hours.</p>
                <Link href="/hire-staff" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Start a staffing request</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR JOB SEEKERS</div>
                <h3 className="text-xl font-bold mb-3">Looking for warehouse work?</h3>
                <p className="text-white/60 leading-relaxed">We place warehouse associates and forklift operators across Ontario daily. Submit your resume and get matched to open roles within 48 hours.</p>
                <Link href="/apply" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Apply now</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">EMERGENCY COVERAGE</div>
                <h3 className="text-xl font-bold mb-3">24/7 emergency line</h3>
                <p className="text-white/60 leading-relaxed">Warehouse emergencies do not follow business hours. Our staffing line is available around the clock for same-day deployment across Ontario.</p>
                <a href="tel:2266977800" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">226-697-7800</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}