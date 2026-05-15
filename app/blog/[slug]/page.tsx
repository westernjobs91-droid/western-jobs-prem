import { getPostBySlug, getAllPosts } from '@/app/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-CA', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  const contentHtml = post.content
    .trim()
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="text-xl font-bold mt-8 mb-3 text-slate-800">${line.slice(4)}</h3>`
      if (line.startsWith('> ')) return `<blockquote class="border-l-4 border-[#00C9A7] pl-5 py-1 my-6 text-slate-600 italic bg-emerald-50 rounded-r-xl">${line.slice(2)}</blockquote>`
      if (line.startsWith('- ')) return `<li class="ml-6 mb-2 text-slate-600 list-disc">${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`
      if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold text-slate-800 mt-6 mb-2">${line.slice(2, -2)}</p>`
      if (line === '') return '<br/>'
      return `<p class="text-slate-600 leading-relaxed mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`
    })
    .join('\n')

  return (
    <main className="pt-20">
      <section className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <Link href="/blog" className="text-[#00C9A7] text-sm font-semibold hover:underline">
            ← Back to blog
          </Link>
          <div className="max-w-3xl mt-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold tracking-[1px] px-3 py-1 rounded-full ${
                post.audience === 'employer'
                  ? 'bg-blue-900 text-blue-200'
                  : post.audience === 'jobseeker'
                  ? 'bg-emerald-900 text-emerald-200'
                  : 'bg-purple-900 text-purple-200'
              }`}>
                {post.audience === 'employer' ? 'FOR EMPLOYERS' : post.audience === 'jobseeker' ? 'FOR JOB SEEKERS' : 'FOR EVERYONE'}
              </span>
              <span className="text-white/50 text-sm">{post.readTime}</span>
              <span className="text-white/50 text-sm">{formattedDate}</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="mt-4 text-xl text-white/70">{post.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-16">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="mt-16 bg-[#0A2540] rounded-3xl p-10 text-white text-center">
          <div className="text-xs font-bold tracking-[2px] text-[#00C9A7]">WESTERN JOBS</div>
          <h2 className="mt-3 text-3xl font-bold">Ready to work with us?</h2>
          <p className="mt-4 text-white/70 text-lg">
            Whether you're hiring or job seeking, Western Jobs connects Ontario businesses and candidates fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire-staff"
              className="px-8 py-4 bg-white text-[#0A2540] font-semibold rounded-3xl text-sm hover:bg-slate-100 transition-all"
            >
              Hire Staff
            </Link>
            <Link
              href="/apply"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-3xl text-sm hover:bg-white/10 transition-all"
            >
              Find a Job
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-[#00C9A7] font-semibold hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </section>
    </main>
  )
}