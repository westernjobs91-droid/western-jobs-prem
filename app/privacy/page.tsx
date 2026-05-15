import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Privacy Policy | Western Jobs",
  description: "Western Jobs privacy policy. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy law.",
  alternates: { canonical: "https://www.westernjobs.ca/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LEGAL</div>
            <h1 className="section-header mt-3 text-white">Privacy Policy</h1>
            <p className="mt-4 text-white/70">Last updated: January 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Who we are</h2>
            <p className="text-slate-600 leading-relaxed">Western Jobs Inc. ("Western Jobs," "we," "us," or "our") is a premium staffing and recruitment agency headquartered at 6660 Kennedy Rd, Suite 201, Mississauga, Ontario, L5T 2M9. We operate across Ontario including Toronto, Brampton, Vaughan, Hamilton, London, Windsor, and the Greater Toronto Area.</p>
            <p className="text-slate-600 leading-relaxed mt-3">If you have any questions about this policy, contact us at <a href="mailto:hr@westernjobs.ca" className="text-[#00C9A7] hover:underline">hr@westernjobs.ca</a> or call <a href="tel:2266977800" className="text-[#00C9A7] hover:underline">226-697-7800</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information we collect</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We collect personal information that you provide to us directly, including:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Resume, employment history, and professional qualifications</li>
              <li>Work eligibility and identification documents where required</li>
              <li>References and background check information (with your consent)</li>
              <li>Job preferences, availability, and compensation expectations</li>
              <li>Communications you send us via our website, email, or phone</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">We may also collect information automatically when you visit our website, including IP address, browser type, pages visited, and referring URLs through standard web analytics tools.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How we use your information</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Match job seekers with suitable employment opportunities</li>
              <li>Provide staffing and recruitment services to employer clients</li>
              <li>Communicate with you about placements, job opportunities, and our services</li>
              <li>Process payroll and employment administration for temporary placements</li>
              <li>Comply with legal obligations under Ontario and Canadian law</li>
              <li>Improve our website and services</li>
              <li>Send you relevant updates and job market information (you may opt out at any time)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How we share your information</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li><strong>Employer clients</strong> — with your knowledge and consent, when presenting your profile for job opportunities</li>
              <li><strong>Payroll and HR service providers</strong> — to process employment and tax documentation</li>
              <li><strong>Background check providers</strong> — with your explicit consent</li>
              <li><strong>Legal and regulatory authorities</strong> — when required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your rights under PIPEDA</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario's Employment Standards Act, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for the use of your personal information (subject to legal obligations)</li>
              <li>Request deletion of your information where no legal obligation requires us to retain it</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">To exercise any of these rights, contact us at <a href="mailto:hr@westernjobs.ca" className="text-[#00C9A7] hover:underline">hr@westernjobs.ca</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data retention</h2>
            <p className="text-slate-600 leading-relaxed">We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Candidate profiles are typically retained for up to 3 years from last activity. Payroll and employment records are retained for the period required under the Ontario Employment Standards Act and the Canada Revenue Agency guidelines.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p className="text-slate-600 leading-relaxed">We use appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website uses HTTPS encryption. Access to personal data is restricted to staff who need it to perform their job functions.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies and analytics</h2>
            <p className="text-slate-600 leading-relaxed">Our website uses standard analytics tools to understand how visitors use our site. This may include cookies that collect anonymized usage data. You can disable cookies in your browser settings at any time without affecting your ability to use our site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to this policy</h2>
            <p className="text-slate-600 leading-relaxed">We may update this privacy policy from time to time. We will post the updated policy on this page with a revised date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact us</h2>
            <p className="text-slate-600 leading-relaxed">For any privacy-related questions or requests:</p>
            <div className="mt-4 bg-slate-50 rounded-3xl p-8 space-y-2 text-slate-600">
              <p><strong>Western Jobs Inc.</strong></p>
              <p>6660 Kennedy Rd, Suite 201</p>
              <p>Mississauga, Ontario L5T 2M9</p>
              <p><a href="mailto:hr@westernjobs.ca" className="text-[#00C9A7] hover:underline">hr@westernjobs.ca</a></p>
              <p><a href="tel:2266977800" className="text-[#00C9A7] hover:underline">226-697-7800</a></p>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-[#00C9A7] font-semibold hover:underline">← Back to home</Link>
        </div>
      </section>
    </main>
  )
}