import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Staffing Agency Locations Across Ontario | Western Jobs",
  description: "Western Jobs serves employers and job seekers across Ontario including Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor, Cambridge, Oshawa and more.",
  alternates: { canonical: "https://www.westernjobs.ca/locations" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}