'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EmployersPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const employerPoints = [
    "Temporary, permanent, temp-to-perm, and contract staffing support",
    "Responsive communication throughout the hiring process",
    "Candidate sourcing and screening support",
    "Flexible solutions for changing workforce needs",
  ]

  const process = [
    {
      title: "Understand the Role",
      text: "We begin by learning about your hiring needs, timelines, expectations, and the type of candidate you are seeking.",
    },
    {
      title: "Source & Review Candidates",
      text: "We identify candidates and review experience, fit, and readiness to support a more efficient hiring process.",
    },
    {
      title: "Coordinate Next Steps",
      text: "We support communication, interviews, and placement coordination to help keep the process moving clearly.",
    },
  ]

  const whyItHelps = [
    {
      title: "Temporary Staffing",
      text: "Helps employers cover short-term gaps, seasonal demand, and urgent staffing needs with more flexibility.",
    },
    {
      title: "Permanent Staffing",
      text: "Supports businesses looking to build stronger, long-term teams with candidates aligned to role needs.",
    },
    {
      title: "Temp-to-Perm",
      text: "Gives employers the opportunity to evaluate candidates on the job before making a permanent hiring decision.",
    },
    {
      title: "Contract Staffing",
      text: "Provides support for project-based work, fixed-term roles, and specialized short-term business requirements.",
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const name = `${formData.get('firstName')} ${formData.get('lastName')}`
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, type: 'employer' })
      })

      if (response.ok) {
        alert("Thank you! We'll contact you within 24 hours.")
        setShowContactModal(false)
        form.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">FOR EMPLOYERS</div>
            <h1 className="section-header mt-3 text-white">Staffing support designed to help businesses hire with more confidence</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Western Jobs supports employers with flexible recruitment solutions, professional communication, and practical staffing support for changing workforce needs.</p>
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
              <p className="mt-4 text-lg text-slate-600">Tell us what you need and we'll help you move forward with flexible staffing solutions tailored to your business.</p>
              
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
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">Western Jobs supports multiple hiring models so employers can choose a staffing approach that fits their business reality.</p>
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

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">NEED STAFFING SUPPORT?</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Hire the right staff — without delays or guesswork</h2>
          <p className="mt-6 text-xl text-white/70">Tell us what you need and get support with temporary, permanent, and contract staffing tailored to your business.</p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/hire-staff'}
              className="px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
            >
              Hire Staff Now
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-3xl text-sm transition-all"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-6" onClick={() => setShowContactModal(false)}>
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-8 pt-8 pb-5">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-3xl tracking-tight">Let's find your next hire</div>
                  <div className="text-sm text-slate-500 mt-1">Tell us about your staffing needs</div>
                </div>
                <button onClick={() => setShowContactModal(false)} className="text-slate-300 hover:text-slate-500">
                  <i className="fa-solid fa-times text-3xl"></i>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">FIRST NAME</label>
                    <input type="text" name="firstName" required className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">LAST NAME</label>
                    <input type="text" name="lastName" required className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">EMAIL ADDRESS</label>
                  <input type="email" name="email" required className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">COMPANY NAME</label>
                  <input type="text" name="company" className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">HOW CAN WE HELP?</label>
                  <textarea name="message" rows={4} required className="w-full border border-slate-300 rounded-3xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" placeholder="What roles are you looking to fill?"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-[17px] rounded-3xl text-sm mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}