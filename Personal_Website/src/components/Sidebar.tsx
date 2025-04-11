import { Link, useLocation } from "react-router-dom"
import { Home, User, Briefcase, Code, GraduationCap, Mail, Layers } from "lucide-react"

const Sidebar = () => {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/skills", label: "Skills", icon: Layers },
    { path: "/education", label: "Education", icon: GraduationCap },
    { path: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation (YouTube-style) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0d37] border-t border-[#1a1443] z-50 md:hidden">
        <nav className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "text-pink-500" : "text-gray-300"
                }`}
              >
                <Icon size={20} />
                {/* Hide text labels on very small screens */}
                <span className="text-[10px] mt-1 hidden xs:block">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden md:flex w-[280px] h-full bg-[#0a0d37] text-white p-6 flex-col">
        <div className="mb-8 flex justify-center">
          <h1 className="text-2xl font-bold text-pink-500">Mujtaba Dar</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-[#1a1443] ${
                      isActive ? "bg-[#1a1443] text-pink-500" : "text-gray-300"
                    }`}
                  >
                    <Icon size={24} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t border-[#1a1443]">
          <p className="text-sm text-gray-400 text-center">&copy; 2024 Mujtaba Dar</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
