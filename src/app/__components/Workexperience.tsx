"use client"

import { useState } from "react"

export default function Workexperience() {
  const parentDivClasses = `
    border-y border-y-gray-200 py-4
    hover:translate-x-2 sm:hover:translate-x-2 lg:hover:translate-x-3
    transition-all duration-200 ease-in-out
    hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent
  `
  const companyNameClasses = "text-2xl ml-4 border-l-[3px] border-l-blue-600 pl-2"

  const [yearsBolded, setYearsBolded] = useState<string[]>([""])
  const years = ["Now", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

  const getClass = (year: string) => yearsBolded.includes(year) ? "text-blue-600 font-bold" : "text-gray-500";
  
  return (
    <section 
      id="workexperience" 
      className="relative border-b border-gray-200 bg-white"
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left text-gray-900">
          <h2 
            className="text-3xl font-extrabold mb-8"
            style={{
              backgroundImage: `
                linear-gradient(-75deg,
                  transparent 0,
                  transparent 5%,
                  rgba(255,255,255,0.7) 5%,
                  rgba(255,255,255,0.7) 10%,
                  transparent 10%,
                  transparent 100%
                ),
                linear-gradient(135deg, #374151 0%, #4b5563 50%, #374151 100%)
              `,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Work Experience
          </h2>
          <div className="flex">
            <div className="
                w-fit border-r-2 border-r-blue-600 text-gray-500
                flex flex-col justify-between
                my-4 mr-2 pr-2 sm:pr-4 sm:mr-3 
              "
              style={{ textShadow: "1px 1px rgb(248 250 252 / var(--tw-text-opacity, 1))"}}
            >
              {years.map(year => (
                <div key={year} className={`${getClass(year)} transition-colors duration-200 text-sm font-medium`}>
                  {year}
                </div>
              ))}
            </div>

            <div className="flex-grow max-w-screen-md flex flex-col gap-6 my-4">
              {/* Pion Blanc */}
              <div
                className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2024", "Now"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold text-gray-900">November 2024 - Present <span className={companyNameClasses}>Pion Blanc Oy</span></h3>
                <p className="text-lg text-gray-700 mt-1">Co-Founder, CTO</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
                  <li>Our own company.</li>
                  <li>Main product is an Offer Generator, more info in projects-section</li>
                  <li className="text-emerald-600 font-medium">React, Flask, PostgreSQL, Docker</li>
                </ul>
              </div>

              {/* Aalto university */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2024"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold text-gray-900">April 2024 - September 2024 <span className={companyNameClasses}>Aalto University</span></h3>
                <p className="text-lg text-gray-700 mt-1">Research Assistant</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
                  <li>Master&apos;s thesis position.</li>
                  <li>Worked together with Semantum Oy to develop a data portal for Stora Enso to collect LCA data from it&apos;s suppliers.</li>
                  <li className="text-emerald-600 font-medium">React, Spring Boot, Docker, MongoDB</li>
                </ul>
              </div>

              {/* Polycon Oy */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2020", "2021", "2022", "2023"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold text-gray-900">March 2020 - February 2023 <span className={companyNameClasses}>Polycon Oy</span></h3>
                <p className="text-lg text-gray-700 mt-1">Software Developer</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
                  <li>Developed Polycon&apos;s flagship product, Effector desktop version, and the palse.fi web portal for citizens and businesses. Worked on both server-side and client-side functionalities.</li>
                  <li className="text-emerald-600 font-medium">Delphi, JavaScript, HTML, Vanilla CSS, jQuery</li>
                </ul>
              </div>

              {/* Gemalto Oy */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2019"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold text-gray-900">June 2019 - September 2019  <span className={companyNameClasses}>Gemalto Oy</span></h3>
                <p className="text-lg text-gray-700 mt-1">Production Worker</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
                  <li>Summer job in a passport factory, where security and employee reliability were of utmost importance. Worked as an operator.</li>
                </ul>
              </div>

              {/* Military Service */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2017"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold text-gray-900">June 2017 - December 2017</h3>
                <p className="text-lg text-gray-700 mt-1">Military Service</p>
              </div>
            </div>
          </div>
          
          {/* References */}
          <div className="mt-12 max-w-screen-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">References</h3>
            <div className="bg-gradient-to-r from-blue-50/40 to-purple-50/40 border-l-4 border-l-blue-500 pl-6 py-4 rounded-r-lg">
              <p className="text-lg font-medium text-gray-800">Sanna Huhtala, Supervisor at Polycon</p>
              <p className="text-base text-gray-600">Email: <a href="mailto:sanna.huhtala@polycon.fi" className="text-blue-600 hover:text-blue-800 transition-colors">sanna.huhtala@polycon.fi</a></p>
              <blockquote className="mt-3 text-base italic text-gray-700 leading-relaxed">
                &quot;Ville has been careful in his work, documented his actions well, and communicated the results clearly. Cooperation with different parties and stakeholders has always been smooth. Ville has shown a willingness and ability to understand the bigger picture and the product&apos;s usability to develop it in the desired direction.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}