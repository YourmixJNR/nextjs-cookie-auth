"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
        <div className="text-7xl mb-4 select-none">🚫</div>
        <h1 className="text-4xl font-bold text-indigo-700 mb-2 text-center">
          404
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
        >
          Go Home
        </Link>
      </div>
      <footer className="mt-10 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} NextJS Cookie Auth
      </footer>
    </div>
  );
}
