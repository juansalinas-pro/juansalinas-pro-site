import { Metadata } from 'next'
import Header from './../components/Header'
import Footer from './../components/Footer'
import { Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Juan Salinas',
  description: 'Blog page of Juan Salinas, a passionate software engineer. Coming soon.',
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Clock className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Blog Coming Soon
            </h1>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Exciting content is on its way! Check back soon for insightful articles and updates.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}