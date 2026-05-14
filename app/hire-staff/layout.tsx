import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Hire Staff in Ontario | Request Staffing | Western Jobs",
  description: "Request staffing support from Western Jobs. We provide temporary, permanent, and contract workers across Toronto, Mississauga, Brampton, Vaughan and the GTA within 48 hours.",
  alternates: { canonical: "https://westernjobs.ca/hire-staff" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}