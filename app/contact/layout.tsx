import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Contact Western Jobs | Staffing Agency Ontario",
  description: "Get in touch with Western Jobs. We support employers and job seekers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London and the GTA. Fast response guaranteed.",
  alternates: { canonical: "https://www.westernjobs.ca/contact" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}