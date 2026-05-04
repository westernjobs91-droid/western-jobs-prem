'use client'

import { motion } from 'framer-motion'

export default function HowWeWorkPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Needs Analysis",
      description: "We begin with a deep-dive consultation to understand your exact requirements, company culture, success metrics, and timeline.",
      details: [
        "Understand your business and culture",
        "Define role requirements and success criteria",
        "Discuss timeline and budget expectations",
        "Identify any specific certifications or skills needed"
      ]
    },
    {
      number: "02",
      title: "Targeted Sourcing & Screening",
      description: "Our specialized recruiters source from our extensive network and rigorously screen candidates for skills, experience, and cultural fit.",
      details: [
        "Access to 85,000+ pre-screened candidates",
        "Skills testing and background verification",
        "Cultural fit and personality assessment",
        "3–7 shortlisted candidates presented within 48 hours"
      ]
    },
    {
      number: "03",
      title: "Interview Coordination & Selection",
      description: "We manage all logistics — scheduling interviews, coordinating with your team, and supporting the decision-making process.",
      details: [
        "Interview scheduling and coordination",
        "Reference checks and background verification",
        "Offer negotiation support",
        "Clear communication at every stage"
      ]
    },
    {
      number: "04",
      title: "Onboarding & Ongoing Support",
      description: "We ensure a smooth transition and remain available for support throughout the placement period.",
      details: [
        "Onboarding assistance and guidance",
        "Performance check-ins at 30/60/90 days",
        "Replacement guarantee if needed",
        "Long-term partnership and support"
      ]
    }
  ]

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">OUR PROCESS</div>
            <h1 className="section-header mt-3 text-white">Simple. Transparent.<br />Effective.</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">Our proven 4-step process ensures you get the right talent, every time — with clear communication and zero guesswork.</p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 rounded-3xl p-12 group"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="text-8xl font-bold text-[#00C9A7] opacity-20 group-hover:opacity-30 transition-all">{step.number}</div>
                  <h3 className="text-4xl font-bold mt-6">{step.title}</h3>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">{step.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-x-3">
                        <div className="text-[#00C9A7] mt-1">✓</div>
                        <div className="text-slate-700">{detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[2px] text-emerald-600">TYPICAL TIMELINE</div>
            <h2 className="section-header mt-3">How long does it take?</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-x-6 bg-white border border-slate-200 rounded-3xl p-8">
                <div className="text-4xl">📅</div>
                <div>
                  <div className="font-bold text-xl">Day 1–2: Discovery Call</div>
                  <div className="text-slate-600">We learn your needs and begin sourcing immediately.</div>
                </div>
              </div>
              
              <div className="flex items-center gap-x-6 bg-white border border-slate-200 rounded-3xl p-8">
                <div className="text-4xl">📋</div>
                <div>
                  <div className="font-bold text-xl">Day 3–5: Candidate Presentation</div>
                  <div className="text-slate-600">You receive 3–7 pre-screened candidates.</div>
                </div>
              </div>
              
              <div className="flex items-center gap-x-6 bg-white border border-slate-200 rounded-3xl p-8">
                <div className="text-4xl">🤝</div>
                <div>
                  <div className="font-bold text-xl">Day 6–14: Interviews & Selection</div>
                  <div className="text-slate-600">We coordinate interviews and support your decision.</div>
                </div>
              </div>
              
              <div className="flex items-center gap-x-6 bg-white border border-slate-200 rounded-3xl p-8">
                <div className="text-4xl">✅</div>
                <div>
                  <div className="font-bold text-xl">Day 15+: Onboarding & Support</div>
                  <div className="text-slate-600">We ensure a smooth start and remain available.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-5xl font-bold tracking-tighter">Ready to experience our process?</h2>
          <p className="mt-6 text-xl text-white/70">Let's start with a discovery call and find the right talent for your business.</p>
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Start the Conversation
          </button>
        </div>
      </section>
    </main>
  )
}