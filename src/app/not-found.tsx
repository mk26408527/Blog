/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="mb-8 text-center max-w-lg">
        The page you're looking for doesn't exist or has been moved. Please check the URL or head back to the homepage.
      </p>
      <Link className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700" href="/">
          Go to Homepage
      </Link>
    </div>
  );
}
