import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Staffing Agency for Employers | Hire Staff Fast | Western Jobs",
  description: "Trusted staffing support for employers across Toronto, Mississauga, Brampton, Vaughan, Hamilton, London and the GTA. Temporary, permanent, and contract staffing solutions. 48-hour fill time.",
  alternates: {
    canonical: "https://westernjobs.ca/employers",
  },
}

export default function EmployersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}