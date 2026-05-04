'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")
  const [selectedFileName, setSelectedFileName] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setFeedback("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      let data: { error?: string; ok?: boolean } = {}
      try {
        data = await res.json()
      } catch {
        data = {}
      }

      if (!res.ok) {
        setStatus("error")
        setFeedback(data.error || "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setFeedback("Thanks — your application has been sent successfully.")
      form.reset()
      setSelectedFileName("")
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
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">APPLY NOW</div>
            <h1 className="section-header mt-3 text-white">Submit your details and resume</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Western Jobs supports candidates seeking temporary, permanent, and contract opportunities. Apply here and share your resume.</p>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Left Side - Benefits */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="text-xs font-bold tracking-[2px] text-emerald-600">CANDIDATE APPLICATION</div>
              <h2 className="section-header mt-3">Apply with your resume</h2>
              
              <div className="mt-8 space-y-4">
                {[
                  "Simple application process",
                  "Resume sent directly to Western Jobs",
                  "Opportunities based on fit and availability",
                  "Professional communication when opportunities are available",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-x-4">
                    <div className="mt-1 text-[#00C9A7]">✓</div>
                    <p className="text-lg text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-8">
                <div className="text-sm font-bold tracking-[1px] text-slate-500 mb-4">WHAT HAPPENS NEXT?</div>
                <div className="space-y-4 text-slate-600">
                  <div>1. We review your application and resume</div>
                  <div>2. We match you with suitable opportunities</div>
                  <div>3. We contact you when a good fit is found</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl" suppressHydrationWarning>
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">FULL NAME</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your full name"
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="you@example.com"
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="(647) 123-4567"
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">ROLE YOU'RE LOOKING FOR</label>
                    <input 
                      type="text" 
                      name="position" 
                      placeholder="e.g., Warehouse Associate, Production Supervisor"
                      className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2">ANYTHING ELSE YOU WANT US TO KNOW?</label>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your experience, availability, or any specific requirements..."
                    rows={5}
                    className="w-full border border-slate-300 rounded-3xl px-5 py-4 text-sm focus:outline-none focus:border-[#00C9A7]"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2">UPLOAD YOUR RESUME</label>
                  
                  <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center hover:border-[#00C9A7] transition-colors">
                    <input 
                      id="resume-upload" 
                      type="file" 
                      name="resume" 
                      accept=".pdf,.doc,.docx" 
                      className="hidden" 
                      required 
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        setSelectedFileName(file ? file.name : "")
                      }}
                    />
                    
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <div className="text-5xl mb-4">📄</div>
                      <div className="font-semibold text-lg mb-2">
                        {selectedFileName ? selectedFileName : "Click to upload your resume"}
                      </div>
                      <div className="text-sm text-slate-500">PDF, DOC, or DOCX (Max 5MB)</div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm disabled:opacity-70 mt-4"
                >
                  {status === "loading" ? "Sending Application..." : "Submit Application"}
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

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">QUESTIONS?</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Not ready to apply yet?</h2>
          <p className="mt-6 text-xl text-white/70">Feel free to contact us with any questions about opportunities.</p>
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Contact Us Instead
          </button>
        </div>
      </section>
    </main>
  )
}