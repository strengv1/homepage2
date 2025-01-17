export default function Workexperience() {
  
  const parentDivClasses = "mb-8 max-w-4xl mx-auto"
  return (
    <div id="workexperience" className="bg-gray-100 border-b-gray-300 border-b">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left text-black">
          <h2 className="text-3xl font-extrabold text-gray-900">Work Experience</h2>

          {/* Pion Blanc */}
          <div className="my-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold">November 2024 - Present</h3>
            <p className="text-lg">Founder | Pion Blanc Oy</p>
            <ul className="list-disc ml-5">
              <li>A startup with friends.</li>
              <li>Product is an Offer generator, more info in projects-section</li>
            </ul>
          </div>

          {/* Aalto yliopisto */}
          <div className={parentDivClasses}>
            <h3 className="text-xl font-bold">April 2024 - September 2024</h3>
            <p className="text-lg">Research Assistant | Aalto Yliopisto</p>
            <ul className="list-disc ml-5">
              <li>Master&apos;s thesis position.</li>
              <li>Worked together with Semantum Oy, Stora Enso, and Aalto yliopisto to develop a data portal for sharing LCA data.</li>
            </ul>
          </div>

          {/* Polycon Oy */}
          <div className={parentDivClasses}>
            <h3 className="text-xl font-bold">March 2020 - February 2023</h3>
            <p className="text-lg">Software Developer | Polycon Oy</p>
            <ul className="list-disc ml-5">
              <li>Developed Polycon's flagship product, Effector desktop version, and the palse.fi web portal for citizens and businesses. Worked on both server-side and client-side functionalities.</li>
              <li>Maintained existing codebase and developed new sections and extensions.</li>
            </ul>
          </div>

          {/* Gemalto Oy */}
          <div className={parentDivClasses}>
            <h3 className="text-xl font-bold">June 2019 - September 2019</h3>
            <p className="text-lg">Production Worker | Gemalto Oy</p>
            <ul className="list-disc ml-5">
              <li>Summer job in a passport factory, where security and employee reliability were of utmost importance. Worked as an operator.</li>
            </ul>
          </div>

          {/* Military Service */}
          <div className={parentDivClasses}>
            <h3 className="text-xl font-bold">June 2017 - December 2017</h3>
            <p className="text-lg">Military Service</p>
          </div>

          {/* References */}
          <div className="mb-8 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold">References</h3>
            <p className="text-lg">Sanna Huhtala, Supervisor at Polycon</p>
            <p className="text-lg">Email: <a href="mailto:sanna.huhtala@polycon.fi">sanna.huhtala@polycon.fi</a></p>
            <p className="mt-2 text-md italic">“Ville has been careful in his work, documented his actions well, and communicated the results clearly. Cooperation with different parties and stakeholders has always been smooth. Ville has shown a willingness and ability to understand the bigger picture and the product’s usability to develop it in the desired direction.”</p>

          </div>
        </div>
      </div>
    </div>
  )
}


