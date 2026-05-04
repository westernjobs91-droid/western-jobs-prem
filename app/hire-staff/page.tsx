'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HireStaffPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    hiringNeed: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setFeedback("")

    try {
      const res = await fetch("/api/hire-staff", {
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
      setFeedback("Thanks — your request has been sent. We'll contact you within 24 hours.")
      setForm({ name: "", company: "", email: "", phone: "", hiringNeed: "" })
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
              ⏰ Hiring support for urgent and ongoing staffing needs
            </div>
            
            <h1 className="text-6xl font-bold tracking-tighter">Hire Staff Faster<br />With Western Jobs</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">Tell us what you need, and we'll help you explore temporary, permanent, temp-to-perm, and contract staffing solutions built around your business.</p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Left Side - Benefits */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="text-xs font-bold tracking-[2px] text-emerald-600">REQUEST STAFFING SUPPORT</div>
              <h2 className="section-header mt-3">Tell us what you need</h2>
              
              <div className="mt-8 space-y-4">
                {[
                  "Responsive support for urgent staffing needs",
                  "Flexible hiring options for changing workforce demands",
                  "Professional communication throughout the process",
                  "Support for temporary, permanent, and contract roles",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-x-4">
                    <div className="mt-1 text-[#00C9A7]">✓</div>
                    <p className="text-lg text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                  <div className="text-[#C99700] text-3xl mb-4">⚡</div>
                  <div className="font-bold text-xl">Flexible</div>
                  <p className="mt-2 text-slate-600">Staffing models that fit your business.</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                  <div className="text-[#C99700] text-3xl mb-4">🤝</div>
                  <div className="font-bold text-xl">Dependable</div>
                  <p className="mt-2 text-slate-600">Candidate support focused on fit and readiness.</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                  <div className="text-[#C99700] text-3xl mb-4">🛡️</div>
                  <div className="font-bold text-xl">Professional</div>
                  <p className="mt-2 text-slate-600">Clear communication from start to finish.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">YOUR NAME</label>
                    <input 
                      type="text" 
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">COMPANY NAME</label>
                    <input 
                      type="text" 
                      placeholder="Your company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      placeholder="(647) 123-4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2">WHAT TYPE OF STAFF DO YOU NEED?</label>
                  <textarea 
                    placeholder="e.g., 5 warehouse associates for seasonal peak, 2 production supervisors, temp-to-perm forklift operators..."
                    rows={6}
                    value={form.hiringNeed}
                    onChange={(e) => setForm({ ...form, hiringNeed: e.target.value })}
                    className="w-full border border-slate-300 rounded-3xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm disabled:opacity-70"
                >
                  {status === "loading" ? "Sending Request..." : "Request Staffing Support"}
                </button>

                {feedback && (
                  <p className={`text-sm text-center ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {feedback}
                  </p>
                )}
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">We typically respond within one business day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-5xl font-bold tracking-tighter">Ready to hire with confidence?</h2>
          <p className="mt-6 text-xl text-white/70">Let's discuss your staffing needs and find the right solution for your business.</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Fill Out the Form Above
          </button>
        </div>
      </section>
    </main>
  )
}