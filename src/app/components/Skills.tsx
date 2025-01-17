export default function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Git']

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white px-4 py-2 rounded-md shadow-sm text-center text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

