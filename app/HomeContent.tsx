'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import { useModal } from '@/app/context/ModalContext'
import Link from 'next/link'

export default function HomeContent() {
  const [showJobModal, setShowJobModal] = useState(false)
  const { openContact } = useModal()

  return (
    <main>
      {/* HERO */}
      <section className="hero-bg min-h-[92vh] flex items-center relative">
        <div className="max-w-screen-2xl mx-auto px-8 pt-8 pb-16">
          <div className="grid lg:grid-cols-12 gap-x-8 items-center">
            <div className="lg:col-span-7 max-w-3xl">
              <div className="inline-flex items-center rounded-3xl bg-white/95 px-5 py-2 text-xs font-semibold tracking-[1px] text-[#0A2540] mb-8 shadow-sm">
                <div className="flex items-center -space-x-1 mr-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 bg-[#00C9A7] rounded-full border-2 border-white"></div>
                </div>
               <span>98.4% CLIENT RETENTION • 1,000+ PLACEMENTS IN 2024/25</span>
              </div>
              
              <h1 className="text-white text-[68px] lg:text-[78px] leading-[0.98] font-semibold tracking-[-0.045em] mb-6">
                The right talent.<br />
                At the right time.<br />
                <span className="text-[#00C9A7]">Every time.</span>
              </h1>
              
              <p className="max-w-lg text-[21px] text-white/90 tracking-tight">
                Ontario's most trusted premium recruitment partner. We connect ambitious employers with exceptional talent across the province.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                <button 
                  onClick={() => window.location.href = '/hire-staff'}
                  className="group flex items-center justify-center gap-x-3 px-10 py-[18px] bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-base transition-all shadow-xl shadow-black/10"
                >
                  <span>Hire Talent Now</span>
                  <i className="fa-solid fa-arrow-right transition group-hover:translate-x-1"></i>
                </button>
                
                <button 
                  onClick={() => setShowJobModal(true)}
                  className="group flex items-center justify-center gap-x-3 px-8 py-[18px] border border-white/40 text-white hover:bg-white/10 font-semibold rounded-3xl text-base transition-all"
                >
                  <span>Browse Open Roles</span>
                </button>
              </div>
            </div>

            {/* Stats Box */}
            <div className="lg:col-span-5 mt-16 lg:mt-0">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-5xl font-semibold text-[#0A2540]">50+</div>
                    <div className="text-sm text-slate-500 mt-1">Active Clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-semibold text-[#0A2540]">98.4%</div>
                    <div className="text-sm text-slate-500 mt-1">Retention Rate</div>
                  </div>
                  <div>
                    <div className="text-5xl font-semibold text-[#0A2540]">9.2</div>
                    <div className="text-sm text-slate-500 mt-1">Avg. Days to Hire</div>
                  </div>
                  <div>
                    <div className="text-5xl font-semibold text-[#0A2540]">4.98</div>
                    <div className="text-sm text-slate-500 mt-1">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* TRUST BAR - Better Version */}
<div className="bg-white border-b border-slate-100 py-6">
  <div className="max-w-screen-2xl mx-auto px-8">
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm">
      <div className="font-semibold text-slate-700">98.4% Client Retention</div>
      <div className="hidden md:block text-slate-300">|</div>
      <div className="font-semibold text-slate-700">1,000+ Placements in 2024/25</div>
      <div className="hidden md:block text-slate-300">|</div>
      <div className="font-semibold text-slate-700">50+ Active Clients</div>
      <div className="hidden md:block text-slate-300">|</div>
      <div className="font-semibold text-slate-700">48-Hour Average Fill Time</div>
    </div>
  </div>
</div>

      {/* SERVICES */}
      <section id="services" className="max-w-screen-2xl mx-auto px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-bold text-emerald-600">OUR EXPERTISE</div>
            <h2 className="section-header mt-2">Flexible solutions.<br />Exceptional results.</h2>
          </div>
          <div className="max-w-xs mt-4 lg:mt-0 text-lg text-slate-600">
            Every solution is tailored to your specific needs and timeline.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { icon: "fa-clock-rotate-left", title: "Temporary Staffing", desc: "Rapid deployment of pre-vetted talent for seasonal peaks, short-term projects, or emergency coverage.", stat: "AVERAGE FILL TIME: 48 HOURS" },
            { icon: "fa-user-tie", title: "Permanent Placement", desc: "Strategic executive and professional search for long-term team building with cultural alignment.", stat: "98.4% 12-MONTH RETENTION" },
            { icon: "fa-sync", title: "Temp-to-Perm", desc: "The smartest way to hire — evaluate performance before making a permanent commitment.", stat: "82% CONVERSION RATE" },
            { icon: "fa-file-contract", title: "Contract & Project", desc: "Specialized talent for fixed-term projects, maternity coverage, and specialized skill requirements.", stat: "EXPERTS IN 47 INDUSTRIES" }
          ].map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -16 }}
              className="service-card bg-white border border-slate-200 rounded-3xl p-9 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] text-white rounded-3xl mb-9 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${service.icon} text-4xl`}></i>
              </div>
              <div className="font-semibold text-3xl tracking-tight mb-4">{service.title}</div>
              <div className="text-slate-600 leading-relaxed">{service.desc}</div>
              <div className="mt-auto pt-8 text-xs font-semibold flex items-center gap-x-2 text-[#00C9A7]">
                <span>{service.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVING ACROSS ONTARIO */}
<section className="max-w-screen-2xl mx-auto px-8 py-20 border-t border-slate-100">
  <div className="text-center mb-12">
    <div className="text-xs font-bold tracking-[2px] text-emerald-600">SERVING ALL OF ONTARIO</div>
    <h2 className="section-header mt-3">Premium staffing across the province</h2>
    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
      We help employers and job seekers in major cities across Ontario.
    </p>
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

      {/* STATS BAR */}
      <div className="bg-[#0A2540] py-8">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center text-white">
            <div>
              <AnimatedCounter end={4872} />
              <div className="text-sm text-white/60 -mt-1">Placements in 2025</div>
            </div>
            <div>
              <AnimatedCounter end={98.4} suffix="%" />
              <div className="text-sm text-white/60 -mt-1">% Client Retention</div>
            </div>
            <div>
              <AnimatedCounter end={9.2} />
              <div className="text-sm text-white/60 -mt-1">Average Days to Hire</div>
            </div>
            <div>
              <AnimatedCounter end={4.98} />
              <div className="text-sm text-white/60 -mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOR EMPLOYERS */}
      <section id="employers" className="max-w-screen-2xl mx-auto px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10 items-center">
          <div className="lg:col-span-6">
            <div className="uppercase tracking-[1.5px] text-xs font-bold text-emerald-600">FOR EMPLOYERS</div>
            <h2 className="section-header mt-3 tracking-tight">Find exceptional<br />talent. Fast.</h2>
            
            <div className="mt-7 text-xl text-slate-600 max-w-lg">
              We understand Ontario’s unique labour market. Let us help you build high-performing teams with speed and precision.
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-x-3 text-slate-600">
                <div className="text-emerald-500">✓</div>
                <span>Access to 85,000+ pre-screened candidates</span>
              </div>
              <div className="flex items-center gap-x-3 text-slate-600">
                <div className="text-emerald-500">✓</div>
                <span>Dedicated Talent Acquisition Specialist</span>
              </div>
              <div className="flex items-center gap-x-3 text-slate-600">
                <div className="text-emerald-500">✓</div>
                <span>Guaranteed 48-hour response</span>
              </div>
            </div>
            
            <button 
              onClick={() => window.location.href = '/hire-staff'}
              className="mt-10 px-10 py-4 bg-[#0A2540] hover:bg-black transition-all text-white font-semibold rounded-3xl flex items-center gap-x-3 text-sm"
            >
              <span>Start Hiring Today</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-9">
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-400">HOW EMPLOYERS BENEFIT</div>
            
            <div className="mt-8 space-y-8">
              <div className="flex gap-x-5">
                <div className="font-mono text-4xl text-[#00C9A7] font-semibold w-8">01</div>
                <div>
                  <div className="font-semibold">Reduce hiring time by 65%</div>
                  <div className="text-sm text-slate-600 mt-1">Our average time-to-hire is just 9.2 days</div>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div className="font-mono text-4xl text-[#00C9A7] font-semibold w-8">02</div>
                <div>
                  <div className="font-semibold">Lower cost-per-hire</div>
                  <div className="text-sm text-slate-600 mt-1">Save 35-50% compared to traditional recruitment</div>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div className="font-mono text-4xl text-[#00C9A7] font-semibold w-8">03</div>
                <div>
                  <div className="font-semibold">Higher quality of hire</div>
                  <div className="text-sm text-slate-600 mt-1">98.4% of our placements are still with clients after 12 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR CANDIDATES + FINAL CTA COMBINED */}
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-center">
            
            {/* Left Side - Job Seekers */}
            <div className="lg:col-span-7">
              <div className="uppercase tracking-[1.5px] text-xs font-bold text-[#00C9A7]">FOR JOB SEEKERS</div>
              <h2 className="section-header mt-3 tracking-tight text-white">Find work that<br />fits your life.</h2>
              
              <div className="mt-6 text-xl text-white/80 max-w-lg">
                Whether you’re looking for flexible temporary work, contract projects, or a long-term career move, we have opportunities that match your goals.
              </div>
              
              <button 
                onClick={() => window.location.href = '/apply'}
                className="mt-8 px-9 py-3.5 border border-white/50 hover:bg-white hover:text-[#0A2540] text-sm font-semibold rounded-3xl transition-all flex items-center gap-x-3"
              >
                Apply Now
              </button>
            </div>

            {/* Right Side - CTA Box */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
              <div className="text-xs font-bold tracking-[1.5px] text-[#F0C94D]">READY TO EXPERIENCE PREMIUM STAFFING?</div>
              
              <h3 className="mt-4 text-3xl font-bold leading-tight">Whether you're hiring or looking for your next role, let's talk.</h3>
              
              <div className="mt-8 flex flex-col gap-3">
                <button 
                  onClick={() => window.location.href = '/hire-staff'}
                  className="w-full px-8 py-3.5 bg-white hover:bg-slate-100 text-[#0A2540] font-semibold rounded-3xl text-sm transition-all flex items-center justify-center gap-x-3"
                >
                  I'm Hiring Talent
                </button>
                <button 
                  onClick={() => window.location.href = '/apply'}
                  className="w-full px-8 py-3.5 border border-white/40 hover:bg-white/10 text-sm font-semibold rounded-3xl transition-all flex items-center justify-center gap-x-3"
                >
                  I'm Looking for Work
                </button>
              </div>
              
              <div className="mt-6 text-center text-xs text-white/50">Or call us directly at <a href="tel:2266977800" className="font-semibold text-white hover:text-[#00C9A7]">226-697-7800</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* JOB SEARCH MODAL */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-6" onClick={() => setShowJobModal(false)}>
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="px-8 pt-8 pb-6 border-b flex justify-between items-center">
              <div>
                <div className="font-semibold text-2xl">Find Your Next Opportunity</div>
                <div className="text-sm text-slate-500">Browse open roles across Ontario</div>
              </div>
              <button onClick={() => setShowJobModal(false)} className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-times text-3xl"></i>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex gap-x-3 mb-6">
                <div className="flex-1 relative">
                  <i className="fa-solid fa-search absolute left-4 top-4 text-slate-400"></i>
                  <input type="text" placeholder="Job title, keyword, or location" className="w-full border border-slate-300 pl-11 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-[#00C9A7]" />
                </div>
                <select className="border border-slate-300 px-5 py-3.5 rounded-2xl text-sm text-slate-600 focus:outline-none focus:border-[#00C9A7]">
                  <option>All Locations</option>
                  <option>Toronto</option>
                  <option>Mississauga</option>
                  <option>Hamilton</option>
                  <option>London</option>
                  <option>Windsor</option>
                </select>
              </div>
              
              <div className="text-xs font-semibold text-slate-400 tracking-wider mb-3">FEATURED OPEN ROLES</div>
              
              <div className="space-y-3 max-h-[320px] overflow-auto pr-2">
                {[
                  { title: "Warehouse Associate – Afternoon Shift", location: "Mississauga", pay: "$22.50/hr", type: "Temp-to-Perm" },
                  { title: "Production Supervisor", location: "Hamilton", pay: "$68,000", type: "Permanent" },
                  { title: "Customer Service Representative (Bilingual)", location: "Toronto", pay: "$24/hr", type: "Contract" },
                  { title: "Forklift Operator – Night Shift", location: "London", pay: "$25.75/hr", type: "Temporary" }
                ].map((job, index) => (
                  <div key={index} className="flex justify-between items-center border border-slate-100 hover:border-slate-200 transition-colors px-5 py-4 rounded-2xl">
                    <div>
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-xs text-slate-500">{job.location} • {job.pay} • {job.type}</div>
                    </div>
                    <button className="px-6 py-2 text-xs font-semibold bg-[#0A2540] text-white rounded-2xl">Apply</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}