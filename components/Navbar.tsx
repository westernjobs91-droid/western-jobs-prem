'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useModal } from '@/app/context/ModalContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openContact } = useModal()

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#0A2540] text-white text-sm py-3">
        <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <i className="fa-solid fa-globe text-[#00C9A7]"></i>
              <span>Serving all of Ontario</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="hidden md:block">24/7 Emergency Staffing Available</div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            
          {/* Logo */}
<Link href="/" className="flex items-center gap-x-3.5">
  <img 
    src="/logo.png" 
    alt="Western Jobs" 
    className="h-11 w-auto" 
  />
  
  <div className="flex flex-col justify-center -mt-1.8">
    <div className="font-bold text-[22px] tracking-[-0.3px] text-[#0A2540] leading-none">
      Western Jobs
    </div>
    <div className="text-[10px] text-[#00C9A7] tracking-[2px] font-medium -mt-0.5">
      PREMIUM STAFFING
    </div>
  </div>
</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
              <Link href="/services" className="hover:text-[#00C9A7] transition-colors">Services</Link>
              <Link href="/employers" className="hover:text-[#00C9A7] transition-colors">For Employers</Link>
              <Link href="/job-seekers" className="hover:text-[#00C9A7] transition-colors">For Job Seekers</Link>
              <Link href="/industries" className="hover:text-[#00C9A7] transition-colors">Industries</Link>
              <Link href="/how-we-work" className="hover:text-[#00C9A7] transition-colors">How We Work</Link>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-x-4">
              {/* Search */}
              <div className="relative w-56">
                <input type="text" placeholder="Search Jobs" className="w-full border border-slate-300 rounded-3xl pl-10 py-2 text-sm focus:outline-none focus:border-[#00C9A7]" />
                <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
              </div>

              <a href="tel:2266977800" className="flex items-center gap-x-2 text-sm font-medium hover:text-[#00C9A7]">📞 226-697-7800</a>

              {/* Post a Job → Goes to dedicated page */}
              <Link 
                href="/hire-staff"
                className="px-7 py-2.5 bg-[#0A2540] text-white text-sm font-semibold rounded-3xl hover:bg-black transition-all"
              >
                Post a Job
              </Link>

              {/* Find Work → Goes to dedicated page */}
              <Link 
                href="/apply"
                className="px-7 py-2.5 border border-slate-300 text-sm font-semibold rounded-3xl hover:bg-slate-50 transition-all"
              >
                Find Work
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-6 border-t">
              <div className="flex flex-col gap-y-4 text-sm font-medium">
                <Link href="/services">Services</Link>
                <Link href="/employers">For Employers</Link>
                <Link href="/job-seekers">For Job Seekers</Link>
                <Link href="/industries">Industries</Link>
                <Link href="/how-we-work">How We Work</Link>

                <div className="pt-4 border-t flex flex-col gap-y-3">
                  <Link href="/hire-staff" className="px-6 py-3 text-center font-semibold bg-[#0A2540] text-white rounded-3xl">Post a Job</Link>
                  <Link href="/apply" className="px-6 py-3 text-center font-semibold border border-slate-300 rounded-3xl">Find Work</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}