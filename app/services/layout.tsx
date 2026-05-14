import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Staffing Services | Temporary, Permanent & Contract | Western Jobs",
  description: "Western Jobs offers temporary, permanent, temp-to-perm, and contract staffing services across Ontario. Flexible solutions for employers and job seekers across the GTA.",
  alternates: { canonical: "https://www.westernjobs.ca/services" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}