import Link from 'next/link'
import Image from 'next/image'
import { fetchRssFeed } from '@/utils/fetchRss'

interface Story {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  date: string
  link: string
}

export default async function TrendingStories() {
  const stories = await fetchRssFeed() as Story[]

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Trending in Sports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <Link 
            key={story.id}
            href={story.link}
            className="group"
          >
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                  {story.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {story.description}
                </p>
                <time className="block mt-4 text-sm text-gray-500">
                  {story.date}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
} 