'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModal } from '@/app/context/ModalContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const { openContact } = useModal()

  const locations = [
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
    { name: "St. Thomas", path: "/st-thomas" },
    { name: "Tilsonburg", path: "/tilsonburg" },
    { name: "Ingersoll", path: "/ingersoll" },
    { name: "Alliston", path: "/alliston" },
  ]

  // Handle Search Submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim() !== "") {
      router.push('/apply')
    }
  }

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
            
         {/* Logo - Made smaller on medium screens */}
            <Link href="/" className="flex items-center gap-x-3">
              <img 
                src="/logo.png" 
                alt="Western Jobs" 
                className="h-10 md:h-12 w-auto" 
              />
              <div className="flex flex-col justify-center -mt-1.8">
                <div className="font-bold text-xl md:text-[22px] tracking-[-0.3px] text-[#0A2540] leading-none">
                  Western Jobs
                </div>
                <div className="text-[9px] md:text-[10px] text-[#00C9A7] tracking-[2px] font-medium -mt-0.5">
                  PREMIUM STAFFING
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-x-7 text-sm font-medium">
              <Link href="/services" className="hover:text-[#00C9A7] transition-colors">Services</Link>
              <Link href="/employers" className="hover:text-[#00C9A7] transition-colors">For Employers</Link>
              <Link href="/job-seekers" className="hover:text-[#00C9A7] transition-colors">For Job Seekers</Link>
              <Link href="/how-we-work" className="hover:text-[#00C9A7] transition-colors">How We Work</Link>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="flex items-center gap-x-1 hover:text-[#00C9A7] transition-colors"
                >
                  Locations <i className="fa-solid fa-chevron-down text-xs"></i>
                </button>

                {locationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50">
                    <div className="grid grid-cols-1">
                      {locations.map((loc, index) => (
                        <Link 
                          key={index} 
                          href={loc.path} 
                          className="px-5 py-2.5 text-sm hover:bg-slate-50 transition-colors"
                          onClick={() => setLocationsOpen(false)}
                        >
                          {loc.name}
                        </Link>
                      ))}
                      <div className="border-t my-1"></div>
                      <Link 
                        href="/locations" 
                        className="px-5 py-2.5 text-sm font-semibold text-[#00C9A7] hover:bg-slate-50"
                        onClick={() => setLocationsOpen(false)}
                      >
                        View All Locations →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-x-3">
              
              {/* Search Form - Now Redirects to Apply */}
              <form onSubmit={handleSearch} className="relative w-36 xl:w-44">
                <input 
                  type="text" 
                  placeholder="Search Jobs" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-slate-300 rounded-3xl pl-9 py-2 text-sm focus:outline-none focus:border-[#00C9A7]" 
                />
                <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm">🔍</span>
              </form>

              {/* Phone */}
              <a href="tel:6476326464" className="flex items-center gap-x-2 text-sm font-medium hover:text-[#00C9A7] transition-colors">
                📞 647-632-6464
              </a>

              {/* CTA Buttons */}
              <Link href="/hire-staff" className="px-6 py-2.5 bg-[#0A2540] text-white text-sm font-semibold rounded-3xl hover:bg-black transition-all">
                Post a Job
              </Link>
              <Link href="/apply" className="px-6 py-2.5 border border-slate-300 text-sm font-semibold rounded-3xl hover:bg-slate-50 transition-all">
                Find Work
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t">
              <div className="flex flex-col gap-y-4 text-sm font-medium">
                <Link href="/services">Services</Link>
                <Link href="/employers">For Employers</Link>
                <Link href="/job-seekers">For Job Seekers</Link>
                <Link href="/how-we-work">How We Work</Link>
                <Link href="/locations">All Locations</Link>

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