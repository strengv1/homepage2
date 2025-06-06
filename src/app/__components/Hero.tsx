import { FilePresent, GitHub, Instagram, PinDrop } from "@mui/icons-material";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

export default function Hero() {
  return (
    <section className="bg-white border-b-slate-200 border-b">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row max-w-screen-md mx-auto">
          <div className="mx-auto sm:my-auto text-slate-600">
            <h1 className="common-title text-4xl font-extrabold bg-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Ville Strengell
            </h1>
            <p className="mt-2 flex gap-1 items-center text-left text-base text-slate-500">
              <PinDrop className="text-sm" />Espoo, Finland
            </p>
            <p className="mt-6 text-xl text-left text-balance leading-relaxed">
              <span className="hover:text-slate-700 transition-colors">Full-Stack Developer</span> |  
              <span className="hover:text-slate-700 transition-colors"> Problem Solver</span> |
              <span className="hover:text-slate-700 transition-colors"> Open to new opportunities</span>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex gap-3">
                <Link
                  href="https://instagram.com/villestrengell"
                  target="_blank"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://github.com/strengv1"
                  target="_blank"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <GitHub />
                </Link>
                <Tooltip title="Download My CV" arrow>
                  <Link 
                    href="/ville_strengell_cv_2025.pdf" 
                    download
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    <FilePresent />
                  </Link>
                </Tooltip>
              </div>
              <a 
                href="mailto:ville.strengell@pionblanc.fi"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
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
            className="mx-auto rounded-full mt-6 sm:mt-0 shadow-lg"
          />
        </div>
        <div className="mt-12 max-w-screen-md mx-auto text-left space-y-6">
          <p className="text-lg text-slate-700 leading-7">
            Hey! I am a Full-Stack Web Developer looking for work.
          </p>
          <p className="text-lg text-slate-700 leading-7">
            I recently graduated from Aalto University School of Electrical Engineering, where I majored in Automation and minored in Computer Science.
          </p>
          <p className="text-lg text-slate-700 leading-7">
            I&apos;m also a Co-Founder in an active startup Pion Blanc Oy, where we build tailored software for small businesses. More info on Projects-section.
          </p>
        </div>
      </div>
    </section>
  )
}