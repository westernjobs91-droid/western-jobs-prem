'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModal } from '@/app/context/ModalContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const { openContact } = useModal()

  const locations = [
    { name: "Toronto", path: "/toronto" },
    { name: "Mississauga", path: "/mississauga" },
    { name: "Brampton", path: "/brampton" },
    { name: "Hamilton", path: "/hamilton" },
    { name: "Vaughan", path: "/vaughan" },
    { name: "Markham", path: "/markham" },
    { name: "Richmond Hill", path: "/richmond-hill" },
    { name: "Newmarket", path: "/newmarket" },
    { name: "Oshawa", path: "/oshawa" },
    { name: "Ajax", path: "/ajax" },
    { name: "Cambridge", path: "/cambridge" },
    { name: "Kitchener", path: "/kitchener" },
    { name: "Burlington", path: "/burlington" },
    { name: "London", path: "/london" },
    { name: "Windsor", path: "/windsor" },
    { name: "Woodstock", path: "/woodstock" },
    { name: "St. Thomas", path: "/st-thomas" },
    { name: "Tilsonburg", path: "/tilsonburg" },
    { name: "Ingersoll", path: "/ingersoll" },
    { name: "Alliston", path: "/alliston" },
  ]

  const industries = [
    { name: "Manufacturing", path: "/manufacturing-staffing-ontario" },
    { name: "Warehousing & Distribution", path: "/warehouse-staffing-ontario" },
    { name: "Automotive Sector", path: "/automotive-staffing-ontario" },
    { name: "Logistics & Supply Chain", path: "/logistics-staffing-ontario" },
    { name: "Administrative & Office", path: "/administrative-staffing-ontario" },
    { name: "Finance & Accounting", path: "/finance-staffing-ontario" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim() !== "") {
      router.push('/apply')
    }
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#0A2540] text-white/90 text-xs py-2.5 hidden md:block">
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <i className="fa-solid fa-globe text-[#00C9A7]"></i>
              <span className="font-medium">Serving all of Ontario</span>
            </div>
            <div className="text-white/50">|</div>
            <div className="font-medium">24/7 Emergency Staffing Available</div>
          </div>
          <a
            href="tel:2266977800"
            className="flex items-center gap-x-2 font-semibold text-white hover:text-[#00C9A7] transition-colors"
          >
            <i className="fa-solid fa-phone text-[#00C9A7]"></i>
            226-697-7800
          </a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-x-2 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Western Jobs"
                className="h-9 md:h-11 w-auto"
              />
              <div className="flex flex-col justify-center">
                <div className="font-bold text-lg md:text-[20px] tracking-[-0.3px] text-[#0A2540] leading-none">
                  Western Jobs
                </div>
                <div className="text-[8px] md:text-[9px] text-[#00C9A7] tracking-[2px] font-medium">
                  PREMIUM STAFFING
                </div>
              </div>
            </Link>

            {/* Desktop Menu — shows at lg (1024px+) */}
            <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6 text-[13px] font-medium flex-1 justify-center">
              <Link href="/services" className="hover:text-[#00C9A7] transition-colors whitespace-nowrap">Services</Link>
              <Link href="/employers" className="hover:text-[#00C9A7] transition-colors whitespace-nowrap">For Employers</Link>
              <Link href="/job-seekers" className="hover:text-[#00C9A7] transition-colors whitespace-nowrap">For Job Seekers</Link>
              <Link href="/how-we-work" className="hover:text-[#00C9A7] transition-colors whitespace-nowrap">How We Work</Link>

              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIndustriesOpen(!industriesOpen)
                    setLocationsOpen(false)
                  }}
                  className="flex items-center gap-x-1 hover:text-[#00C9A7] transition-colors whitespace-nowrap"
                >
                  Industries <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                </button>
                {industriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50">
                    {industries.map((ind, index) => (
                      <Link
                        key={index}
                        href={ind.path}
                        className="px-5 py-2.5 text-sm hover:bg-slate-50 transition-colors block"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {ind.name}
                      </Link>
                    ))}
                    <div className="border-t my-1"></div>
                    <Link
                      href="/industries"
                      className="px-5 py-2.5 text-sm font-semibold text-[#00C9A7] hover:bg-slate-50 block"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      View All Industries →
                    </Link>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setLocationsOpen(!locationsOpen)
                    setIndustriesOpen(false)
                  }}
                  className="flex items-center gap-x-1 hover:text-[#00C9A7] transition-colors whitespace-nowrap"
                >
                  Locations <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                </button>
                {locationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 max-h-96 overflow-y-auto">
                    {locations.map((loc, index) => (
                      <Link
                        key={index}
                        href={loc.path}
                        className="px-5 py-2.5 text-sm hover:bg-slate-50 transition-colors block"
                        onClick={() => setLocationsOpen(false)}
                      >
                        {loc.name}
                      </Link>
                    ))}
                    <div className="border-t my-1"></div>
                    <Link
                      href="/locations"
                      className="px-5 py-2.5 text-sm font-semibold text-[#00C9A7] hover:bg-slate-50 block"
                      onClick={() => setLocationsOpen(false)}
                    >
                      View All Locations →
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog" className="hover:text-[#00C9A7] transition-colors whitespace-nowrap">Blog</Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-x-2 flex-shrink-0">
              {/* Search — only on xl screens */}
              <form onSubmit={handleSearch} className="relative w-32 hidden xl:block">
                <input
                  type="text"
                  placeholder="Search Jobs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-slate-300 rounded-3xl pl-8 py-2 text-xs focus:outline-none focus:border-[#00C9A7]"
                />
                <span className="absolute left-3 top-2 text-slate-400 text-xs">🔍</span>
              </form>

              <Link href="/hire-staff" className="px-4 xl:px-6 py-2.5 bg-[#0A2540] text-white text-xs xl:text-sm font-semibold rounded-3xl hover:bg-black transition-all whitespace-nowrap">
                Post a Job
              </Link>
              <Link href="/apply" className="px-4 xl:px-6 py-2.5 border border-slate-300 text-xs xl:text-sm font-semibold rounded-3xl hover:bg-slate-50 transition-all whitespace-nowrap">
                Find Work
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl p-2">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t">
              <div className="flex flex-col gap-y-4 text-sm font-medium">
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/employers" onClick={() => setIsOpen(false)}>For Employers</Link>
                <Link href="/job-seekers" onClick={() => setIsOpen(false)}>For Job Seekers</Link>
                <Link href="/how-we-work" onClick={() => setIsOpen(false)}>How We Work</Link>

                <div className="text-xs font-bold tracking-widest text-slate-400 mt-1">INDUSTRIES</div>
                {industries.map((ind, i) => (
                  <Link key={i} href={ind.path} onClick={() => setIsOpen(false)} className="pl-2 text-slate-700">
                    {ind.name}
                  </Link>
                ))}
                <Link href="/industries" onClick={() => setIsOpen(false)} className="pl-2 text-[#00C9A7] font-semibold">
                  All Industries →
                </Link>

                <Link href="/locations" onClick={() => setIsOpen(false)}>All Locations</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>

                <a href="tel:2266977800" onClick={() => setIsOpen(false)} className="flex items-center gap-x-2 text-slate-700">
                  <i className="fa-solid fa-phone text-[#00C9A7]"></i>
                  226-697-7800
                </a>

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