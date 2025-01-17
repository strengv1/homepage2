import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md z-10 sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Ville Strengell
              </Link></span>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/thesis" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Master&apos;s thesis
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}