"use client"

import { useState } from "react"

export default function Workexperience() {
  const parentDivClasses = `
    border-y border-y-gray-200 py-2
    hover:translate-x-2 sm:hover:translate-x-4 lg:hover:scale-110 lg:hover:translate-x-12
    transition-all
  `
  const companyNameClasses = "text-2xl ml-4 border-l-[3px] border-l-black pl-2"

  const [yearsBolded, setYearsBolded] = useState<string[]>([""])
  const years = ["Now", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

  const getClass = (year: string) => yearsBolded.includes(year) ? "text-black" : "";
  return (
    <div id="workexperience" className="bg-white border-b-gray-300 border-b">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left text-black">
          <h2 className="text-3xl font-extrabold text-gray-900">Work Experience</h2>
          <div className="flex">
            <div className="
                w-fit border-r-2 border-r-black text-gray-400
                flex flex-col justify-between
                my-4 mr-1 pr-1 sm:pr-3 sm:mr-2 
              "
              style={{ textShadow: "1px 1px rgb(234 238 241  / var(--tw-text-opacity, 1))"}}
            >
              {years.map(year => (
                <div key={year} className={getClass(year)}>
                  {year}
                </div>
              ))}
            </div>

            <div className="flex-grow max-w-screen-md flex flex-col gap-8 my-4">
              {/* Pion Blanc */}
              <div
                className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2024", "Now"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold">November 2024 - Present <span className={companyNameClasses}>Pion Blanc Oy</span></h3>
                <p className="text-lg">Co-Founder, CTO</p>
                <ul className="list-disc ml-5">
                  <li>Our own company.</li>
                  <li>Main product is an Offer Generator, more info in projects-section</li>
                  <li>React, Flask, PostgreSQL, Docker</li>
                </ul>
              </div>

              {/* Aalto university */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2024"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold">April 2024 - September 2024 <span className={companyNameClasses}>Aalto University</span></h3>
                <p className="text-lg">Research Assistant</p>
                <ul className="list-disc ml-5">
                  <li>Master&apos;s thesis position.</li>
                  <li>Worked together with Semantum Oy to develop a data portal for Stora Enso to collect LCA data from it&apos;s suppliers.</li>
                  <li>React, Spring Boot, Docker</li>
                </ul>
              </div>

              {/* Polycon Oy */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2020", "2021", "2022", "2023"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold">March 2020 - February 2023 <span className={companyNameClasses}>Polycon Oy</span></h3>
                <p className="text-lg">Software Developer</p>
                <ul className="list-disc ml-5">
                  <li>Developed Polycon&apos;s flagship product, Effector desktop version, and the palse.fi web portal for citizens and businesses. Worked on both server-side and client-side functionalities.</li>
                  <li>Delphi, Vanilla CSS, JavaScript, jQuery</li>
                </ul>
              </div>

              {/* Gemalto Oy */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2019"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold">June 2019 - September 2019  <span className={companyNameClasses}></span>Gemalto Oy</h3>
                <p className="text-lg">Production Worker</p>
                <ul className="list-disc ml-5">
                  <li>Summer job in a passport factory, where security and employee reliability were of utmost importance. Worked as an operator.</li>
                </ul>
              </div>

              {/* Military Service */}
              <div className={parentDivClasses}
                onMouseEnter={() => setYearsBolded(["2017"])}
                onMouseLeave={() => setYearsBolded([""])}
              >
                <h3 className="text-xl font-bold">June 2017 - December 2017</h3>
                <p className="text-lg">Military Service</p>
              </div>
            </div>
          </div>
          {/* References */}
          <div className="mb-8">
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


