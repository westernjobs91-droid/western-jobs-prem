import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Apply for Jobs in Ontario | Submit Your Resume | Western Jobs",
  description: "Submit your resume to Western Jobs and get matched with temporary, permanent, and contract roles across Toronto, Mississauga, Brampton, Vaughan and the GTA. Response within 48 hours.",
  alternates: { canonical: "https://www.westernjobs.ca/apply" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}