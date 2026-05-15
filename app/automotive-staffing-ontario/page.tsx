import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Automotive Staffing Agency Ontario | Production & Warehouse Labour | Western Jobs",
  description: "Western Jobs supplies production-ready warehouse associates, general labour, forklift operators, and quality inspection workers to automotive facilities and tier-1 suppliers across Ontario. Fast deployment. Pre-screened. WHMIS trained.",
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
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Ontario automotive staffing agency supplying pre-screened production workers, warehouse associates, forklift operators and quality inspection staff to tier-1 automotive suppliers and QA firms across Ontario.",
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
              "Cambridge", "Brampton", "Mississauga", "Vaughan",
              "Hamilton", "Windsor", "Ontario"
            ],
            "sameAs": ["https://www.linkedin.com/company/western-jobs/"]
          })
        }}
      />

      {/* HERO */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">AUTOMOTIVE SECTOR STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Production-ready automotive labour. Deployed across Ontario within 48 hours.
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supplies pre-screened, WHMIS-trained warehouse associates, general labour, forklift operators, and quality inspection workers to automotive facilities, tier-1 suppliers, and quality assurance firms operating across Ontario's auto corridor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/hire-staff"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all"
              >
                Request Automotive Labour <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a
                href="tel:2266977800"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                <i className="fa-solid fa-phone"></i> 226-697-7800
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "48hr", label: "Standard deployment" },
                { stat: "Same day", label: "Emergency coverage" },
                { stat: "98.4%", label: "12-month retention" },
                { stat: "24/7", label: "Staffing support line" },
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
            <h2 className="section-header mt-3">Built for the automotive supply chain</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Western Jobs works directly with quality assurance firms, workforce management companies, and tier-1 automotive suppliers who need a reliable Ontario labour supply partner behind them.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We understand the production environment. Our workers arrive shift-ready — oriented, safety-trained, and briefed on automotive facility expectations before their first day on the floor.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              If your business deploys teams into automotive plants and OEM facilities across Ontario, we are the labour supply partner that keeps your operation running without gaps.
            </p>
            <div className="mt-8">
              <Link
                href="/hire-staff"
                className="inline-flex items-center gap-2 bg-[#0A2540] text-white font-semibold px-8 py-4 rounded-3xl hover:bg-black transition-all"
              >
                Start a staffing request <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: "fa-magnifying-glass",
                  title: "Quality assurance & inspection firms",
                  desc: "We supply inspection-ready sorters, containment workers, and general labour to QA firms deploying teams into automotive facilities. Our workers understand production-floor protocols, documentation requirements, and the pace of OEM environments."
                },
                {
                  icon: "fa-gear",
                  title: "Tier-1 & tier-2 automotive suppliers",
                  desc: "Parts manufacturers, stamping plants, injection moulding, and assembly operations across Ontario trust Western Jobs for consistent shift coverage — from general associates to certified forklift operators and line supervisors."
                },
                {
                  icon: "fa-truck-fast",
                  title: "Automotive logistics & warehousing",
                  desc: "Parts warehouses, sequencing centres, and inbound logistics operations supporting OEM plants need reliable, scalable labour on short notice. We fill those seats within 48 hours, any shift, any volume."
                },
                {
                  icon: "fa-wrench",
                  title: "Launch support & ramp-up operations",
                  desc: "New model launches, production ramp-ups, and containment events require fast, large-scale labour deployment. Western Jobs maintains pre-screened candidate pipelines specifically for high-urgency automotive workforce events."
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

      {/* ROLES WE SUPPLY */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ROLES WE SUPPLY</div>
            <h2 className="section-header mt-3">Every position the automotive floor needs</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              From urgent single-shift coverage to long-term temp-to-perm placements — we fill every production-floor role the automotive supply chain depends on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "General Labour", desc: "Assembly line support, parts handling, material movement, and general production floor labour. Entry-level to experienced.", tags: ["Same-day available", "Any shift"] },
              { title: "Warehouse Associates", desc: "Receiving, picking, packing, and inventory management for automotive parts warehouses and sequencing centres.", tags: ["High volume", "Temp & perm"] },
              { title: "Forklift Operators", desc: "Certified counterbalance and reach truck operators for automotive parts movement, receiving docks, and plant logistics.", tags: ["Certified only", "48hr fill"] },
              { title: "Quality Inspectors", desc: "Sorters and inspection workers for containment events, rework, and visual quality checks on production lines.", tags: ["OEM-ready", "Fast deploy"] },
              { title: "Production Workers", desc: "Assembly, sub-assembly, and production support roles for tier-1 and tier-2 automotive component manufacturers.", tags: ["Any volume", "Temp-to-perm"] },
              { title: "Material Handlers", desc: "Staging and movement of raw materials and finished components throughout automotive production facilities.", tags: ["Physical ready", "Trained"] },
              { title: "Shipping & Receiving", desc: "Inbound and outbound freight coordination, documentation, and logistics for automotive parts operations.", tags: ["ERP familiar", "Detail-oriented"] },
              { title: "Line Supervisors", desc: "Experienced leads and supervisors to oversee production teams, manage throughput, and maintain QA compliance.", tags: ["Leadership vetted", "Perm & contract"] },
            ].map((role, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{role.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SCREEN */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR SCREENING PROCESS</div>
          <h2 className="section-header mt-3">Production-floor ready before day one</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Automotive facilities have zero tolerance for unprepared workers. Every candidate we deploy goes through a structured screening process designed specifically for production environments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            { step: "01", title: "In-person screening", desc: "Every candidate is interviewed in person — not just by phone. We assess reliability, communication, and physical readiness for production floor roles." },
            { step: "02", title: "Work history verification", desc: "We verify previous manufacturing, warehouse, or automotive experience and check references before placement — not after." },
            { step: "03", title: "WHMIS & safety orientation", desc: "All candidates complete WHMIS training and a safety orientation covering PPE requirements, lockout/tagout awareness, and automotive facility protocols." },
            { step: "04", title: "Certification verification", desc: "Forklift certifications, first aid cards, and any required credentials are verified and kept on file before deployment." },
            { step: "05", title: "Shift briefing before day one", desc: "Candidates are briefed on your specific facility, shift requirements, dress code, and expectations before they arrive — zero orientation surprises." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-7">
              <div className="text-3xl font-bold text-[#00C9A7] mb-4">{item.step}</div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ONTARIO COVERAGE */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ONTARIO COVERAGE</div>
            <h2 className="section-header mt-3">Everywhere Ontario's auto sector operates</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              We maintain active candidate pipelines across every major automotive community in Ontario — so we're never starting from scratch when you call.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Alliston", note: "Honda Canada plant", path: "/alliston" },
              { name: "Ingersoll", note: "CAMI Assembly", path: "/ingersoll" },
              { name: "Cambridge", note: "Toyota Cambridge", path: "/cambridge" },
              { name: "Oshawa", note: "GM Oshawa complex", path: "/oshawa" },
              { name: "Tilsonburg", note: "Magna / Toyota", path: "/tilsonburg" },
              { name: "Windsor", note: "Stellantis corridor", path: "/windsor" },
              { name: "Brampton", note: "Tier-1 suppliers", path: "/brampton" },
              { name: "Mississauga", note: "Parts & logistics", path: "/mississauga" },
              { name: "Vaughan", note: "Warehousing hubs", path: "/vaughan" },
              { name: "Hamilton", note: "Steel & components", path: "/hamilton" },
            ].map((city, i) => (
              <Link
                key={i}
                href={city.path}
                className="group bg-white border border-slate-200 rounded-2xl px-5 py-5 hover:border-[#00C9A7] hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-900 group-hover:text-[#00C9A7] transition-colors text-lg">{city.name}</div>
                <div className="text-xs text-slate-400 mt-1">{city.note}</div>
                <div className="mt-3 text-xs font-semibold text-[#00C9A7] opacity-0 group-hover:opacity-100 transition-opacity">View staffing →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WESTERN JOBS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY WESTERN JOBS</div>
            <h2 className="section-header mt-3">What automotive partners need from a labour supplier</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Automotive production does not tolerate gaps. Neither do we. Western Jobs is built around the specific demands of the auto sector — fast deployment, consistent quality, and a labour supply that shows up reliably shift after shift.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We have direct, on-the-ground experience staffing automotive production environments across Ontario. We know what it takes to keep a line moving — and what happens when it does not.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Pre-screened candidates available now — not sourced on request",
                "Certified forklift operators on standby across Ontario",
                "WHMIS-trained and safety-oriented before day one",
                "48-hour standard fill — same-day for emergency events",
                "24/7 staffing support line for production emergencies",
                "98.4% 12-month retention — fewer re-trains, less disruption",
                "Temp, temp-to-perm, and contract arrangements available",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-[#00C9A7] mt-0.5 flex-shrink-0">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-5">
            {[
              {
                title: "We staff the whole shift — not just the easy roles",
                desc: "Overnight shifts, weekend rotations, split shifts during launch ramp-ups — Western Jobs maintains candidate availability across all schedules. If the plant runs around the clock, we staff around the clock."
              },
              {
                title: "Volume flexibility when you need it most",
                desc: "Whether you need 2 workers or 50, we scale without compromise on screening quality. Our candidate pipeline across Ontario means we are not scrambling when volume spikes — we are deploying."
              },
              {
                title: "One point of contact — no handoffs",
                desc: "Your assigned recruiter manages everything from intake to placement to ongoing shift coverage. You deal with one person who knows your facility, your standards, and your scheduling reality."
              },
              {
                title: "Payroll, WSIB, and compliance handled",
                desc: "For temporary placements, Western Jobs acts as the employer of record. We handle payroll, WSIB premiums, T4s, and all employment compliance — keeping your administrative overhead zero."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LABOUR SUPPLY PARTNERSHIPS</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">
                Looking for a reliable Ontario labour supplier for your automotive operation?
              </h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Western Jobs works with quality assurance firms, workforce management companies, and tier-1 suppliers who need a dependable, pre-screened labour supply partner across Ontario's automotive corridor.
              </p>
              <p className="mt-4 text-lg text-white/60 leading-relaxed">
                If you are deploying teams into OEM facilities and you need workers who are production-floor ready on arrival — talk to us. We will walk you through our screening process, our Ontario coverage, and how we have structured partnerships with other firms in the automotive quality and supply chain space.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/hire-staff"
                  className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all text-center"
                >
                  Submit a staffing request
                </Link>
                <a
                  href="tel:2266977800"
                  className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all text-center"
                >
                  226-697-7800
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR STAFFING AND QA FIRMS</div>
                <h3 className="text-xl font-bold mb-3">Agency and QA partner inquiries</h3>
                <p className="text-white/60 leading-relaxed">
                  If you are a workforce management firm, quality assurance company, or automotive staffing agency looking for a trusted Ontario labour supply partner, contact our business development team directly.
                </p>
                <a
                  href="mailto:hr@westernjobs.ca"
                  className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline"
                >
                  hr@westernjobs.ca
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR AUTOMOTIVE FACILITIES</div>
                <h3 className="text-xl font-bold mb-3">Direct facility staffing</h3>
                <p className="text-white/60 leading-relaxed">
                  Tier-1 suppliers, OEM component plants, and automotive logistics operations can request workers directly. We will confirm availability within 2 hours and deploy within 48.
                </p>
                <Link
                  href="/hire-staff"
                  className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline"
                >
                  Start a staffing request
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">EMERGENCY COVERAGE</div>
                <h3 className="text-xl font-bold mb-3">24/7 emergency line</h3>
                <p className="text-white/60 leading-relaxed">
                  Production emergencies do not wait for business hours. Our staffing line is available around the clock for same-day deployment across Ontario's automotive corridor.
                </p>
                <a
                  href="tel:2266977800"
                  className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline"
                >
                  226-697-7800
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR JOB SEEKERS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-16 border-t border-slate-100">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">FOR JOB SEEKERS</div>
          <h2 className="section-header mt-3">Looking for automotive work in Ontario?</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Western Jobs places workers into automotive production facilities, parts warehouses, and quality inspection roles across Ontario. Submit your resume and we will match you to open roles within 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="px-10 py-4 bg-[#0A2540] text-white font-semibold rounded-3xl text-lg hover:bg-black transition-all"
            >
              Apply for Automotive Work
            </Link>
            <Link
              href="/job-seekers"
              className="px-10 py-4 border border-slate-300 text-slate-700 font-semibold rounded-3xl text-lg hover:bg-slate-50 transition-all"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}