import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: "Western Jobs | Staffing Agency Toronto, Mississauga, Brampton, GTA & Ontario",
  description: "Expert temporary, permanent, and contract staffing across the GTA and Ontario. Serving Toronto, Mississauga, Brampton, Vaughan, Hamilton, London, Windsor, Kitchener and the GTA. Fast and reliable hiring support for employers and job seekers across Ontario.",
  icons: {
    icon: "/logo.png",
  },
}

export default function Home() {
  return <HomeContent />
}