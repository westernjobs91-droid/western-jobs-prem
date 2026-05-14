import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Industries We Serve | Staffing Across 47 Sectors | Western Jobs",
  description: "Western Jobs provides staffing solutions across 47 industries in Ontario including manufacturing, logistics, finance, healthcare, retail, administrative and more.",
  alternates: { canonical: "https://www.westernjobs.ca/industries" },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}