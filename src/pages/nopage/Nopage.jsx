import { CodepenIcon as ReactIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ReactIcon className="w-24 h-24 text-blue-500 mb-8" aria-hidden="true" />
      <h1 className="text-4xl font-bold mb-4 text-center">Oops! Page Not Found</h1>
      <p className="text-xl mb-8 text-center text-gray-600">
        This is not a correct route. The page you're looking for doesn't exist.
      </p>
      <Link
       to={'/'}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Go back to homepage
      </Link>
    </div>
  )
}

