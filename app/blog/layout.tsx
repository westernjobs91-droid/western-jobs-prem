import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Staffing & Hiring Blog | Ontario Workforce Insights | Western Jobs",
  description: "Expert hiring tips, staffing guides, and Ontario labour market insights for employers and job seekers across Toronto, Mississauga, Brampton, Vaughan and the GTA.",
  alternates: { canonical: "https://www.westernjobs.ca/blog" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}