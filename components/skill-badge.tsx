import type React from "react"

interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 ease-in-out text-sm font-medium shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95">
      <div className="w-4 h-4 flex items-center justify-center transition-transform duration-300 hover:rotate-12">
        {icon}
      </div>
      <span>{name}</span>
    </button>
  )
}
