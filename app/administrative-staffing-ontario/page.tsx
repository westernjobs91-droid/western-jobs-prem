import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Administrative Staffing Agency Ontario | Office & Admin Staff | Western Jobs",
  description: "Western Jobs places executive assistants, office managers, receptionists, data entry specialists, and HR coordinators with businesses across Ontario. Temp, permanent, and contract admin staffing.",
  alternates: { canonical: "https://www.westernjobs.ca/administrative-staffing-ontario" },
}

export default function AdminStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Administrative Staffing Ontario",
            "url": "https://www.westernjobs.ca/administrative-staffing-ontario",
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Administrative staffing agency placing executive assistants, office managers, receptionists, and HR coordinators across Ontario.",
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">ADMINISTRATIVE STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Administrative Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs places executive assistants, office managers, receptionists, data entry specialists, and HR coordinators with businesses across the GTA and Ontario. Temporary, permanent, and contract arrangements available.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Request Admin Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="tel:2266977800" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                <i className="fa-solid fa-phone"></i> 226-697-7800
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "9.2 days", label: "Avg. time to placement" },
                { stat: "98.4%", label: "12-month retention" },
                { stat: "47", label: "Industries served" },
                { stat: "24/7", label: "Recruiter support" },
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
            <h2 className="section-header mt-3">Administrative staffing for every Ontario business</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Administrative roles require more than technical skills — they require cultural fit, communication ability, and reliability. Western Jobs screens for all three before presenting a single candidate to your team.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Whether you need temporary coverage for a maternity leave, a permanent executive assistant for your C-suite, or a contract team for a project surge — we place the right person, not just an available one.
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
                  icon: "fa-building",
                  title: "Corporate offices & head offices",
                  desc: "GTA corporate offices across financial services, insurance, real estate, and professional services consistently need high-quality administrative professionals. We place EAs, office managers, and administrative coordinators at every level."
                },
                {
                  icon: "fa-hospital",
                  title: "Healthcare & clinical administration",
                  desc: "Medical administrative assistants, clinic coordinators, and healthcare office staff for hospitals, clinics, long-term care facilities, and healthcare networks across Ontario."
                },
                {
                  icon: "fa-scale-balanced",
                  title: "Legal, accounting & professional firms",
                  desc: "Legal assistants, paralegal support, and administrative staff for law firms, accounting practices, and professional services firms requiring a high degree of discretion and accuracy."
                },
                {
                  icon: "fa-industry",
                  title: "Manufacturing & industrial offices",
                  desc: "Administrative and operations support staff for manufacturing plant offices — scheduling coordinators, production clerks, and HR administrative support embedded in industrial environments."
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
            <h2 className="section-header mt-3">Every administrative role your office needs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Executive Assistants", desc: "High-trust EA placements for C-suite and senior leadership. Discretion, calendar management, and stakeholder communication screened upfront.", tags: ["C-suite support", "High trust"] },
              { title: "Office Managers", desc: "Experienced office managers for day-to-day operations, vendor relations, facilities, and team coordination.", tags: ["Operations exp.", "Leadership"] },
              { title: "Receptionists", desc: "Professional front-desk and reception staff for corporate offices, clinics, law firms, and professional service environments.", tags: ["Client-facing", "Polished"] },
              { title: "Data Entry Specialists", desc: "Fast, accurate data entry professionals for ERP systems, spreadsheets, CRM platforms, and database management.", tags: ["ERP/CRM exp.", "High accuracy"] },
              { title: "HR Coordinators", desc: "HR support for recruitment coordination, onboarding, benefits administration, and HRIS data management.", tags: ["HRIS exp.", "Confidential"] },
              { title: "Administrative Coordinators", desc: "General administrative support for project teams, operations departments, and executive offices across Ontario.", tags: ["Multi-tasking", "Temp & perm"] },
              { title: "Legal Assistants", desc: "Legal administrative support with experience in document preparation, filing, scheduling, and legal billing systems.", tags: ["Legal exp.", "Detail-oriented"] },
              { title: "Medical Admins", desc: "Medical administrative assistants for clinics, hospitals, and healthcare networks. EMR system experience screened.", tags: ["EMR familiar", "Healthcare"] },
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

      {/* WHY WESTERN JOBS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY WESTERN JOBS</div>
            <h2 className="section-header mt-3">Administrative staffing that actually fits your office</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A bad administrative hire disrupts an entire office. Western Jobs screens beyond the resume — assessing communication style, reliability track record, software proficiency, and cultural fit before any candidate meets your team.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Screened for Microsoft Office, Google Workspace, and CRM platforms",
                "Communication and professionalism assessed in person",
                "Reference-checked before any placement",
                "Temp coverage for mat leaves, vacations, and sudden departures",
                "Permanent placement for long-term team building",
                "Temp-to-perm to evaluate fit before full commitment",
                "Average 9.2 days from intake to your first interview",
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
                title: "We screen for fit — not just availability",
                desc: "Administrative roles touch every part of your business. We take the time to understand your office culture, communication style, and working environment before presenting candidates — not after you have met three wrong ones."
              },
              {
                title: "Temp coverage that does not disrupt the team",
                desc: "A temporary receptionist or EA who shows up unprepared creates more work than the gap. Every temp we send is briefed on your office before day one — so they contribute from the moment they arrive."
              },
              {
                title: "Permanent placements with a replacement guarantee",
                desc: "If a permanent administrative placement does not work out within the guarantee period, we replace them at no additional cost. Our 98.4% retention rate means this rarely happens — but the guarantee gives you confidence regardless."
              },
              {
                title: "One recruiter for your entire account",
                desc: "Your recruiter learns your office, your preferences, and your standards. Every submission reflects that knowledge — not a keyword match from a database."
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
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">ADMINISTRATIVE STAFFING ONTARIO</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">Need administrative staff in Ontario?</h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Pre-screened administrative professionals placed across the GTA and Ontario. Temporary, permanent, and contract arrangements available.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all text-center">Submit a staffing request</Link>
                <a href="tel:2266977800" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all text-center">226-697-7800</a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR EMPLOYERS</div>
                <h3 className="text-xl font-bold mb-3">Request admin staff</h3>
                <p className="text-white/60 leading-relaxed">Tell us what you need — role, duration, and any specific requirements. We will present pre-screened candidates within 48 hours.</p>
                <Link href="/hire-staff" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Start a request</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR JOB SEEKERS</div>
                <h3 className="text-xl font-bold mb-3">Find administrative work</h3>
                <p className="text-white/60 leading-relaxed">Looking for an EA, office manager, or admin coordinator role in Ontario? Submit your resume and get matched to employers within 48 hours.</p>
                <Link href="/apply" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Apply now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}