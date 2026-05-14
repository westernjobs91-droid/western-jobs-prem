import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Find Jobs in Ontario | Job Seekers | Western Jobs",
  description: "Looking for work in Toronto, Mississauga, Brampton, Vaughan or across Ontario? Western Jobs connects job seekers with temporary, permanent, and temp-to-perm opportunities fast.",
  alternates: { canonical: "https://www.westernjobs.ca/job-seekers" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}