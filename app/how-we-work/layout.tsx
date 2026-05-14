import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "How We Work | Our Staffing Process | Western Jobs",
  description: "Learn how Western Jobs connects employers and job seekers across Ontario. Our simple 3-step staffing process delivers pre-screened candidates fast — average 9.2 days to placement.",
  alternates: { canonical: "https://www.westernjobs.ca/how-we-work" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}