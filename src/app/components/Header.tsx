import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Ville Strengell</span>
            </div>
          </div>
          <div className="flex items-center">
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