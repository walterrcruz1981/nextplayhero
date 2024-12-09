'use client'

import Link from 'next/link'
import { useState } from 'react'

const SPORTS_CATEGORIES = [
  { name: 'NFL', path: '/nfl' },
  { name: 'NBA', path: '/nba' },
  { name: 'MLB', path: '/mlb' },
  { name: 'NHL', path: '/nhl' },
  { name: 'Soccer', path: '/soccer' },
  { name: 'NASCAR', path: '/nascar' },
  { name: 'Golf', path: '/golf' },
  { name: 'Tennis', path: '/tennis' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">NextPlayHero</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {SPORTS_CATEGORIES.map((sport) => (
                <Link
                  key={sport.path}
                  href={sport.path}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600"
                >
                  {sport.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {SPORTS_CATEGORIES.map((sport) => (
            <Link
              key={sport.path}
              href={sport.path}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
            >
              {sport.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 