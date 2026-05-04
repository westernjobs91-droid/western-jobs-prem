'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from '@/app/context/ModalContext'

export default function ServicesPage() {
  const { openContact } = useModal()

  const services = [
    {
      title: "Temporary Staffing",
      text: "Temporary staffing helps businesses across Toronto, Mississauga, Brampton, Vaughan and the GTA fill short-term workforce needs with greater flexibility. Ideal for seasonal demand, absences, project support, or operational spikes.",
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
      text: "Permanent staffing supports employers across Ontario looking to build stronger, longer-term teams. We help you find reliable talent that aligns with role requirements, team dynamics, and long-term goals.",
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
      text: "Temp-to-perm staffing gives employers the opportunity to evaluate candidates in a real work environment before making a permanent decision. It reduces hiring risk while meeting immediate needs.",
      benefits: [
        "Evaluate performance before permanent hire",
        "Reduce hiring risk",
        "Balance immediate needs with long-term planning",
      ],
      useCases: [
        "Trial-to-hire situations",
        "Roles requiring practical fit assessment",
        "Employers seeking flexibility before commitment",
      ],
    },
    {
      title: "Contract Staffing",
      text: "Contract staffing provides support for project-based work, fixed-term assignments, and specialized business needs across Ontario without requiring long-term permanent structure.",
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

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">SERVICES</div>
            <h1 className="section-header mt-3 text-white">
              Recruitment and staffing solutions designed around business needs
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              Western Jobs offers flexible temporary, permanent, temp-to-perm, and contract staffing solutions across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor and the GTA.
            </p>
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
                  onClick={openContact}
                  className="w-full bg-[#0A2540] hover:bg-black transition-all text-white font-semibold py-4 rounded-3xl text-sm group-hover:bg-[#C99700] group-hover:text-[#0A2540]"
                >
                  Discuss This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      // Add this section before the final CTA section

{/* SERVING ACROSS ONTARIO */}
<section className="max-w-screen-2xl mx-auto px-8 py-16 border-t border-slate-100">
  <div className="text-center mb-10">
    <div className="text-xs font-bold tracking-[2px] text-emerald-600">SERVING ALL OF ONTARIO</div>
    <h2 className="section-header mt-3">Premium staffing across the province</h2>
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
          <div className="text-xs font-bold tracking-[2px] text-[#F0C94D]">FLEXIBLE HIRING SUPPORT</div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter">Not sure which staffing option fits your needs best?</h2>
          <p className="mt-6 text-xl text-white/70">
            Western Jobs can help you explore the right mix of temporary, permanent, temp-to-perm, or contract staffing support for your business.
          </p>
          
          <button 
            onClick={openContact}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Contact Western Jobs
          </button>
        </div>
      </section>
    </main>
  )
}