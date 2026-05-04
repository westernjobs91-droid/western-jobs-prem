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
            <div className="space-y-[13px] text-sm">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
              <a href="#" className="block hover:text-white">Careers</a>
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">RESOURCES</div>
            <div className="space-y-[13px] text-sm">
              <a href="#" className="block hover:text-white">Blog</a>
              <a href="#" className="block hover:text-white">Hiring Guides</a>
              <a href="#" className="block hover:text-white">Salary Reports</a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">CONTACT US</div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-white">Toronto / Mississauga:</span><br />
                6660 Kennedy Rd, Suite 201, Mississauga ON L5T 2M9
              </div>
              <div>
                <span className="font-medium text-white">Phone:</span> <a href="tel:6476326464" className="hover:text-white">226-697-7800</a>
              </div>
              <div>
                <span className="font-medium text-white">Email:</span> <a href="mailto:hr@westernjobs.ca" className="hover:text-white">hr@westernjobs.ca</a>
              </div>
            </div>
            
            <div className="mt-6 text-xs">We typically respond within one business day.</div>
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