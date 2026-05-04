import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "All Locations | Staffing Across Ontario | Western Jobs",
  description: "Find Western Jobs staffing services across Ontario. Serving Toronto, Mississauga, Brampton, Hamilton, Vaughan, Oshawa, Cambridge, London, Windsor and more.",
}

const locations = [
  { name: "Toronto", path: "/toronto" },
  { name: "Mississauga", path: "/mississauga" },
  { name: "Brampton", path: "/brampton" },
  { name: "Hamilton", path: "/hamilton" },
  { name: "Vaughan", path: "/vaughan" },
  { name: "Oshawa", path: "/oshawa" },
  { name: "Cambridge", path: "/cambridge" },
  { name: "London", path: "/london" },
  { name: "Windsor", path: "/windsor" },
  { name: "Woodstock", path: "/woodstock" },
  { name: "St. Thomas", path: "/st-thomas" },
  { name: "Tilsonburg", path: "/tilsonburg" },
  { name: "Ingersoll", path: "/ingersoll" },
  { name: "Alliston", path: "/alliston" },
]

export default function LocationsPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-20 text-white text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">SERVING ALL OF ONTARIO</div>
          <h1 className="section-header mt-3 text-white">Our Locations</h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Western Jobs provides premium staffing services across Ontario.
          </p>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Link 
              key={index} 
              href={location.path}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#00C9A7] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-2xl group-hover:text-[#00C9A7] transition-colors">{location.name}</div>
                  <div className="text-sm text-slate-500 mt-1">View staffing services →</div>
                </div>
                <i className="fa-solid fa-arrow-right text-xl text-slate-300 group-hover:text-[#00C9A7] transition-colors"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}