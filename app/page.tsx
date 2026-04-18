'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex items-center justify-center h-screen">
      <button
        onClick={() => router.push('/dashboard')}
        className="bg-white text-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
      >
        Get Started →
      </button>
    </main>
  )
}