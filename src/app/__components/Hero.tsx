import { FilePresent, GitHub, Instagram, PinDrop } from "@mui/icons-material";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

export default function Hero() {
  return (
    <section 
      className="relative border-b border-gray-200"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)
        `,
      }}
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row max-w-screen-md mx-auto">
          <div className="mx-auto sm:my-auto text-gray-600">
            <h1 
              className="common-title text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl"
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
                `
              }}
            >
              Ville Strengell
            </h1>
            <p className="mt-2 flex gap-1 items-center text-left text-base text-gray-500 hover:text-red-500 transition-colors cursor-default">
              <PinDrop className="text-sm " />Espoo, Finland
            </p>
            <p className="mt-6 text-xl text-left text-balance leading-relaxed">
              <span className="hover:text-blue-600 transition-colors cursor-default">Full-Stack Developer</span> |  
              <span className="hover:text-emerald-600 transition-colors cursor-default"> Problem Solver</span> |
              <span className="hover:text-purple-600 transition-colors cursor-default"> Open to new opportunities</span>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex gap-3">
                <Link
                  href="https://instagram.com/villestrengell"
                  target="_blank"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://github.com/strengv1"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                >
                  <GitHub />
                </Link>
                <Tooltip title="Download My CV" arrow>
                  <Link 
                    href="/ville_strengell_cv_2025.pdf" 
                    download
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FilePresent />
                  </Link>
                </Tooltip>
              </div>
              <a 
                href="mailto:ville.strengell@pionblanc.fi"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                ville.strengell@pionblanc.fi
              </a>
            </div>
          </div>
          <img
            src="/me.jpg"
            alt="Ville Strengell"
            width={250}
            height={250}
            className="mx-auto rounded-full mt-6 sm:mt-0 shadow-lg ring-4 ring-white ring-opacity-50"
          />
        </div>
        <div className="mt-12 max-w-screen-md mx-auto text-left space-y-6">
          <p className="text-lg text-gray-700 leading-7">
            Hey! I am a Full-Stack Web Developer looking for work.
          </p>
          <p className="text-lg text-gray-700 leading-7">
            I recently graduated from Aalto University School of Electrical Engineering, where I majored in Automation and minored in Computer Science.
          </p>
          <p className="text-lg text-gray-700 leading-7">
            I&apos;m also a Co-Founder in an active startup Pion Blanc Oy, where we build tailored software for small businesses. More info on Projects-section.
          </p>
        </div>
      </div>
    </section>
  )
}