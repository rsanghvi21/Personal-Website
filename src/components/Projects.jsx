import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'AI', 'Robotics', 'Web App', 'Leadership']

  const projects = [
    {
      id: 1,
      title: 'AI Email Agent',
      description: 'Built a context-aware Gmail reply assistant using OpenAI and Google OAuth for secure, personalized communication with enhanced tone and relevance.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop',
      technologies: ['OpenAI', 'Google OAuth', 'Gmail API', 'Python'],
      category: 'AI',
      github: 'https://github.com/rsanghvi21',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'AI News Update Agent',
      description: 'Developed a Twilio-powered SMS agent delivering real-time AI-generated news summaries using a custom Model Context Protocol (MCP).',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Twilio', 'AI/ML', 'MCP'],
      category: 'AI',
      github: 'https://github.com/rsanghvi21',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'FEH Robotic Project',
      description: 'Designed and prototyped modular robotic components with 3D-printed parts using OnShape, PrusaSlicer, and OSU Proteus API in C++.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['C++', 'OnShape', 'PrusaSlicer', '3D Printing', 'CAD'],
      category: 'Robotics',
      github: 'https://github.com/rsanghvi21',
      demo: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'STEMstangs Nonprofit',
      description: 'Co-founded a 501(c)(3) nonprofit organization that raised over $30K for STEM programs and community outreach.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['Leadership', 'Fundraising', 'Community Outreach', 'STEM Education'],
      category: 'Leadership',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'FIRST Tech Challenge Robot',
      description: 'Led robot design and programming for a 9-member team, advancing to state-level competitions over 7 years.',
      image: '/First-Tech-Challenge-Logo-Vector.svg--68194893.png',
      technologies: ['Java', 'Android Studio', 'CAD', 'Team Leadership'],
      category: 'Robotics',
      github: 'https://github.com/rsanghvi21',
      demo: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React.js, featuring dark theme with purple accents and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'Web App',
      github: 'https://github.com/rsanghvi21',
      demo: '#',
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                    : 'glass-morphism text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="card h-full p-0 overflow-hidden">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                      >
                        <Eye size={20} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-morphism rounded-full text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-400 font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 