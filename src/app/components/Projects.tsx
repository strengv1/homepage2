import Link from 'next/link'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    link: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    link: 'https://github.com/yourusername/project3',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

