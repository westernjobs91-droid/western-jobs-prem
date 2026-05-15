export default function StatsBar() {
  return (
    <div className="bg-[#0A2540] py-8">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold text-[#00C9A7]">4,800+</div>
            <div className="text-sm text-white/60 mt-1">Placements in 2025</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C9A7]">98.4%</div>
            <div className="text-sm text-white/60 mt-1">Client Retention Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C9A7]">9.2 days</div>
            <div className="text-sm text-white/60 mt-1">Average Days to Hire</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C9A7]">4.98 / 5</div>
            <div className="text-sm text-white/60 mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  )
}