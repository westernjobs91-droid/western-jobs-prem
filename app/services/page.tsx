'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    {
      title: "Temporary Staffing",
      text: "Temporary staffing helps businesses fill short-term workforce needs with greater flexibility. This can be useful for seasonal demand, absences, project support, or operational spikes that require dependable staff quickly.",
      benefits: [
        "Support for urgent or short-term workforce gaps",
        "Greater flexibility during busy periods",
        "Practical option for variable staffing needs",
      ],
      useCases: [
        "Seasonal demand",
        "Coverage for absences",
        "Short-term operational support",
      ],
    },
    {
      title: "Permanent Staffing",
      text: "Permanent staffing supports employers looking to build stronger, longer-term teams. This service is designed for businesses seeking reliable talent that aligns with role requirements, team dynamics, and long-term goals.",
      benefits: [
        "Long-term hiring support",
        "Focus on fit and role alignment",
        "Helps build stronger, more stable teams",
      ],
      useCases: [
        "Long-term hiring needs",
        "Team growth",
        "Replacing an existing permanent role",
      ],
    },
    {
      title: "Temp-to-Perm Staffing",
      text: "Temp-to-perm staffing gives employers the opportunity to evaluate candidates in an active work environment before making a permanent hiring decision. It can reduce hiring uncertainty while still meeting immediate staffing needs.",
      benefits: [
        "Evaluate performance before permanent hire",
        "Reduce hiring risk",
        "Balance immediate needs with long-term planning",
      ],
      useCases: [
        "Trial-to-hire situations",
        "Roles requiring practical fit assessment",
        "Employers seeking more flexibility before commitment",
      ],
    },
    {
      title: "Contract Staffing",
      text: "Contract staffing provides support for project-based work, fixed-term assignments, and specialized business needs. It helps employers access staffing support without requiring a long-term permanent structure.",
      benefits: [
        "Support for project-based requirements",
        "Useful for fixed-term assignments",
        "Adds flexibility to workforce planning",
      ],
      useCases: [
        "Project support",
        "Fixed-term contracts",
        "Specialized short-term business needs",
      ],
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
        body: JSON.stringify({ name, email, message, type: 'general' })
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">SERVICES</div>
            <h1 className="section-header mt-3 text-white">Recruitment and staffing solutions designed around business needs</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Western Jobs offers flexible staffing support for employers seeking temporary staffing, permanent staffing, temp-to-perm hiring, and contract staffing solutions.</p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4 }}
              className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 lg:grid-cols-[1.1fr_0.9fr] group"
            >
              <div>
                <div className="text-xs font-bold tracking-[2px] text-[#C99700]">SERVICE 0{index + 1}</div>
                <h2 className="mt-4 text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">{service.text}</p>

                <div className="mt-8">
                  <div className="text-sm font-bold tracking-[1px] text-slate-500 mb-4">KEY BENEFITS</div>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-x-3">
                        <div className="mt-1 text-[#00C9A7]">✓</div>
                        <p className="text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="text-xs font-bold tracking-[1px] text-slate-500 mb-4">COMMON USE CASES</div>
                
                <div className="space-y-3 mb-8">
                  {service.useCases.map((useCase, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-700">
                      {useCase}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm group-hover:bg-[#C99700] group-hover:text-[#0A2540]"
                >
                  Discuss This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">FLEXIBLE HIRING SUPPORT</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Not sure which staffing option fits your needs best?</h2>
          <p className="mt-6 text-xl text-white/70">Western Jobs can help you explore the right mix of temporary, permanent, temp-to-perm, or contract staffing support for your business.</p>
          
          <button 
            onClick={() => setShowContactModal(true)}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Contact Western Jobs
          </button>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-6" onClick={() => setShowContactModal(false)}>
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="px-8 pt-8 pb-5">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-3xl tracking-tight">Let's discuss your needs</div>
                  <div className="text-sm text-slate-500 mt-1">Tell us which service you're interested in</div>
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
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">HOW CAN WE HELP?</label>
                  <textarea name="message" rows={4} required className="w-full border border-slate-300 rounded-3xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" placeholder="Which service are you interested in?"></textarea>
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