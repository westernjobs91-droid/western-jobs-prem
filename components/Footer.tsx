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
                src="/logo-white.png"
                alt="Western Jobs" 
                className="h-10 w-auto" 
              />
              <div>
                <div className="font-bold text-2xl tracking-tighter text-white">Western Jobs</div>
                <div className="text-[10px] text-[#00C9A7] tracking-[1.5px] -mt-1">PREMIUM STAFFING</div>
              </div>
            </div>
            
            <div className="mt-6 text-sm max-w-xs text-white/60">
              Ontario's most trusted premium recruitment partner since 2018. Serving employers and job seekers across the GTA and beyond.
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-x-2">
                <i className="fa-solid fa-phone text-[#00C9A7] text-xs"></i>
                <a href="tel:2266977800" className="hover:text-white transition-colors">226-697-7800</a>
              </div>
              <div className="flex items-center gap-x-2">
                <i className="fa-solid fa-envelope text-[#00C9A7] text-xs"></i>
                <a href="mailto:hr@westernjobs.ca" className="hover:text-white transition-colors">hr@westernjobs.ca</a>
              </div>
              <div className="flex items-center gap-x-2">
                <i className="fa-solid fa-location-dot text-[#00C9A7] text-xs"></i>
                <span>6660 Kennedy Rd, Suite 201, Mississauga ON</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex gap-x-3">
              {/* Company LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/western-jobs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 px-4 py-2 border border-white/20 rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all text-xs"
                aria-label="Western Jobs on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-[#0A66C2]"></i>
                <span className="text-white/60">Company</span>
              </a>
              {/* Personal LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jey-singh-b5a630315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 px-4 py-2 border border-white/20 rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all text-xs"
                aria-label="Jey Singh on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-[#0A66C2]"></i>
                <span className="text-white/60">Founder</span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">COMPANY</div>
            <div className="space-y-[13px]">
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/how-we-work" className="block hover:text-white transition-colors">How We Work</Link>
              <Link href="/industries" className="block hover:text-white transition-colors">Industries</Link>
              <Link href="/locations" className="block hover:text-white transition-colors">All Locations</Link>
              <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* For Employers */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">FOR EMPLOYERS</div>
            <div className="space-y-[13px]">
              <Link href="/employers" className="block hover:text-white transition-colors">Hire Staff</Link>
              <Link href="/hire-staff" className="block hover:text-white transition-colors">Request Staffing</Link>
              <Link href="/services" className="block hover:text-white transition-colors">Our Services</Link>
              <Link href="/automotive-staffing-ontario" className="block hover:text-white transition-colors">Auto Sector Staffing</Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">FOR JOB SEEKERS</div>
            <div className="space-y-[13px]">
              <Link href="/job-seekers" className="block hover:text-white transition-colors">Find Work</Link>
              <Link href="/apply" className="block hover:text-white transition-colors">Apply Now</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
              <Link href="/blog/best-industries-find-work-gta-2025" className="block hover:text-white transition-colors">Best Industries 2025</Link>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <div className="font-semibold text-white text-xs tracking-widest mb-4">LOCATIONS</div>
            <div className="grid grid-cols-2 gap-x-4 text-sm">
              <div className="space-y-[10px]">
                <Link href="/toronto" className="block hover:text-white transition-colors">Toronto</Link>
                <Link href="/mississauga" className="block hover:text-white transition-colors">Mississauga</Link>
                <Link href="/brampton" className="block hover:text-white transition-colors">Brampton</Link>
                <Link href="/hamilton" className="block hover:text-white transition-colors">Hamilton</Link>
                <Link href="/vaughan" className="block hover:text-white transition-colors">Vaughan</Link>
              </div>
              <div className="space-y-[10px]">
                <Link href="/oshawa" className="block hover:text-white transition-colors">Oshawa</Link>
                <Link href="/cambridge" className="block hover:text-white transition-colors">Cambridge</Link>
                <Link href="/london" className="block hover:text-white transition-colors">London</Link>
                <Link href="/windsor" className="block hover:text-white transition-colors">Windsor</Link>
                <Link href="/locations" className="block text-[#00C9A7] hover:text-white transition-colors">View All →</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs">
          <div>© 2026 Western Jobs Inc. All rights reserved. Proudly Canadian 🍁</div>
          <div className="flex gap-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}