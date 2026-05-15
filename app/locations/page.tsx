import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "All Locations | Staffing Across Ontario | Western Jobs",
  description: "Find Western Jobs staffing services across Ontario. Serving Toronto, Mississauga, Brampton, Hamilton, Vaughan, Markham, Richmond Hill, Kitchener, Burlington, Ajax and more.",
  alternates: { canonical: "https://www.westernjobs.ca/locations" },
}

const regions = [
  {
    name: "Greater Toronto Area",
    cities: [
      { name: "Toronto", path: "/toronto", note: "Ontario's largest city" },
      { name: "Mississauga", path: "/mississauga", note: "Largest GTA suburb" },
      { name: "Brampton", path: "/brampton", note: "Manufacturing & logistics hub" },
      { name: "Vaughan", path: "/vaughan", note: "400-series corridor" },
      { name: "Markham", path: "/markham", note: "Tech & corporate hub" },
      { name: "Richmond Hill", path: "/richmond-hill", note: "York Region" },
    ]
  },
  {
    name: "Durham Region & East GTA",
    cities: [
      { name: "Oshawa", path: "/oshawa", note: "GM & automotive" },
      { name: "Ajax", path: "/ajax", note: "Durham Region" },
    ]
  },
  {
    name: "Hamilton & Halton Region",
    cities: [
      { name: "Hamilton", path: "/hamilton", note: "Steel & manufacturing" },
      { name: "Burlington", path: "/burlington", note: "Halton Region" },
    ]
  },
  {
    name: "Waterloo Region",
    cities: [
      { name: "Cambridge", path: "/cambridge", note: "Toyota & automotive" },
      { name: "Kitchener", path: "/kitchener", note: "Kitchener-Waterloo tech corridor" },
    ]
  },
  {
    name: "Southwestern Ontario",
    cities: [
      { name: "London", path: "/london", note: "Regional hub" },
      { name: "Windsor", path: "/windsor", note: "Stellantis & automotive" },
      { name: "Woodstock", path: "/woodstock", note: "Oxford County" },
      { name: "Ingersoll", path: "/ingersoll", note: "CAMI Assembly" },
      { name: "Tilsonburg", path: "/tilsonburg", note: "Magna & Toyota" },
      { name: "St. Thomas", path: "/st-thomas", note: "Elgin County" },
    ]
  },
  {
    name: "Central Ontario",
    cities: [
      { name: "Alliston", path: "/alliston", note: "Honda Canada" },
    ]
  },
]

export default function LocationsPage() {
  return (
    <main className="pt-20">

      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">SERVING ALL OF ONTARIO</div>
          <h1 className="section-header mt-3 text-white">Staffing Across Ontario</h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Western Jobs provides premium staffing services across 19 cities and communities throughout Ontario — from the GTA to southwestern Ontario.
          </p>
          <div className="mt-8 grid grid-cols-3 md:grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { stat: "19+", label: "Cities served" },
              { stat: "48hr", label: "Average fill time" },
              { stat: "98.4%", label: "Retention rate" },
            ].map((item, i) => (
              <div key={i} className="border border-white/20 rounded-2xl px-4 py-4">
                <div className="text-2xl font-bold text-[#00C9A7]">{item.stat}</div>
                <div className="text-xs text-white/60 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="space-y-16">
          {regions.map((region, ri) => (
            <div key={ri}>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-xs font-bold tracking-[2px] text-emerald-600">{region.name.toUpperCase()}</div>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {region.cities.map((city, ci) => (
                  <Link
                    key={ci}
                    href={city.path}
                    className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#00C9A7] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-2xl group-hover:text-[#00C9A7] transition-colors">{city.name}</div>
                        <div className="text-sm text-slate-400 mt-1">{city.note}</div>
                        <div className="text-xs text-slate-400 mt-2">View staffing services →</div>
                      </div>
                      <i className="fa-solid fa-arrow-right text-xl text-slate-300 group-hover:text-[#00C9A7] transition-colors"></i>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">DON&apos;T SEE YOUR CITY?</div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">We serve all of Ontario</h2>
          <p className="mt-4 text-xl text-white/80">
            Even if your city is not listed, Western Jobs can likely help. Contact us and we will let you know what we can do in your area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-staff" className="px-10 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-lg hover:bg-slate-100 transition-all">
              Request Staffing
            </Link>
            <Link href="/contact" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}