"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Hospital Appointment Booking App",
      description:
        "Schedule appointments with ease using our user-friendly app. Choose your preferred doctor, select a convenient time, and receive instant confirmation.",
      image: "https://th.bing.com/th/id/R.74de32e14de594ea151e750e8f7edeeb?rik=F9k%2bG4U53IUXHA&pid=ImgRaw&r=0",
      liveLink: "#",
    },
    {
      title: "Quiz App",
      description:
        "Challenge yourself with our interactive quizzes. Choose from various topics and see how well you score!",
      image: "https://user-images.githubusercontent.com/48409548/104132046-a39e5b80-539c-11eb-9df3-28d52e499a6c.png",
      liveLink: "https://quiz-app-flame-one.vercel.app/",
    },
    {
      title: "Student Portal App",
      description:
        "Access grades, assignments, announcements, and more. Stay organized and connected with your school community.",
      image: "https://mnabe.zendesk.com/hc/article_attachments/4406121308941/210730_student_portal_login.jpg",
      liveLink: "https://student-portal-3kgn5iz6f-mujtaba-dars-projects.vercel.app/",
    },
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#0a0d37] rounded-xl overflow-hidden shadow-lg border border-[#1a1443] hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 h-20 sm:h-24 overflow-hidden text-sm sm:text-base">
                  {project.description}
                </p>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  Watch Live
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center my-8 sm:my-12">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Projects
