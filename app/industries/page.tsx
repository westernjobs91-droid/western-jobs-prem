'use client'

import { motion } from 'framer-motion'


export default function IndustriesPage() {
  const industries = [
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Production workers, assembly line staff, machine operators, quality control, and supervisors.",
      roles: ["Production Associates", "Machine Operators", "Quality Inspectors", "Shift Supervisors"],
      why: "We understand fast-paced manufacturing environments and the need for reliable, safety-focused workers."
    },
    {
      name: "Logistics & Warehousing",
      icon: "📦",
      description: "Forklift operators, pickers, packers, shipping/receiving, and warehouse supervisors.",
      roles: ["Forklift Operators", "Order Pickers", "Packers", "Warehouse Associates"],
      why: "Our candidates are trained for high-volume, fast-paced warehouse operations."
    },
    {
      name: "Administrative & Office",
      icon: "💼",
      description: "Receptionists, data entry, executive assistants, office administrators, and HR support.",
      roles: ["Administrative Assistants", "Receptionists", "Data Entry Clerks", "Office Coordinators"],
      why: "We match candidates who bring professionalism, attention to detail, and strong communication skills."
    },
    {
      name: "Customer Experience",
      icon: "🎧",
      description: "Call centre agents, customer service representatives, technical support, and bilingual roles.",
      roles: ["Customer Service Reps", "Call Centre Agents", "Technical Support", "Bilingual Specialists"],
      why: "We specialize in placing friendly, solution-oriented professionals who represent your brand well."
    },
    {
      name: "Transportation",
      icon: "🚚",
      description: "Drivers, delivery associates, logistics coordinators, and fleet support staff.",
      roles: ["Delivery Drivers", "Truck Drivers", "Logistics Coordinators", "Dispatchers"],
      why: "We understand the importance of reliable, safety-conscious transportation professionals."
    },
    {
      name: "Food & Beverage",
      icon: "🍽️",
      description: "Production workers, sanitation staff, packers, and food safety supervisors.",
      roles: ["Food Production Workers", "Sanitation Associates", "Packers", "Quality Assurance"],
      why: "We place candidates who understand food safety standards and fast-paced production environments."
    },
    {
      name: "Automotive",
      icon: "🚗",
      description: "Assembly workers, quality control, material handlers, and maintenance technicians.",
      roles: ["Assembly Technicians", "Quality Inspectors", "Material Handlers", "Maintenance Staff"],
      why: "We understand the precision and reliability required in the automotive manufacturing sector."
    },
    {
      name: "Supply Chain",
      icon: "🔗",
      description: "Inventory specialists, procurement support, supply chain analysts, and planners.",
      roles: ["Inventory Controllers", "Procurement Assistants", "Supply Chain Coordinators", "Planners"],
      why: "We help companies maintain smooth operations with skilled supply chain professionals."
    }
  ]

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">INDUSTRIES WE SERVE</div>
            <h1 className="section-header mt-3 text-white">Specialized staffing<br />for every sector.</h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">From manufacturing floors to corporate offices — we understand the unique talent needs of every sector across Ontario.</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-10 group"
            >
              <div className="text-6xl mb-6">{industry.icon}</div>
              
              <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
              <p className="text-lg text-slate-600 mb-6">{industry.description}</p>
              
              <div className="mb-6">
                <div className="text-xs font-bold tracking-[1px] text-slate-500 mb-3">COMMON ROLES WE FILL</div>
                <div className="flex flex-wrap gap-2">
                  {industry.roles.map((role, i) => (
                    <div key={i} className="bg-slate-100 text-slate-700 px-4 py-1 rounded-2xl text-sm">
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-sm text-slate-600 italic">"{industry.why}"</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <div className="text-xs font-bold tracking-[2px] text-emerald-600">WHY WESTERN JOBS?</div>
          <h2 className="section-header mt-3">We don't just fill roles.<br />We understand your industry.</h2>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-5xl mb-6">🎯</div>
              <div className="font-bold text-xl mb-4">Industry Expertise</div>
              <p className="text-slate-600">We know the specific skills, certifications, and experience required in each sector.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-5xl mb-6">⚡</div>
              <div className="font-bold text-xl mb-4">Fast & Reliable</div>
              <p className="text-slate-600">We deliver qualified candidates quickly — often within 48 hours for urgent needs.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-3xl p-10">
              <div className="text-5xl mb-6">🤝</div>
              <div className="font-bold text-xl mb-4">Long-Term Partners</div>
              <p className="text-slate-600">98.4% of our placements are still with clients after 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-5xl font-bold tracking-tighter">Don't see your industry?</h2>
          <p className="mt-6 text-xl text-white/70">We can still help. Contact us to discuss your specific staffing needs.</p>
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className="mt-10 px-10 py-4 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}