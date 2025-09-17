import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-lg text-blue-600 dark:text-blue-400 font-mono">&lt;&gt;</span>
          <span className="font-semibold text-gray-900 dark:text-white">Andrew</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
        >
          Projects
        </Link>
      </div>

      <ThemeToggle />
    </nav>
  )
}
