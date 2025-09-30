import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <Image src="/LogoA.png" 
          fill 
          className="rounded-full object-cover" />
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
