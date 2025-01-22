import Link from 'next/link'

const projects = [
  {
    title: 'Pion Blanc, Offer generator',
    description: `A startup we're building with a small team. The offer generator is aimed at SME's who struggle with creating requests for quotes containing product data from multiple suppliers.

      I've done roughly half of the frontend, migrated the backend from Microsoft SQL Server to Postgres, and dockerized the entirety for easier development and deployment. I'm also in the middle of building our homepage.`,
    link: '',
    target: "_blank"
  },
  {
    title: "LCA Data sharing portal for supply chains",
    description: `As a part of my Master's thesis, I developed a data portal in collaboration with Semantum. 
    
      The portal is used by Stora Enso to collect Life Cycle Assessment (LCA) data from pulp suppliers.
      
      More info on chapters 3.3 and 3.4 of my thesis, links below and in the header.`,
    link: "/thesis",
    target: ""
  },
  {
    title: "Full Stack Open",
    description: `What an eye-opening course. Would recommend to anyone working on the field. Completed parts 1-9.
      
      Raising this to a project status due to it's high relevancy and the fact that I completed most of this outside of my studies.
    `,
    link: "https://fullstackopen.com/",
    target: "_blank"
  },
  {
    title: 'ProjectHub',
    description: 'A group project for school. A service for showcasing projects. I focused mostly on the frontend.',
    link: 'https://github.com/joelhackinen/projecthub',
    target: "_blank"
  },
  {
    title: 'Minesweeper',
    description: `My very first own react app: Minesweeper!
      Frontend is done with React and database with Node.js
    `,
    link: 'https://github.com/strengv1/minesweeper',
    target: "_blank"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white border-b-gray-300 border-b py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p
                  className="mt-2 text-sm text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(/\n/g, '<br>'),
                  }}
                />
                {project.link && 
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      target={project.target}
                      rel="noopener noreferrer"
                    >
                      View Project &rarr;
                    </Link>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

