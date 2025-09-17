import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { SkillBadge } from "@/components/skill-badge"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative">
      {/* Animated Background Component */}
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative w-48 h-48 mx-auto mb-8">
              {/* Updated Profile Photo */}
              <Image src="/images/andrew-profile.png" alt="Andrew Taslim" fill className="rounded-full object-cover" />
            </div>

            <h1 className="text-4xl font-bold mb-2">Andrew Taslim</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Bina Nusantara Computer Science Student</p>

            <SocialLinks />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* About Me Section */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h2 className="text-xl font-semibold">About Me</h2>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Computer Science student at Binus University with a strong focus on frontend
                  development and programming. I had creating interactive web applications using React.js and building
                  efficient solutions with various programming languages.
                </p>

                <p>
                  My journey in computer science has equipped me with solid foundations in programming fundamentals,
                  data structures, and algorithms. I'm particularly enthusiastic about web development and enjoy turning
                  creative ideas into functional, user-friendly applications.
                </p>

                <p>
                  When I'm not coding, I enjoy seeing new technologies, working on my self development, and
                  continuously agile with the latest trends in software development.
                </p>
              </div>
            </div>

            {/* Education & Skills Section */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h2 className="text-xl font-semibold">Education & Skills</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">School of Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Binus University</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <SkillBadge
                      name="React.js"
                      icon={
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="HTML"
                      icon={
                        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.5 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056zm-3.9492 16.1504c-.5586.7266-1.3477 1.0899-2.3672 1.0899-.7031 0-1.3086-.2344-1.8164-.7031-.5078-.4688-.8203-1.0898-1.0195-1.8633h-1.582v2.4609H7.5v-7.5h1.6992v2.4609h1.582c.1992-.7734.5117-1.3945 1.0195-1.8633.5078-.4687 1.1133-.7031 1.8164-.7031 1.0195 0 1.8086.3633 2.3672 1.0899.5586.7266.8379 1.6406.8379 2.7422 0 1.1016-.2793 2.0156-.8379 2.7422z" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="CSS"
                      icon={
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.5 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.881.721-2.6 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="JavaScript"
                      icon={
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.881.721-2.6 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="Python"
                      icon={
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.27-.36-.35-.35-.47-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16-.36-.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="Java"
                      icon={
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="C"
                      icon={
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.5985 9.1878c-.3834-.4174-.8975-.6259-1.5424-.6259-.6449 0-1.1589.2085-1.5424.6259-.3834.4174-.5751.9508-.5751 1.6003 0 .6495.1917 1.1829.5751 1.6003.3835.4174.8975.6259 1.5424.6259.6449 0 1.159-.2085 1.5424-.6259.3834-.4174.5751-.9508.5751-1.6003 0-.6495-.1917-1.1829-.5751-1.6003zM12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0zm3.9492 16.1504c-.5586.7266-1.3477 1.0899-2.3672 1.0899-.7031 0-1.3086-.2344-1.8164-.7031-.5078-.4688-.8203-1.0898-1.0195-1.8633h-1.582v2.4609H7.5v-7.5h1.6992v2.4609h1.582c.1992-.7734.5117-1.3945 1.0195-1.8633.5078-.4687 1.1133-.7031 1.8164-.7031 1.0195 0 1.8086.3633 2.3672 1.0899.5586.7266.8379 1.6406.8379 2.7422 0 1.1016-.2793 2.0156-.8379 2.7422z" />
                        </svg>
                      }
                    />

                    <SkillBadge
                      name="Git"
                      icon={
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.6-.719.721-1.881.721-2.6 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                        </svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
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
