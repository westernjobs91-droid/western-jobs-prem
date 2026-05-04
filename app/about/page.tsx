'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const values = [
    {
      title: "Professional Service",
      text: "We aim to provide clear communication, dependable support, and a smooth hiring experience for both employers and candidates.",
    },
    {
      title: "Responsive Support",
      text: "Hiring needs can move quickly. Our approach is built around responsiveness and practical staffing support when timing matters.",
    },
    {
      title: "People-Focused Approach",
      text: "We work to create better matches by understanding both business needs and candidate strengths more carefully.",
    },
  ]

  const reasons = [
    "Flexible support across temporary, permanent, temp-to-perm, and contract staffing",
    "Professional communication throughout the recruitment process",
    "Ontario service focus with a practical understanding of workforce needs",
    "A service approach centered on fit, responsiveness, and reliability",
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">ABOUT WESTERN JOBS</div>
            <h1 className="section-header mt-3 text-white">Professional staffing support built around real hiring needs</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Western Jobs is a recruitment and staffing firm focused on helping employers find dependable talent while supporting job seekers with meaningful opportunities.</p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH + MISSION */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10 items-start">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR APPROACH</div>
            <h2 className="section-header mt-3">A practical and professional recruitment partner</h2>
            <div className="mt-6 text-lg text-slate-600 space-y-4">
              <p>We understand that employers often need staffing support that is responsive, flexible, and easy to work with. Western Jobs is built to help reduce hiring pressure by supporting temporary, permanent, temp-to-perm, and contract staffing needs with a clear and dependable process.</p>
              <p>We also recognize that job seekers benefit from professional communication and thoughtful opportunity matching. Our goal is to help create stronger connections between employers and candidates, supported by a service style that values fit, responsiveness, and trust.</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0A2540] rounded-3xl p-10 text-white">
              <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">MISSION</div>
              <h3 className="mt-4 text-3xl font-bold">Supporting better hiring outcomes with flexible staffing solutions</h3>
              <p className="mt-6 text-white/80">Our mission is to support employers with practical recruitment solutions while helping job seekers access opportunities that align with their skills, availability, and goals.</p>
              
              <div className="mt-8 space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-x-3">
                    <div className="mt-1 text-[#F0C94D]">✓</div>
                    <p className="text-white/90">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">OUR VALUES</div>
            <h2 className="section-header mt-3">What shapes the way we work</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">Western Jobs is built around service values that help create a stronger experience for employers and candidates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-200 rounded-3xl p-9 group"
              >
                <div className="w-14 h-14 bg-[#0A2540] text-white rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">★</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE FOCUS + WHY CLIENTS CHOOSE US */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
            <div className="text-xs font-bold tracking-[2px] text-[#C99700]">SERVICE FOCUS</div>
            <h3 className="mt-4 text-3xl font-bold">Supporting employers across Ontario</h3>
            <p className="mt-6 text-lg text-slate-600">Western Jobs supports employers and job seekers across Ontario with a service focus on flexibility, professionalism, and clear communication. Whether the need is short-term coverage, long-term hiring, or project-based support, our approach is built to be practical and responsive.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
            <div className="text-xs font-bold tracking-[2px] text-[#C99700]">WHY CLIENTS CHOOSE US</div>
            <h3 className="mt-4 text-3xl font-bold">A simpler, more dependable hiring experience</h3>
            <p className="mt-6 text-lg text-slate-600">Employers choose Western Jobs because they want staffing support that is responsive, professional, and aligned with business needs. Candidates value clear communication and the opportunity to be connected with meaningful roles through a more supportive process.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">LET'S WORK TOGETHER</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Ready to speak with Western Jobs about your hiring needs?</h2>
          <p className="mt-6 text-xl text-white/70">Contact us to discuss temporary staffing, permanent hiring, temp-to-perm support, and contract staffing solutions.</p>
          
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
                  <div className="font-semibold text-3xl tracking-tight">Let's Work Together</div>
                  <div className="text-sm text-slate-500 mt-1">Tell us about your hiring needs</div>
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
                  <textarea name="message" rows={4} required className="w-full border border-slate-300 rounded-3xl px-4 py-3 text-sm focus:outline-none focus:border-[#00C9A7]" placeholder="What are you looking for?"></textarea>
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