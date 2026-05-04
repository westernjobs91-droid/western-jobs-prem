'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from '@/app/context/ModalContext'

export default function JobSeekersPage() {
  const { openContact } = useModal()

  const seekerSupport = [
    "Access to temporary, permanent, and contract opportunities",
    "Professional communication throughout the process",
    "Guidance on next steps when opportunities are available",
    "A smoother experience connecting with employers",
  ]

  const whatToExpect = [
    {
      title: "Apply or Reach Out",
      text: "Job seekers can contact Western Jobs to express interest in available opportunities and staffing types that fit their goals across Toronto, Mississauga, Brampton and the GTA.",
    },
    {
      title: "Review & Matching",
      text: "Candidate background, availability, and role fit are considered when opportunities become available in Ontario.",
    },
    {
      title: "Communication on Next Steps",
      text: "When there is alignment with an opportunity, Western Jobs supports communication and helps guide the process forward.",
    },
  ]

  const opportunityTypes = [
    {
      title: "Temporary Opportunities",
      text: "Useful for candidates seeking flexibility, short-term work, or opportunities that may fit changing schedules across the GTA.",
    },
    {
      title: "Permanent Opportunities",
      text: "Designed for candidates seeking long-term employment and stronger stability in the right role across Ontario.",
    },
    {
      title: "Contract Opportunities",
      text: "Project-based or fixed-term opportunities that may align with specific experience or availability.",
    },
  ]

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">FOR JOB SEEKERS</div>
            <h1 className="section-header mt-3 text-white">
              Support for candidates seeking meaningful work opportunities
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs works with job seekers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor and the GTA to connect them with temporary, permanent, and contract opportunities aligned with their skills and goals.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT JOB SEEKERS CAN EXPECT */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHAT JOB SEEKERS CAN EXPECT</div>
            <h2 className="section-header mt-3">We're here to help you find the right opportunity</h2>
            
            <div className="mt-8 space-y-4">
              {seekerSupport.map((point, index) => (
                <div key={index} className="flex items-start gap-x-4">
                  <div className="mt-1 text-[#00C9A7]">✓</div>
                  <p className="text-lg text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">READY TO APPLY?</div>
              <h3 className="mt-4 text-3xl font-bold">Start your application today</h3>
              <p className="mt-4 text-lg text-slate-600">
                Share your details and resume with Western Jobs to be considered for temporary, permanent, and contract opportunities across Ontario.
              </p>
              
              <button 
                onClick={() => window.location.href = '/apply'}
                className="mt-8 w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm"
              >
                Apply Now
              </button>
              
              <p className="mt-4 text-center text-xs text-slate-500">Simple application • Resume upload • Professional follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHAT TO EXPECT</div>
            <h2 className="section-header mt-3">A simple process designed to support job seekers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatToExpect.map((step, index) => (
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

      {/* OPPORTUNITY TYPES */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">OPPORTUNITY TYPES</div>
            <h2 className="section-header mt-3">Different paths depending on your goals and availability</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Western Jobs supports candidates across Ontario seeking different types of work opportunities.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {opportunityTypes.map((item, index) => (
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
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">LOOKING FOR WORK?</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Get in touch with Western Jobs to explore opportunities</h2>
          <p className="mt-6 text-xl text-white/70">
            Reach out to learn more about temporary, permanent, and contract opportunities across Toronto and the GTA that may align with your experience and goals.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/apply'}
              className="px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
            >
              Apply Now
            </button>
            <button 
              onClick={openContact}
              className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-3xl text-sm transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}