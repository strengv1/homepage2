import { GitHub, Instagram, PinDrop } from "@mui/icons-material";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white border-b-gray-300 border-b">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row max-w-screen-md mx-auto">
          <div className="mx-auto sm:my-auto text-gray-500">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Ville Strengell
            </h1>
            <p className="mt-1 text-left">
              <PinDrop />Espoo, Finland
            </p>
            <p className="mt-4 text-xl text-left text-balance">
              <span className="hover:text-gray-600">Full-Stack Developer </span> |  
              <span className="hover:text-gray-600"> Problem Solver</span> | 
              <span className="hover:text-gray-600"> Just a chill guy looking for work</span>
            </p>
            <div className="mt-2 flex gap-3">
              <Link
                href="https://instagram.com/villestrengell"
                target="_blank"
              >
                <Instagram color="action" className="hover:text-black"/>
              </Link>
              <Link
                href="https://github.com/strengv1"
                target="_blank"
              >
                <GitHub color="action" className="hover:text-black"/>
              </Link>
              <span className="text-sm self-center hover:text-gray-600">ville.strengell@pionblanc.fi</span>
            </div>
          </div>
          <img
            src="/me.jpg"
            alt="Ville Strengell"
            width={250}
            height={250}
            className="mx-auto rounded-full mt-4 sm:mt-0"
          />
        </div>
        <p className="mt-10 max-w-screen-md mx-auto text-left text-lg text-black">
          Hey! I am a Full-Stack Web Developer looking for work in a company that treats it&apos;s employees as valued individuals and cultivates a sense of community.
        </p>
        <p className="mt-4 max-w-screen-md mx-auto text-left text-lg text-black">
          I recently graduated from Aalto University School of Electrical Engineering, where I majored in Automation and minored in Computer Science.
        </p>
        <p className="mt-4 max-w-screen-md mx-auto text-left text-lg text-black">
          I&apos;m also a founder in an active startup Pion Blanc Oy, where we build tailored software for small businesses. More info on Projects-section.
        </p>
      </div>
    </div>
  )
}

