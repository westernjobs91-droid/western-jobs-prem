import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/75 text-sm pt-16 pb-8">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-y-14">
          
        {/* Logo + About */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-x-3">
              <img 
                src="/logo-white.png"           // ← Use white version here
                alt="Western Jobs" 
                className="h-10 w-auto" 
              />
              <div>
                <div className="font-bold text-2xl tracking-tighter text-white">Western Jobs</div>
                <div className="text-[10px] text-[#00C9A7] tracking-[1.5px] -mt-1">PREMIUM STAFFING</div>
              </div>
            </div>
            
            <div className="mt-6 text-sm max-w-xs text-white/60">
              Ontario’s most trusted premium recruitment partner since 2018.
            </div>
            
            <div className="mt-8 flex gap-x-4">
              <a href="#" className="w-9 h-9 border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/5">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-9 h-9 border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/5">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">COMPANY</div>
            <div className="space-y-[13px]">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/how-we-work" className="block hover:text-white">How We Work</Link>
              <Link href="/industries" className="block hover:text-white">Industries</Link>
              <Link href="/locations" className="block hover:text-white">All Locations</Link>
            </div>
          </div>

          {/* For Employers */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">FOR EMPLOYERS</div>
            <div className="space-y-[13px]">
              <Link href="/employers" className="block hover:text-white">Hire Staff</Link>
              <Link href="/hire-staff" className="block hover:text-white">Request Staffing</Link>
              <Link href="/services" className="block hover:text-white">Our Services</Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">FOR JOB SEEKERS</div>
            <div className="space-y-[13px]">
              <Link href="/job-seekers" className="block hover:text-white">Find Work</Link>
              <Link href="/apply" className="block hover:text-white">Apply Now</Link>
              <Link href="/contact" className="block hover:text-white">Contact Us</Link>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">LOCATIONS</div>
            <div className="grid grid-cols-2 gap-x-4 text-sm">
              <div className="space-y-[10px]">
                <Link href="/toronto" className="block hover:text-white">Toronto</Link>
                <Link href="/mississauga" className="block hover:text-white">Mississauga</Link>
                <Link href="/brampton" className="block hover:text-white">Brampton</Link>
                <Link href="/hamilton" className="block hover:text-white">Hamilton</Link>
                <Link href="/vaughan" className="block hover:text-white">Vaughan</Link>
              </div>
              <div className="space-y-[10px]">
                <Link href="/oshawa" className="block hover:text-white">Oshawa</Link>
                <Link href="/cambridge" className="block hover:text-white">Cambridge</Link>
                <Link href="/london" className="block hover:text-white">London</Link>
                <Link href="/windsor" className="block hover:text-white">Windsor</Link>
                <Link href="/locations" className="block text-[#00C9A7] hover:text-white">View All →</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs">
          <div>© 2026 Western Jobs Inc. All rights reserved. Proudly Canadian.</div>
          <div className="flex gap-x-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}