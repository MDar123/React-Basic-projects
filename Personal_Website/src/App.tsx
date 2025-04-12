import { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import Sidebar from "./components/Sidebar"
import AppRoutes from "./routes/AppRoutes"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <Router>
      <div className="flex min-h-screen bg-[#0d1224]">
        <div className="lg:fixed lg:h-full">
          <Sidebar />
        </div>
        <main className="flex-1 p-4 lg:ml-[250px] sm:p-6 lg:p-8 overflow-x-hidden">
          <AppRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
