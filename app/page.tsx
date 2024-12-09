import TrendingStories from '@/components/TrendingStories'
import { Suspense } from 'react'

function LoadingStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="p-4 bg-white rounded-b-lg">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3 mt-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">NextPlayHero</h1>
        <Suspense fallback={<LoadingStories />}>
          <TrendingStories />
        </Suspense>
      </div>
    </main>
  )
} 