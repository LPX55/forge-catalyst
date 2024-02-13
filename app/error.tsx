'use client' // Error components must be Client Components

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div key="1" className="dark bg-[#1a1a1a] h-screen text-gray-200 text-sm xl:text-md">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 text-xs bg-[#1a1a1a]">
          <Header breadcrumbs={["Error", "500"]} />
          <section className="bg-background-secondary">
            <div className="bg-[#1a1a1a] w-full px-16 md:px-0 h-screen flex items-center justify-center">
              <div className="bg-[#1a1a1a] border flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">500</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Server Error</p>
                <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Whoops, something went wrong on our servers.</p>
                {error.digest && <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Error ID: {error.digest}</p>}
              </div>
            </div>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>


          </section>

        </main>
      </div>
    </div>
  )
}