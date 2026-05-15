import Link from 'next/link'
import { getAllPosts } from '@/app/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-20 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">INSIGHTS & RESOURCES</div>
            <h1 className="section-header mt-3 text-white">
              Staffing insights for Ontario employers and job seekers
            </h1>
            <p className="mt-6 text-xl text-white/80">
              Practical guides on hiring, workforce strategy, and the Ontario labour market — from the Western Jobs team.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white border border-slate-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold tracking-[1px] px-3 py-1 rounded-full ${
                    post.audience === 'employer' 
                      ? 'bg-blue-50 text-blue-700' 
                      : post.audience === 'jobseeker'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-purple-50 text-purple-700'
                  }`}>
                    {post.audience === 'employer' ? 'FOR EMPLOYERS' : post.audience === 'jobseeker' ? 'FOR JOB SEEKERS' : 'FOR EVERYONE'}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00C9A7] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {new Date(post.publishDate).toLocaleDateString('en-CA', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </span>
                  <span className="text-sm font-semibold text-[#00C9A7] group-hover:underline">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}