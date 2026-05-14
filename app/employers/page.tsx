'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from '@/app/context/ModalContext'

export default function EmployersPage() {
  const { openContact } = useModal()

  const employerPoints = [
    "Temporary, permanent, temp-to-perm, and contract staffing support",
    "Responsive communication throughout the hiring process",
    "Candidate sourcing and screening support",
    "Flexible solutions for changing workforce needs",
  ]

  const process = [
    {
      title: "Understand the Role",
      text: "We begin by learning about your hiring needs, timelines, expectations, and the type of candidate you are seeking across Toronto, Mississauga, Brampton and the GTA.",
    },
    {
      title: "Source & Review Candidates",
      text: "We identify candidates and review experience, fit, and readiness to support a more efficient hiring process for employers in Ontario.",
    },
    {
      title: "Coordinate Next Steps",
      text: "We support communication, interviews, and placement coordination to help keep the process moving clearly and professionally.",
    },
  ]

  const whyItHelps = [
    {
      title: "Temporary Staffing",
      text: "Helps employers across Toronto, Mississauga, Brampton, Vaughan and the GTA cover short-term gaps, seasonal demand, and urgent staffing needs with more flexibility.",
    },
    {
      title: "Permanent Staffing",
      text: "Supports businesses looking to build stronger, long-term teams with candidates aligned to role needs and company culture across Ontario.",
    },
    {
      title: "Temp-to-Perm",
      text: "Gives employers the opportunity to evaluate candidates on the job before making a permanent hiring decision — reducing risk across the GTA.",
    },
    {
      title: "Contract Staffing",
      text: "Provides support for project-based work, fixed-term roles, and specialized short-term business requirements across Ontario.",
    },
  ]

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">FOR EMPLOYERS</div>
            <h1 className="section-header mt-3 text-white">
              Staffing support designed to help businesses hire with more confidence
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs supports employers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor and the GTA with flexible recruitment solutions and professional staffing support.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT EMPLOYERS CAN EXPECT */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHAT EMPLOYERS CAN EXPECT</div>
            <h2 className="section-header mt-3">Hiring support that actually works</h2>
            
            <div className="mt-8 space-y-4">
              {employerPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-x-4">
                  <div className="mt-1 text-[#00C9A7]">✓</div>
                  <p className="text-lg text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">READY TO HIRE?</div>
              <h3 className="mt-4 text-3xl font-bold">Get staffing support fast</h3>
              <p className="mt-4 text-lg text-slate-600">
                Tell us what you need and we’ll help you move forward with flexible staffing solutions tailored to your business across Ontario.
              </p>
              
              <button 
                onClick={() => window.location.href = '/hire-staff'}
                className="mt-8 w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm"
              >
                Start Hiring Today
              </button>
              
              <p className="mt-4 text-center text-xs text-slate-500">Fast response • Flexible hiring • No pressure consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE SUPPORT EMPLOYERS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">HOW WE SUPPORT EMPLOYERS</div>
            <h2 className="section-header mt-3">A process built for clarity, responsiveness, and hiring momentum</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-200 rounded-3xl p-9 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#0A2540] text-white rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">0{index + 1}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#C99700]">STEP {index + 1}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE HIRING MODELS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">FLEXIBLE HIRING MODELS</div>
          <h2 className="section-header mt-3">Different staffing needs call for different solutions</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Western Jobs supports multiple hiring models so employers across Ontario can choose a staffing approach that fits their business reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {whyItHelps.map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-10 group"
            >
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

{/* SERVING ACROSS ONTARIO */}
<section className="max-w-screen-2xl mx-auto px-8 py-16 border-t border-slate-100">
  <div className="text-center mb-10">
    <div className="text-xs font-bold tracking-[2px] text-emerald-600">SERVING ALL OF ONTARIO</div>
    <h2 className="section-header mt-3">We support employers across the province</h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {[
      { name: "Toronto", path: "/toronto" },
      { name: "Mississauga", path: "/mississauga" },
      { name: "Brampton", path: "/brampton" },
      { name: "Hamilton", path: "/hamilton" },
      { name: "Vaughan", path: "/vaughan" },
      { name: "Oshawa", path: "/oshawa" },
      { name: "Cambridge", path: "/cambridge" },
      { name: "London", path: "/london" },
      { name: "Windsor", path: "/windsor" },
      { name: "Woodstock", path: "/woodstock" },
    ].map((city, index) => (
      <Link 
        key={index} 
        href={city.path}
        className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-6 py-4 hover:border-[#00C9A7] hover:shadow-sm transition-all"
      >
        <span className="font-semibold text-lg group-hover:text-[#00C9A7] transition-colors">{city.name}</span>
        <i className="fa-solid fa-arrow-right text-slate-400 group-hover:text-[#00C9A7] transition-colors"></i>
      </Link>
    ))}
  </div>

  <div className="text-center mt-8">
    <Link 
      href="/locations" 
      className="inline-flex items-center gap-x-2 text-[#00C9A7] font-semibold hover:underline"
    >
      View all locations across Ontario →
    </Link>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">NEED STAFFING SUPPORT?</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Hire the right staff — without delays or guesswork</h2>
          <p className="mt-6 text-xl text-white/70">
            Tell us what you need and get support with temporary, permanent, and contract staffing tailored to your business across Toronto and the GTA.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/hire-staff'}
              className="px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
            >
              Hire Staff Now
            </button>
            <button 
              onClick={openContact}
              className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-3xl text-sm transition-all"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}