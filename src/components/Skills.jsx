import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
        { name: 'Python', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
        { name: 'C++', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
        { name: 'C', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
        { name: 'JavaScript', color: 'bg-yellow-400/20 text-yellow-200 border-yellow-400/30' },
        { name: 'C#', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
        { name: 'HTML/CSS', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
        { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
        { name: 'Node.js', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
        { name: 'REST APIs', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
        { name: 'CAD (OnShape)', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
        { name: 'MATLAB', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
        { name: 'Microsoft Office', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
        { name: 'OpenAI API', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
        { name: '3D Printing', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
      ],
    },
  ]

  const technologies = [
    { name: 'Java', icon: '☕', description: 'Programming Language' },
    { name: 'Python', icon: '🐍', description: 'Programming Language' },
    { name: 'React', icon: '⚛️', description: 'Frontend Library' },
    { name: 'OpenAI', icon: '🤖', description: 'AI Platform' },
    { name: 'OnShape', icon: '📐', description: 'CAD Software' },
    { name: 'Git', icon: '📚', description: 'Version Control' },
    { name: 'MATLAB', icon: '📊', description: 'Technical Computing' },
    { name: 'C++', icon: '⚙️', description: 'Programming Language' },
  ]

  return (
    <section id="skills" className="section bg-dark-900/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-default ${skill.color}`}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Technologies I Love Working With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="card text-center group cursor-pointer"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="text-white font-medium text-sm mb-1 group-hover:gradient-text transition-all duration-300">
                  {tech.name}
                </h4>
                <p className="text-gray-400 text-xs">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-morphism rounded-xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">
              Always Learning, Always Growing
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Technology evolves rapidly, and I believe in continuous learning. I'm always 
              exploring new frameworks, tools, and best practices to stay current with 
              industry trends and deliver the best solutions for my projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 