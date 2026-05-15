import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Terms of Service | Western Jobs",
  description: "Western Jobs terms of service. Read our terms and conditions for using our staffing and recruitment services across Ontario.",
  alternates: { canonical: "https://www.westernjobs.ca/terms" },
}

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LEGAL</div>
            <h1 className="section-header mt-3 text-white">Terms of Service</h1>
            <p className="mt-4 text-white/70">Last updated: January 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to terms</h2>
            <p className="text-slate-600 leading-relaxed">By accessing or using the Western Jobs website at www.westernjobs.ca or any of our staffing and recruitment services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.</p>
            <p className="text-slate-600 leading-relaxed mt-3">These terms apply to all visitors, job seekers, and employer clients who access or use our services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Our services</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Western Jobs Inc. provides staffing and recruitment services including:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Temporary, permanent, temp-to-perm, and contract staffing placements</li>
              <li>Candidate sourcing, screening, and placement coordination</li>
              <li>Payroll and employment administration for temporary workers</li>
              <li>Workforce planning and recruitment consulting</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. For job seekers</h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Our services are provided to job seekers at no cost. We do not charge fees to candidates for finding employment.</li>
              <li>You must be legally eligible to work in Canada to use our job placement services.</li>
              <li>You agree to provide accurate, complete, and truthful information in your resume and communications with us.</li>
              <li>Misrepresentation of qualifications, experience, or work eligibility may result in termination of placement and removal from our candidate database.</li>
              <li>Western Jobs acts as the employer of record during temporary placements. You are expected to comply with all workplace policies of the client employer during your assignment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. For employers</h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Employer clients agree to the specific terms outlined in their staffing service agreement with Western Jobs.</li>
              <li>Employers must provide a safe working environment compliant with the Ontario Occupational Health and Safety Act for all placed workers.</li>
              <li>Direct hiring of Western Jobs temporary workers outside of the agreed temp-to-perm conversion process may be subject to a placement fee as outlined in your service agreement.</li>
              <li>Employers agree to provide accurate job descriptions and workplace information to ensure appropriate candidate matching.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Website use</h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>You may use our website for lawful purposes only.</li>
              <li>You may not scrape, copy, or reproduce any content from our website without written permission.</li>
              <li>You may not use our website to transmit spam, malware, or any harmful content.</li>
              <li>We reserve the right to restrict access to our website at our discretion.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual property</h2>
            <p className="text-slate-600 leading-relaxed">All content on the Western Jobs website — including text, images, logos, and design — is the property of Western Jobs Inc. and protected by Canadian copyright law. You may not reproduce or distribute any content without our written consent.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of liability</h2>
            <p className="text-slate-600 leading-relaxed">Western Jobs makes reasonable efforts to provide accurate information and quality placements, but we do not guarantee employment outcomes or the suitability of any particular candidate or employer. To the maximum extent permitted by Ontario law, Western Jobs shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or website.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing law</h2>
            <p className="text-slate-600 leading-relaxed">These Terms of Service are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to these terms</h2>
            <p className="text-slate-600 leading-relaxed">We may update these terms from time to time. We will post the updated terms on this page with a revised date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact us</h2>
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