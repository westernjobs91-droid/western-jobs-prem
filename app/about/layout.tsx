import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "About Western Jobs | Ontario Staffing Agency Since 2018",
  description: "Western Jobs is a premium staffing agency founded in 2018, serving employers and job seekers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London and Ontario.",
  alternates: { canonical: "https://westernjobs.ca/about" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}