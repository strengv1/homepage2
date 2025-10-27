"use client"

import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: 'approt.app',
    time: "Ongoing",
    description: `A revitalized web platform for organizing student events, originally abandoned and now under active development.

      My contributions include migrating the backend from Prisma to Drizzle ORM, redesigning the event creation flow for organizers, and improving the site's visuals and responsiveness.`,
    link: 'https://approt.app/',
    target: "_blank",
    images: [
      "/project_images/approkartat_dashboard.jpg",
      "/project_images/approkartat_admin.jpg",    
    ],
    technologies: ["NextJS", "Clerk", "Drizzle ORM", "Postgres", "Docker", "Tailwind", "AWS"]
  },
  {
    title: 'Pion Blanc, Offer Generator',
    time: "Ongoing",
    description: `A startup we're building with a small team. The Offer Generator is aimed at SME's who struggle with creating requests for quotes containing product data from multiple suppliers.

      I've done roughly half of the frontend, migrated the backend from Microsoft SQL Server to Postgres, and dockerized the entirety for easier development and deployment.`,
    link: '',
    target: "_blank",
    images: ["/project_images/tarjousgeneraattori.png"],
    technologies: ["React", "Tailwind", "Flask", "Postgres", "Docker", "Linux Server"]
  },
  {
    title: 'tournaments.unilife.fi',
    time: "2025",
    description: `Serverless tournament management system for organizing Swiss-system and elimination tournaments. Built for occasional use (2-3 times per year) with cost-efficiency in mind.

      Hosted on Vercel + Neon → scale-to-zero benefits of serverless is great for infriquent use.

      Public page (mobile-first): live standings, match info, stats. Fully cached to reduce edge requests and data queries with hundreds of concurrent users.

      Admin dashboard (secure, desktop-first): instant score updates.

      Custom logic for Swiss tie-breaking (modified Buchholz) and fair elimination seeding.`,
    link: 'https://www.unilife.fi/battleroyale',
    target: "_blank",
    images: [
      "/project_images/tournament-standings.png",
      "/project_images/tournament-team.png",      
      "/project_images/tournament-elimination.png",      
      "/project_images/tournament-lobby.png",      
      "/project_images/tournament-score-reporter.png",      
    ],
    technologies: ["NextJS", "Tailwind", "Drizzle", "Vercel", "Serverless", "Neon"]
  },
  {
    title: 'www.unilife.fi',
    time: "2025",
    description: `Website for a company that specializes in student events.

      Design and development by me.`,
    link: 'https://www.unilife.fi/',
    target: "_blank",
    images: [
      "/project_images/unilife_website.png",
      "/project_images/unilife_events.jpg",      
    ],
    technologies: ["NextJS", "Tailwind"]
  },
  {
    title: 'pionblanc.fi',
    time: "2025",
    description: `Our company's website.

      Design and development by me.`,
    link: 'https://pionblanc.fi',
    target: "_blank",
    images: ["/project_images/pionblanc_website.png"],
    technologies: ["NextJS", "Tailwind"]
  },
  {
    title: "LCA Data sharing portal for supply chains",
    time: "2024",
    description: `As a part of my Master's thesis, I developed a data portal in collaboration with Semantum. 
    
      The portal is used by Stora Enso to collect Life Cycle Assessment (LCA) data from pulp suppliers.
      
      More info on chapters 3.3 and 3.4 of my thesis, links below and in the header.`,
    link: "/thesis",
    target: "",
    images: ["/project_images/NetworkLCAPortal.png"],
    technologies: ["React", "Spring Boot", "Docker", "MongoDB"]
  },
  {
    title: "Full Stack Open",
    time: "2023",
    description: `What an eye-opening course. Would recommend to anyone working in the field. Completed parts 1-9.
      
      Raising this to a project status due to it's high relevancy and the fact that I completed most of this outside of my studies.
    `,
    link: "https://fullstackopen.com/",
    target: "_blank",
    images: [],
    technologies: ["React"," Node.js", "MongoDB"]
  },
  {
    title: 'Minesweeper',
    time: "2023",
    description: `My very first own react app: Minesweeper!
      
      Deployed using AWS CDK as an Infrastructure as Code exercise:
      
      Frontend: React SPA deployed to S3 with CloudFront CDN
      Backend: Node.js/Express REST API on AWS Lambda + API Gateway
      Database: MongoDB Atlas
    `,
    link: 'https://dg0fog5qdqniw.cloudfront.net/beginner',
    target: "_blank",
    images: ["/project_images/miinaharava.png"],
    technologies: ["React", "Node.js", "MongoDB", "AWS CDK"]
  },
]

export default function Projects() {
  const [selectedImages, setSelectedImages] = useState<Record<string, number>>({})

  const handleImageClick = (projectTitle: string, imageIndex: number): void => {
    setSelectedImages(prev => ({
      ...prev,
      [projectTitle]: imageIndex
    }))
  }

  return (
    <section 
      id="projects" 
      className="relative border-b border-gray-200 py-16 bg-slate-50"
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Projects
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project) => {
            const currentImageIndex = selectedImages[project.title] || 0
            const currentImage = project.images[currentImageIndex]
            
            return (
              <div key={project.title} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden flex flex-col border border-gray-200/50 hover:border-blue-200">
                {/* Image Section - Natural Height */}
                {project.images.length > 0 && (
                  <div className="relative group">
                    <div className="w-full">
                      {project.link ? (
                        <Link href={project.link} target={project.target} rel="noopener noreferrer">
                          <img
                            className="w-full h-auto object-contain"
                            src={currentImage}
                            alt={`${project.title} preview`}
                          />
                        </Link>
                      ) : (
                        <img
                          className="w-full h-auto object-contain"
                          src={currentImage}
                          alt={`${project.title} preview`}
                        />
                      )}
                    </div>
                    
                    {/* Navigation Arrows - Only show if multiple images */}
                    {project.images.length > 1 && (
                      <>
                        {/* Left Arrow */}
                        <button
                          onClick={() => handleImageClick(
                            project.title, 
                            currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
                          )}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                          </svg>
                        </button>
                        
                        {/* Right Arrow */}
                        <button
                          onClick={() => handleImageClick(
                            project.title, 
                            currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1
                          )}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Navigation Dots - Only show if multiple images */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-1 bg-black bg-opacity-60 rounded-full px-2 py-1">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => handleImageClick(project.title, index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex
                                  ? 'bg-white'
                                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                              }`}
                              aria-label={`View image ${index + 1} of ${project.images.length}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Content Section - Flexible Height */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{project.title}</h3>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full ml-2 whitespace-nowrap font-medium">{project.time}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <p
                      className="text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: project.description.replace(/\n/g, '<br>'),
                      }}
                    />
                  </div>

                  {/* Link Section */}
                  {project.link && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href={project.link}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                        target={project.target}
                        rel="noopener noreferrer"
                      >
                        View Project 
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Technologies Section - Fixed at Bottom */}
                {project.technologies.length > 0 && (
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block text-xs bg-green-50 text-green-700 px-2 py-1 rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}