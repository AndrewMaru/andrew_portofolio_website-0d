"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50">
      <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={225}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="text-black-600 dark:text-black-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black bg-transparent"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                Demo
              </Button>
            )}
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Lung Cancer Detection",
      description:
        "An intelligent model that analyzes lifestyle and symptom survey data to support early lung cancer diagnosis.This system provide for early lung cancer detection using survey and symptom-based data analysis.",
      image: "/lung-cancer-diagnosis-interface.png",
      tags: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
      githubUrl: "https://github.com/AndrewMaru/DATATHON_LUNG_CANCER",
      liveUrl: "https://datathonlungcancer.streamlit.app/",
    },
    {
      title: "Risk Obesity Prediction",
      description:
        "An intelligent prediction system that analyzes demographic, lifestyle, and medical factors to assess an individual's risk of developing obesity. The model leverages survey data, health indicators, and behavioral patterns to provide accurate risk estimation.",
      image: "/obesity-prediction-app-interface.png",
      tags: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
      githubUrl: "https://github.com/1msaddd/AOL_ML",
      liveUrl: "https://xsdvxrqjblvgpr4p9xvgnt.streamlit.app/",
    },
    {
      title: "Flancer Website",
      description:
        "A freelancing platform built with TypeScript and React that helps emerging tech talent showcase their skills and get discovered by clients. Features user profiles, service listings, and portfolio building capabilities.",
      image: "/flancer-website-homepage.png",
      tags: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/ranslemus/Flancer",
      liveUrl: "https://flancer-pi.vercel.app/",
    },
    {
      title: "Java Desktop Application",
      description:
        "A feature-rich desktop application built with Java featuring user management system, database integration, and intuitive GUI interface.",
      image: "/java-desktop-application-interface.jpg",
      tags: ["Java", "Swing", "MySQL", "Git"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "C Programming Projects",
      description:
        "A collection of system programming projects including algorithms implementation, data structures, and system-level programming solutions.",
      image: "/programming-code-editor-with-c-language.jpg",
      tags: ["C", "Algorithms", "Linux", "Git"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my studies and personal time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-300 dark:border-gray-800 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex justify-center items-center max-w-6xl mx-auto px-6">
            <p>Andrew Taslim Portfolio 2025</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
