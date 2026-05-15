import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Finance & Accounting Staffing Agency Ontario | Western Jobs",
  description: "Western Jobs places bookkeepers, payroll specialists, accounts payable and receivable clerks, and financial analysts with businesses across Ontario. Temp, permanent, and contract finance staffing.",
  alternates: { canonical: "https://www.westernjobs.ca/finance-staffing-ontario" },
}

export default function FinanceStaffingPage() {
  return (
    <main className="pt-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Western Jobs - Finance Staffing Ontario",
            "url": "https://www.westernjobs.ca/finance-staffing-ontario",
            "telephone": "+1-226-697-7800",
            "email": "hr@westernjobs.ca",
            "image": "https://www.westernjobs.ca/logo.png",
            "description": "Finance and accounting staffing agency placing bookkeepers, payroll specialists, and accounting professionals with businesses across Ontario.",
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">FINANCE & ACCOUNTING STAFFING — ONTARIO</div>
            <h1 className="section-header mt-3 text-white">
              Finance & Accounting Staffing Agency in Ontario
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs places bookkeepers, payroll specialists, accounts payable and receivable clerks, and financial analysts with businesses across the GTA and Ontario. Temporary, contract, and permanent arrangements available.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/hire-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2540] font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-slate-100 transition-all">
                Request Finance Staff <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="tel:2266977800" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-3xl text-lg hover:bg-white/10 transition-all">
                <i className="fa-solid fa-phone"></i> 226-697-7800
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "9.2 days", label: "Avg. time to placement" },
                { stat: "98.4%", label: "12-month retention" },
                { stat: "100%", label: "Reference checked" },
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
            <h2 className="section-header mt-3">Finance staffing for every Ontario business</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Finance and accounting roles require a different level of screening — accuracy, discretion, and software proficiency matter as much as experience. One bad hire in your finance team can have real consequences.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Western Jobs pre-screens all finance candidates for QuickBooks, Sage, SAP, and ERP familiarity, reference-checks every placement, and matches candidates not just on skills — but on the working style your finance team needs.
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
                  icon: "fa-building-columns",
                  title: "Corporate finance & head offices",
                  desc: "GTA corporate offices across manufacturing, real estate, insurance, and professional services consistently need high-quality finance professionals. We place bookkeepers, payroll specialists, and financial analysts at every level."
                },
                {
                  icon: "fa-store",
                  title: "Small & mid-sized businesses",
                  desc: "SMBs across Ontario often need part-time or contract bookkeepers, payroll support during year-end, or temporary AP/AR coverage when a team member is away. We place finance staff for businesses of every size."
                },
                {
                  icon: "fa-industry",
                  title: "Manufacturing & industrial finance",
                  desc: "Plant-level accounting staff — cost accountants, payroll administrators, and AP clerks embedded in manufacturing environments who understand job costing, production reporting, and ERP systems."
                },
                {
                  icon: "fa-chart-line",
                  title: "Non-profit & public sector",
                  desc: "Finance coordinators, grant accountants, and payroll specialists for non-profit organizations and public sector entities across Ontario with fund accounting and compliance requirements."
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
            <h2 className="section-header mt-3">Every finance and accounting role your business needs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Bookkeepers", desc: "Full-cycle bookkeepers for small and mid-sized businesses. QuickBooks, Sage, and Wave experienced.", tags: ["Full-cycle", "QuickBooks/Sage"] },
              { title: "Payroll Specialists", desc: "Payroll professionals experienced with ADP, Ceridian, and Dayforce for Ontario companies of all sizes.", tags: ["ADP/Ceridian", "Compliance"] },
              { title: "Accounts Payable Clerks", desc: "Detail-oriented AP clerks for invoice processing, vendor management, and payment run administration.", tags: ["High volume", "ERP exp."] },
              { title: "Accounts Receivable Clerks", desc: "AR specialists for collections, cash application, and customer account reconciliation.", tags: ["Collections exp.", "Reconciliation"] },
              { title: "Financial Analysts", desc: "Junior to intermediate financial analysts for reporting, budgeting, and variance analysis.", tags: ["Excel advanced", "Reporting"] },
              { title: "Cost Accountants", desc: "Cost accounting professionals for manufacturing environments with job costing and standard cost experience.", tags: ["Job costing", "Manufacturing"] },
              { title: "Controllers (Contract)", desc: "Experienced controllers available on contract for year-end reporting, audits, and interim financial leadership.", tags: ["CPA preferred", "Interim"] },
              { title: "Finance Managers", desc: "Finance managers for growing businesses needing strategic financial oversight on a permanent or contract basis.", tags: ["Strategic", "Leadership"] },
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
            <h2 className="section-header mt-3">Finance staffing that moves at the speed your business needs</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A finance gap at month-end, year-end, or during an audit is not just an HR problem — it is a business risk. Western Jobs pre-screens and reference-checks every finance candidate so you can move quickly without sacrificing the rigour these roles demand.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Screened for QuickBooks, Sage, SAP, Oracle, and Dayforce",
                "Reference-checked before any placement",
                "Temp coverage for mat leaves, vacations, and year-end crunch",
                "Permanent placement with replacement guarantee",
                "Temp-to-perm to evaluate fit before full commitment",
                "Confidential searches available for senior finance roles",
                "Average 9.2 days from intake to your first candidate interview",
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
                title: "We screen for accuracy — not just availability",
                desc: "Finance candidates are assessed for software proficiency, attention to detail, and accuracy track record — not just whether their resume mentions the right keywords. We verify before we present."
              },
              {
                title: "Temp coverage that does not create more work",
                desc: "A temporary bookkeeper or payroll specialist who arrives unprepared costs you more than the gap. Every temp we send is briefed on your systems and processes before day one."
              },
              {
                title: "Permanent placements backed by a guarantee",
                desc: "If a permanent finance placement does not work out within the guarantee period, we replace them at no additional cost. Our 98.4% retention rate means this rarely happens."
              },
              {
                title: "Confidentiality when it matters most",
                desc: "Senior finance searches often require discretion. Western Jobs handles confidential replacement searches with the professionalism your leadership team expects."
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
              <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">FINANCE STAFFING ONTARIO</div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight leading-tight">Need finance or accounting staff in Ontario?</h2>
              <p className="mt-6 text-xl text-white/70 leading-relaxed">
                Pre-screened, reference-checked finance professionals placed across the GTA and Ontario. Temporary, permanent, and contract arrangements available.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all text-center">Submit a staffing request</Link>
                <a href="tel:2266977800" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all text-center">226-697-7800</a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR EMPLOYERS</div>
                <h3 className="text-xl font-bold mb-3">Request finance staff</h3>
                <p className="text-white/60 leading-relaxed">Tell us the role, duration, and software requirements. We will present pre-screened, reference-checked candidates within 48 hours.</p>
                <Link href="/hire-staff" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Start a request</Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-xs font-bold tracking-[2px] text-[#00C9A7] mb-4">FOR JOB SEEKERS</div>
                <h3 className="text-xl font-bold mb-3">Find finance work in Ontario</h3>
                <p className="text-white/60 leading-relaxed">Looking for a bookkeeping, payroll, or accounting role in Ontario? Submit your resume and get matched to open roles within 48 hours.</p>
                <Link href="/apply" className="mt-5 inline-flex items-center gap-2 text-[#00C9A7] font-semibold hover:underline">Apply now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}