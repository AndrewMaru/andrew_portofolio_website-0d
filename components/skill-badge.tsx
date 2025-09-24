import type React from "react"

interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <button className="flex items-center gap-3 px-3 py-2.5 bg-gray-300 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 text-black rounded-lg transition-all duration-300 ease-in-out text-sm font-medium shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95">
      <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-12">
        {icon}
      </div>
      <span>{name}</span>
    </button>
  )
}
