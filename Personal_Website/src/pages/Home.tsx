import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Code2 } from "lucide-react"
import { ButtonProps, SocialLinkProps } from "../types"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-4 lg:py-1 md:ml-0 lg:ml-20">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8 mx-auto container pb-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-1 flex flex-col justify-center p-2 lg:pt-10"
        >
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">Mujtaba Sohail Dar</span>, I'm a Junior{" "}
            <span className="text-[#16f2b3]">Frontend Developer</span>.
          </h1>

          <div className="my-8 md:my-12 flex items-center gap-5">
            <SocialLink href="https://github.com/MDar123" icon={<Github size={30} />} />
            <SocialLink href="https://www.linkedin.com/in/mujtaba-sohail-dar-27937b280" icon={<Linkedin size={30} />} />
            <SocialLink href="https://www.facebook.com/mujtaba.dar.129" icon={<Facebook size={30} />} />
            <SocialLink href="https://leetcode.com/u/ag9oGt3hh8" icon={<Code2 size={30} />} />
          </div>

          <div className="buttons flex gap-2 flex-wrap">
            <Button>
              <Link to="/contact">
              Contact Me
              </Link>
              
              </Button>
            <Button>
              <a href="https://dl.dropboxusercontent.com/scl/fi/9ss1h3j1f35nczoe8kxpl/Mujtaba_dar_Frontend_resume.pdf?rlkey=xc80ci70qsqiel0gfxj5uwhuc&st=fyfloa0s&dl=0" download={'Mujtaba_dar_frontend_resume'} >
              Get Resume
              </a>
              </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"
        >
          <div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">Developer</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">&#123;</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{"'"}</span>
                  <span className="text-amber-300">Mujtaba Sohail Dar</span>
                  <span className="text-gray-400">{"'"},</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className="text-white">skills:</span>
                  <span className="text-gray-400">{"['"}</span>
                  <span className="text-amber-300">Html</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">CSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Javascript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Typescript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Bootstrap</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Tailwindcss</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MaterialUI</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Angular</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Nextjs</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Django</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Firebase</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">&#40;&#41; &#123;</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">&#40;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">&#41;;</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">&#125;;</span>
                </div>
                <div>
                  <span className="text-gray-400">&#125;;</span>
                </div>
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SocialLink = ({ href, icon }:SocialLinkProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all text-pink-500 hover:scale-125 duration-300"
    href={href}
  >
    {icon}
  </a>
)

const Button = ({children }:ButtonProps) => (
  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white hover:scale-105 transition-all duration-300">
    {children}
  </button>
)

export default Home
