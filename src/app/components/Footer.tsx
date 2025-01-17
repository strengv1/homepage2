export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ville Strengell. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

