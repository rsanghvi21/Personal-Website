import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Music, Camera, Gamepad2, Book, Brain, Zap, Monitor } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const interests = [
    { icon: Code, name: 'AI/ML', color: 'text-blue-400' },
    { icon: Coffee, name: 'Robotics', color: 'text-amber-400' },
    { icon: Book, name: 'Philosophy', color: 'text-green-400' },
    { icon: Zap, name: 'Pickleball', color: 'text-purple-400' },
    { icon: Gamepad2, name: 'Tennis', color: 'text-red-400' },
    { icon: Monitor, name: 'TV Shows', color: 'text-indigo-400' },
  ]

  const stats = [
    { number: '2027', label: 'Expected Graduation' },
    { number: '10+', label: 'Projects Completed' },
    { number: '7+', label: 'Years in Robotics' },
    { number: '15+', label: 'Technologies' },
  ]

  return (
    <section id="about" className="section bg-dark-900/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
                         {/* Profile Image */}
             <div className="relative">
               <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 p-1 shadow-2xl">
                 <img
                   src="/Rahul Professional Photo.jpeg"
                   alt="Rahul Sanghvi"
                   className="w-full h-full rounded-2xl object-cover object-top"
                 />
               </div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full blur-2xl opacity-50"></div>
             </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card text-center"
                >
                  <h3 className="text-2xl font-bold gradient-text mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Bio and interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
                         <div>
               <h3 className="text-2xl font-semibold mb-4 text-white">
                 Hi there! I'm Rahul Sanghvi
               </h3>
               <div className="space-y-4 text-gray-400 leading-relaxed">
                 <p>
                   I'm an Honors Computer Science & Engineering student at The Ohio State University, 
                   currently working as a Software Engineering Intern at DXFactor. I'm passionate about 
                   AI, robotics, and building innovative software solutions.
                 </p>
                 <p>
                   My journey in technology started with FIRST Tech Challenge robotics over 7 years ago, 
                   where I've led teams to state-level competitions and co-founded STEMstangs, a 501(c)(3) 
                   nonprofit that raised over $30K for STEM programs.
                 </p>
                 <p>
                   I love working on AI projects like my Gmail reply assistant and news update agent, 
                   combining my technical skills with real-world applications that make a difference 
                   in people's lives.
                 </p>
               </div>
             </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                Things I Love
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="card text-center group cursor-pointer"
                  >
                    <interest.icon 
                      className={`w-8 h-8 mx-auto mb-2 ${interest.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {interest.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 