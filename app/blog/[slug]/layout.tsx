import type { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/app/lib/blog'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.westernjobs.ca/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.westernjobs.ca/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}