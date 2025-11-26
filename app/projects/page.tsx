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
      <div className="aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out hover:scale-105"
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
                className="text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 ease-in-out"
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
      title: "Portofolio Website",
      description:
        "A modern personal portfolio built with TypeScript and React, showcasing projects, skills, and professional experience in a clean and responsive design.The site leverages component-based architecture for scalability, strong type safety with TypeScript for maintainability, and seamless UI interactions powered by React.",
      image: "/portfolio-website-homepage.png",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/AndrewMaru/andrew_portofolio_website-0d",
      liveUrl: "https://andrewtaslimporto.vercel.app/",
    },
    {
      title: "VKellogg's Website",
      description:
        "A responsive website built using HTML, CSS, and JavaScript with a mobile-first design approach. It offers an engaging user experience across all devices and features sections for products, recipes, and more to showcase content in interactive way.",
      image: "/vkellogs-website-homepage.png",
      tags: ["HTML", "CSS", "JavaScript", "Git"],
      githubUrl: "https://github.com/AndrewMaru/HCI_LAB",
      liveUrl: "https://hci-lab-2-m7qpzll5t-andrewmarus-projects.vercel.app/",
    },
    {
      title: "Dana Kita",
      description:
        "A modern investment platform built with TypeScript and React, enabling investors to fund and support local MSMEs (Micro, Small, and Medium Enterprises). The application features a clean, responsive interface that promotes transparency and accessibility in community-driven investing. With a scalable component-based architecture, strong type safety through TypeScript, and seamless interactivity powered by React, Dana Kita ensures a reliable and engaging experience for both investors and entrepreneurs.",
      image: "/Dana_Kita_Page.png",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/jason32456/dana-kita-connect",
      liveUrl: "https://dana-kita.vercel.app",
    }
    {
      title: "Simple Tic Tac Toe",
      description:
        "A simple tic tac toe game to play",
      image: "/TicTacToe.jpeg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/AndrewMaru/TicTacToe",
      liveUrl: "https://tic-tac-toe28.vercel.app",
    }
    {
      title: "TrainHub",
      description:
        "A Website where you can find your own personal trainer or clients. On Progress..",
      image: "",
      tags: ["TypeScript", "Next.Js", "Supabase", "React", "Tailwind CSS"],
      githubUrl: "",
      liveUrl: "https://v0-personal-trainer-website-kohl.vercel.app/about",
    }
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
