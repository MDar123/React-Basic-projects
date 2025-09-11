import  { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import { Plus, ExternalLink } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const projects = [  
    {
  title: "MovieHub", 
  subtitle: "Responsive Movie Web App",
  description: "A responsive movie web application built with Angular & TypeScript, offering dynamic movie browsing, searching, and filtering with a seamless user experience.",
  image: "https://dl.dropboxusercontent.com/scl/fi/hfmok6l181n9syc8sb9wh/movies_project_angular.png?rlkey=llz2cqomqpgpbq45qh0jizm9d&st=zjitrt1r&dl=0",
  liveLink: "https://e-movie-web-app-henna.vercel.app/",
  techStack: ["Angular", "TypeScript", "RxJS", "Tailwind CSS" ],
  features: [
    "Responsive design with modular Angular components",
    "Seamless navigation using Angular Routing",
    "Dynamic movie fetching, searching, and filtering via RESTful API",
  ],
  heroText: "Discover, search, and explore movies effortlessly with a dynamic and responsive movie web app."
  },
  {
  title: "Fresh Cart", 
  subtitle: "E-Commerce Web App",
  description: "An Angular and TypeScript powered e-commerce platform featuring product listing, cart management, and user authentication, backed by a mock JSON Server API.",
  image: "https://dl.dropboxusercontent.com/scl/fi/37y2df7kxpblhnrg85ife/fresh_cart_angular.png?rlkey=sm05gzsybvhw5m03aku8laa5f&st=0t3wwkqj&dl=0",
  liveLink: "https://fresh-cart-ten-ruddy.vercel.app/",
  techStack: ["Angular", "TypeScript", "RxJS", "JSON Server"],
  features: [
    "User authentication with secure login and signup",
    "Product listing with dynamic filtering and responsive layout",
    "Cart functionality with full CRUD operations",
  ],
  heroText: "Shop smarter with Fresh Cart – a modern e-commerce platform built with Angular and TypeScript."
},

    {
      title: "Resumify",
      subtitle: "AI-Powered Resume Enhancement Platform",
      description: "A comprehensive platform designed for job seekers to create compelling, ATS-optimized resumes. It leverages artificial intelligence to match resume content with job requirements, ensuring maximum compatibility and success rates.",
      image: "https://dl.dropboxusercontent.com/scl/fi/vih2bz6far7u8ef7326p6/Resumify.png?rlkey=gnwd1k2lrsevg8i85t4khrpmk&st=0oanmcm6&dl=0",
      liveLink: "https://resumify-ashen.vercel.app/",
      techStack: ['React', 'Tailwind CSS', 'Gemini API', 'Framer Motion'],
      features: [
        "AI-powered resume analysis and optimization",
        "Real-time job description matching algorithm", 
        "Professional template library with ATS compatibility",
        "Smart keyword extraction and integration"
      ],
      heroText: "Transform your resume with AI-powered optimization that matches job requirements perfectly."
    },
    {
      title: "AI Assistant",
      subtitle: "Intelligent Task Management System", 
      description: "A smart, interactive AI assistant designed to streamline daily tasks and answer queries with precision. This project highlights proficiency in AI integrations and intuitive user experience design.",
      image: "https://dl.dropboxusercontent.com/scl/fi/inyajcsb6pz1k20jaw99h/project-002.png?rlkey=7eprjyb6wpgp41zimlnx0na8l&st=ourukh8i&dl=0",
      liveLink: "https://ai-assistant-eight-gules.vercel.app/",
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
      features: [
        "Natural language processing for task interpretation",
        "Contextual conversation memory and learning",
        "Integration with popular productivity tools",
        "Multi-modal input support (text, voice, images)"
      ],
      heroText: "Intelligent AI assistant that understands context and streamlines your daily workflow efficiently."
    },
    {
      title: "Husky Wears",
      subtitle: "Custom Apparel Manufacturing Platform",
      description: "A comprehensive WordPress-based custom apparel website featuring on-demand design capabilities, mobile responsiveness, secure order processing, and brand-focused design for scalable business growth.",
      image: "https://dl.dropboxusercontent.com/scl/fi/o4kpwledp6jk9w7raek4y/Huskywears-1.png?rlkey=rxqzi0udi4l40qy6cjpihfoba&st=d0zu32p9&dl=0",
      liveLink: "https://huskywears.com/",
      techStack: ['WordPress', 'HTML', 'CSS', 'Elementor'],
      features: [
        "Custom design tool with real-time preview",
        "Automated order processing and inventory management",
        "Mobile-responsive e-commerce experience",
        "Scalable architecture for business growth"
      ],
      heroText: "Custom apparel platform with intuitive design tools and seamless e-commerce integration."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      projects.forEach((project, index) => {
        const projectElement = document.querySelector(`[data-project="${index}"]`);
        
        if (projectElement) {
          ScrollTrigger.create({
            trigger: projectElement,
            start: "top center",
            end: "bottom center",
            onEnter: () => updateContent(index),
            onEnterBack: () => updateContent(index),
          });
        }
      });

      function updateContent(index: number) {
        const project = projects[index];
        
        gsap.to(detailsRef.current, {
          opacity: 0,
          x: 20,
          duration: 0.3,
          onComplete: () => {
            if (detailsRef.current) {
              const titleElement = detailsRef.current.querySelector('.project-title');
              const subtitleElement = detailsRef.current.querySelector('.project-subtitle');
              const descriptionElement = detailsRef.current.querySelector('.project-description');
              const featuresContainer = detailsRef.current.querySelector('.features-container');
              const techStackContainer = detailsRef.current.querySelector('.tech-stack-container');
              const liveLink = detailsRef.current.querySelector('.live-link') as HTMLAnchorElement;
              
              if (titleElement) titleElement.textContent = project.title;
              if (subtitleElement) subtitleElement.textContent = project.subtitle;
              if (descriptionElement) descriptionElement.textContent = project.description;
              if (liveLink) liveLink.href = project.liveLink;
              
              if (featuresContainer) {
                featuresContainer.innerHTML = project.features.map(feature => `
                  <div class="flex items-start gap-3">
                    <div class="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <span class="text-gray-300 text-sm leading-relaxed">${feature}</span>
                  </div>
                `).join('');
              }
              
              if (techStackContainer) {
                techStackContainer.innerHTML = project.techStack.map(tech => `
                  <div class="bg-[#1a1443] border border-[#3a2f6a] rounded-lg px-3 py-2 text-center">
                    <span class="text-gray-300 text-sm font-medium">${tech}</span>
                  </div>
                `).join('');
              }
            }
            
            gsap.to(detailsRef.current, {
              opacity: 1,
              x: 0,
              duration: 0.3
            });
          }
        });
      }

      updateContent(0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen lg:flex">
      
      
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center space-y-16 lg:space-y-32 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project={index}
              className="w-full px-4 min-h-screen flex items-center justify-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-[#1a1443] to-[#2a1f5a] rounded-2xl p-4 lg:p-8
                 shadow-2xl border border-[#3a2f6a] w-full"
              >
                <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
                  
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 lg:mb-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  
                  <div className="lg:hidden space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                      </div>
                      <p className="text-base font-medium text-violet-400 mb-3">{project.subtitle}</p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-3 h-3 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                            <Plus size={8} className="text-white" />
                          </div>
                          <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    
                    <div className="grid grid-cols-2 gap-2">
                      {project.techStack.map((tech, idx) => (
                        <div key={idx} className="bg-[#0a0d37] border border-[#3a2f6a] rounded-lg px-2 py-1 text-center">
                          <span className="text-gray-300 text-xs font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>

                    
                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white hover:opacity-90 transition-all text-xs font-medium"
                      >
                        <ExternalLink size={12} />
                        View Live
                      </a>
                      <button className="px-3 py-2 border border-[#3a2f6a] rounded-lg text-gray-300 hover:text-white hover:border-violet-500 transition-colors text-xs font-medium">
                        View Code
                      </button>
                    </div>
                  </div>
                  
                  
                  <div className="hidden lg:block text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-gray-400">{project.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center mt-8 lg:mt-16 pb-8 lg:pb-16">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
          </div>
        </div>
      </div>

      
      <div className="hidden lg:flex fixed right-0 top-0 h-screen w-1/2 items-start px-6 overflow-y-auto">
        <div ref={detailsRef} className="w-full max-w-md mx-auto pt-20">
          <div className="space-y-6">
            
           
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <h3 className="project-title text-2xl font-bold text-white">Loading...</h3>
              </div>
              <p className="project-subtitle text-lg font-medium text-violet-400 mb-2">Loading...</p>
              <p className="project-description text-gray-300 leading-relaxed mb-6">
                Loading...
              </p>
            </div>

           
            <div className="features-container space-y-3"></div>

            
            <div className="space-y-3">
              <div className="tech-stack-container grid grid-cols-2 gap-2"></div>
            </div>

            
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="live-link flex items-center gap-2 px-4 py-2
                 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white
                  hover:opacity-90 transition-all transform hover:scale-105 text-sm font-medium"
              >
                <ExternalLink size={16} />
                View Live
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
