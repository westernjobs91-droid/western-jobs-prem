import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Manufacturing Staffing Agency Ontario | Production Workers | Western Jobs",
  description: "Western Jobs supplies pre-screened production workers, welders, CNC operators, millwrights, and quality technicians to manufacturing facilities across Ontario. 48-hour fill time. 98.4% retention rate.",
  alternates: { canonical: "https://www.westernjobs.ca/manufacturing-staffing-ontario" },
}

export default function ManufacturingStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Manufacturing Staffing Ontario",
            "url": "https://www.westernjobs.ca/manufacturing-staffing-ontario",
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Manufacturing staffing agency supplying production workers, welders, CNC operators, millwrights, and quality technicians to Ontario manufacturers.",
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">MANUFACTURING STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Manufacturing Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supplies pre-screened, safety-trained production workers, welders, CNC operators, millwrights, and quality technicians to manufacturing facilities across Ontario. 48-hour fill time. 98.4% retention rate.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Request Manufacturing Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="tel:2266977800" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
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
            <h2 className="section-header mt-3">Built for Ontario manufacturing</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Ontario&apos;s manufacturing sector — spanning automotive, food processing, aerospace, plastics, and electronics — faces a decade-long skilled labour shortage. Over 30% of the province&apos;s skilled trades workforce is within 10 years of retirement, and apprenticeship pipelines have not kept pace.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Western Jobs maintains active candidate pipelines across every major manufacturing corridor in Ontario. When you call, we deploy — we do not start recruiting.
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
                  icon: "fa-industry",
                  title: "Automotive & tier-1 suppliers",
                  desc: "Parts manufacturers, stamping plants, injection moulding, and assembly operations. We have deep experience staffing automotive production environments across Ontario including the Alliston, Ingersoll, Cambridge, and Oshawa corridors."
                },
                {
                  icon: "fa-apple-whole",
                  title: "Food processing & packaging",
                  desc: "Food-safe production workers for processing, packaging, and quality control roles. All candidates are screened for food safety awareness and GMP compliance before placement."
                },
                {
                  icon: "fa-microchip",
                  title: "Electronics & plastics manufacturing",
                  desc: "Assembly technicians, machine operators, and quality inspectors for electronics and plastics manufacturing operations across the GTA and southwestern Ontario."
                },
                {
                  icon: "fa-plane",
                  title: "Aerospace & precision manufacturing",
                  desc: "Skilled machinists, inspectors, and technicians for aerospace component manufacturing and precision machining operations requiring tight tolerances and documentation discipline."
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

      {/* ROLES WE FILL */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">ROLES WE FILL</div>
            <h2 className="section-header mt-3">Every manufacturing role — from floor to foreman</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              From urgent general labour to hard-to-find Red Seal tradespeople — we fill every manufacturing role Ontario facilities depend on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "General Production Workers", desc: "Assembly line support, parts handling, and production floor labour. Entry-level to experienced.", tags: ["Same-day available", "Any shift"] },
              { title: "CNC Operators & Machinists", desc: "G-code familiar CNC operators and machinists for precision manufacturing environments.", tags: ["Certified", "Multi-axis exp."] },
              { title: "Welders (MIG / TIG / Stick)", desc: "CWB-certified welders for automotive, structural, and industrial manufacturing applications.", tags: ["CWB certified", "Multi-process"] },
              { title: "Millwrights & Mechanics", desc: "Red Seal millwrights and industrial mechanics for preventive maintenance and equipment repair.", tags: ["Red Seal", "PLC experience"] },
              { title: "Quality Technicians", desc: "QA inspectors and quality control technicians for ISO-certified and OEM manufacturing environments.", tags: ["ISO trained", "CMM exp."] },
              { title: "Machine Operators", desc: "Experienced operators for injection moulding, stamping, laser cutting, and automated production equipment.", tags: ["Equipment trained", "Fast deploy"] },
              { title: "Material Handlers", desc: "Movement and staging of raw materials and finished components throughout production facilities.", tags: ["WHMIS trained", "Any volume"] },
              { title: "Production Supervisors", desc: "Experienced supervisors and team leads to manage shifts, throughput targets, and floor teams.", tags: ["Leadership vetted", "Perm & contract"] },
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

      {/* SCREENING PROCESS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR SCREENING PROCESS</div>
          <h2 className="section-header mt-3">Production-floor ready before day one</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Manufacturing facilities cannot afford unprepared workers. Every candidate we deploy goes through a structured screening process built for production environments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            { step: "01", title: "In-person interview", desc: "Every candidate is interviewed in person. We assess reliability, communication, and physical readiness for production floor roles." },
            { step: "02", title: "Experience verification", desc: "We verify manufacturing experience, equipment familiarity, and check references before any placement." },
            { step: "03", title: "WHMIS & safety training", desc: "All candidates complete WHMIS training and a safety orientation covering PPE, lockout/tagout, and facility protocols." },
            { step: "04", title: "Certification check", desc: "Welder certifications, Red Seal credentials, forklift licences, and any required qualifications are verified and kept on file." },
            { step: "05", title: "Pre-shift briefing", desc: "Candidates are briefed on your specific facility, shift requirements, and expectations before day one." },
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
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">MANUFACTURING LOCATIONS</div>
            <h2 className="section-header mt-3">Everywhere Ontario manufacturing operates</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              We maintain active candidate pipelines across every major manufacturing community in Ontario.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Brampton", note: "Automotive & food", path: "/brampton" },
              { name: "Mississauga", note: "Aerospace & pharma", path: "/mississauga" },
              { name: "Hamilton", note: "Steel & heavy mfg", path: "/hamilton" },
              { name: "Cambridge", note: "Automotive & plastics", path: "/cambridge" },
              { name: "Oshawa", note: "GM & suppliers", path: "/oshawa" },
              { name: "Alliston", note: "Honda Canada", path: "/alliston" },
              { name: "Ingersoll", note: "CAMI Assembly", path: "/ingersoll" },
              { name: "Windsor", note: "Stellantis plants", path: "/windsor" },
              { name: "London", note: "General manufacturing", path: "/london" },
              { name: "Woodstock", note: "Toyota & suppliers", path: "/woodstock" },
            ].map((city, i) => (
              <Link key={i} href={city.path} className="group bg-white border border-slate-200 rounded-2xl px-5 py-5 hover:border-[#00C9A7] hover:shadow-sm transition-all">
                <div className="font-bold text-slate-900 group-hover:text-[#00C9A7] transition-colors">{city.name}</div>
                <div className="text-xs text-slate-400 mt-1">{city.note}</div>
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
            <h2 className="section-header mt-3">What manufacturing employers need from a staffing partner</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Manufacturing production does not tolerate gaps. Neither do we. Western Jobs is built around the demands of the production floor — fast deployment, consistent quality, and a labour supply that shows up shift after shift.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Pre-screened candidates available now — not sourced on request",
                "Red Seal trades, CWB welders, and certified operators on standby",
                "WHMIS-trained and safety-oriented before day one",
                "48-hour standard fill — same-day for emergencies",
                "24/7 staffing support for production emergencies",
                "98.4% 12-month retention — fewer re-trains, less disruption",
                "Payroll, WSIB, and compliance handled for temp workers",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-[#00C9A7] mt-0.5 flex-shrink-0"><i className="fa-solid fa-circle-check"></i></div>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-5">
            {[
              {
                title: "We staff all shifts — not just days",
                desc: "Afternoon shifts, overnight rotations, and weekend production runs are where many agencies fall short. Western Jobs maintains candidate availability across all schedules because manufacturing does not stop at 5pm."
              },
              {
                title: "Volume flexibility without quality compromise",
                desc: "Whether you need 2 workers or 40 for a production ramp-up, we scale without cutting corners on screening. Our Ontario pipeline means we deploy — not scramble."
              },
              {
                title: "One recruiter who knows your facility",
                desc: "Your assigned recruiter learns your facility, your equipment, and your standards. Every placement reflects that knowledge — not a generic resume match."
              },
              {
                title: "Payroll, WSIB, and compliance — handled",
                desc: "For temporary placements, Western Jobs acts as the employer of record. Payroll, WSIB premiums, T4s, and all employment compliance stay with us — keeping your administrative overhead zero."
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

      {/* CTA */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">MANUFACTURING STAFFING ONTARIO</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">Need manufacturing workers in Ontario?</h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Pre-screened production workers, certified welders, CNC operators, and millwrights deployed across Ontario within 48 hours.
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
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR MANUFACTURERS</div>
                <h3 className="text-xl font-bold mb-3">Direct facility staffing</h3>
                <p className="text-white/60 leading-relaxed">Tier-1 suppliers, OEM component plants, food processors, and general manufacturers request workers directly. We confirm availability within 2 hours and deploy within 48.</p>
                <Link href="/hire-staff" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">
                  Start a staffing request
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR JOB SEEKERS</div>
                <h3 className="text-xl font-bold mb-3">Looking for manufacturing work?</h3>
                <p className="text-white/60 leading-relaxed">Western Jobs places workers into manufacturing facilities across Ontario. Submit your resume and we will match you to open roles within 48 hours.</p>
                <Link href="/apply" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">
                  Apply now
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">EMERGENCY COVERAGE</div>
                <h3 className="text-xl font-bold mb-3">24/7 emergency staffing line</h3>
                <p className="text-white/60 leading-relaxed">Production emergencies do not follow business hours. Our staffing line is available around the clock for same-day deployment across Ontario.</p>
                <a href="tel:2266977800" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">
                  226-697-7800
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}