'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setFeedback("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setFeedback(data.error || "Something went wrong.")
        return
      }

      setStatus("success")
      setFeedback("Thanks — your message has been sent.")
      setForm({ name: "", email: "", company: "", message: "" })
    } catch {
      setStatus("error")
      setFeedback("Something went wrong. Please try again.")
    }
  }

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">CONTACT WESTERN JOBS</div>
            <h1 className="section-header mt-3 text-white">Let's talk about your hiring needs or employment goals</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Get in touch with Western Jobs to discuss temporary staffing, permanent hiring, temp-to-perm options, contract staffing support, or available opportunities.</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A2540] rounded-3xl p-10 text-white">
              <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">CONTACT INFORMATION</div>
              
              <div className="mt-8 space-y-6 text-white/90">
                <div className="flex items-start gap-x-4">
                  <div className="text-[#F0C94D] mt-1">📞</div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>226-697-7800</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="text-[#F0C94D] mt-1">✉️</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>info@westernjobs.ca</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="text-[#F0C94D] mt-1">📍</div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div>Ontario, Canada</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="text-[#F0C94D] mt-1">⏰</div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div>We typically respond within one business day.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">WHAT WE CAN HELP WITH</div>
              
              <div className="mt-6 space-y-3 text-slate-700">
                {[
                  "Temporary staffing support",
                  "Permanent staffing and hiring discussions",
                  "Temp-to-perm staffing options",
                  "Contract staffing enquiries",
                  "Job seeker questions and opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-x-3">
                    <div className="text-[#C99700] mt-1">✓</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
              <div className="flex items-center gap-x-4 mb-8">
                <div className="w-12 h-12 bg-[#0A2540] text-white rounded-2xl flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[2px] text-[#C99700]">SEND A MESSAGE</div>
                  <h2 className="text-3xl font-bold">Contact Form</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">FULL NAME</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2">COMPANY NAME</label>
                  <input 
                    type="text" 
                    placeholder="Company name (optional)"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2">MESSAGE</label>
                  <textarea 
                    placeholder="Tell us how we can help..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-slate-300 rounded-3xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {feedback && (
                  <p className={`text-sm text-center ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">RESPONSE TIME</div>
              <h3 className="mt-4 text-2xl font-bold">Clear and timely communication</h3>
              <p className="mt-4 text-slate-600">We typically respond within one business day to help keep staffing conversations moving.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">EMPLOYERS</div>
              <h3 className="mt-4 text-2xl font-bold">Discuss your hiring needs</h3>
              <p className="mt-4 text-slate-600">Contact Western Jobs to explore temporary staffing, permanent hiring, contract staffing, and temp-to-perm options.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-xs font-bold tracking-[2px] text-[#C99700]">JOB SEEKERS</div>
              <h3 className="mt-4 text-2xl font-bold">Explore opportunities</h3>
              <p className="mt-4 text-slate-600">Reach out if you are seeking temporary, permanent, or contract opportunities that match your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">WESTERN JOBS</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Professional staffing support with a more personal approach</h2>
          <p className="mt-6 text-xl text-white/70">We help employers hire with confidence and support job seekers with clear communication and meaningful opportunities.</p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6476326464" className="px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all">
              Call 647-632-6464
            </a>
            <a href="mailto:hr@westernjobs.ca" className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-3xl text-sm transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}