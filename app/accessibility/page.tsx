import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Accessibility Statement | Western Jobs",
  description: "Western Jobs accessibility statement. We are committed to making our website and services accessible to all Ontarians in compliance with AODA standards.",
  alternates: { canonical: "https://www.westernjobs.ca/accessibility" },
}

export default function AccessibilityPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">LEGAL</div>
            <h1 className="section-header mt-3 text-white">Accessibility Statement</h1>
            <p className="mt-4 text-white/70">Last updated: January 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our commitment</h2>
            <p className="text-slate-600 leading-relaxed">Western Jobs Inc. is committed to providing a barrier-free environment for all stakeholders, including our clients, job seekers, employees, and visitors. We strive to ensure that our website and services are accessible to people with disabilities in accordance with the Accessibility for Ontarians with Disabilities Act (AODA) and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Accessibility features on our website</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We have implemented the following accessibility features:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600">
              <li>Semantic HTML structure to support screen readers</li>
              <li>Descriptive alt text on all meaningful images</li>
              <li>Sufficient colour contrast between text and backgrounds</li>
              <li>Keyboard navigability throughout the site</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>Clear and plain language throughout our content</li>
              <li>Clearly labelled form fields and interactive elements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">AODA compliance</h2>
            <p className="text-slate-600 leading-relaxed">Western Jobs is committed to meeting the requirements of the AODA, including the Integrated Accessibility Standards Regulation (IASR). This includes our commitments to:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-600 mt-3">
              <li>Providing accessible customer service to all individuals</li>
              <li>Offering accessible formats and communication supports upon request</li>
              <li>Ensuring our recruitment and employment processes are accessible to candidates with disabilities</li>
              <li>Training our staff on accessibility standards and the Human Rights Code</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Requesting accessible formats</h2>
            <p className="text-slate-600 leading-relaxed">If you require any information on our website in an alternative accessible format, or if you need accommodation to access our staffing services, please contact us. We will work with you to provide the information or service in a format that meets your needs in a timely manner.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Known limitations</h2>
            <p className="text-slate-600 leading-relaxed">We are continuously working to improve the accessibility of our website. If you encounter any barriers or have difficulty accessing any part of our site, please let us know so we can address it promptly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Feedback and contact</h2>
            <p className="text-slate-600 leading-relaxed">We welcome your feedback on the accessibility of our website and services. If you experience any barriers or have suggestions for improvement, please contact us:</p>
            <div className="mt-4 bg-slate-50 rounded-3xl p-8 space-y-2 text-slate-600">
              <p><strong>Western Jobs Inc.</strong></p>
              <p>6660 Kennedy Rd, Suite 201</p>
              <p>Mississauga, Ontario L5T 2M9</p>
              <p><a href="mailto:hr@westernjobs.ca" className="text-[#00C9A7] hover:underline">hr@westernjobs.ca</a></p>
              <p><a href="tel:2266977800" className="text-[#00C9A7] hover:underline">226-697-7800</a></p>
            </div>
            <p className="text-slate-600 leading-relaxed mt-4">We commit to responding to accessibility feedback within 5 business days.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Multi-year accessibility plan</h2>
            <p className="text-slate-600 leading-relaxed">As required under the AODA, Western Jobs maintains a multi-year accessibility plan outlining our strategy to prevent and remove barriers. This plan is reviewed and updated annually. A copy of our accessibility plan is available upon request in accessible formats.</p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-[#00C9A7] font-semibold hover:underline">← Back to home</Link>
        </div>
      </section>
    </main>
  )
}