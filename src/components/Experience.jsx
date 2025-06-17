import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Download } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeTab, setActiveTab] = useState('experience')

  const experiences = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'DXFactor',
      location: 'Tysons, VA',
      period: 'May 2025 - Present',
      type: 'Internship',
      description: 'Assist in developing, testing, and debugging features. Contribute to frontend and/or backend development. Participate in code reviews and team standups.',
      achievements: [
        'Contribute to frontend and backend development projects',
        'Participate in code reviews and team standups',
        'Write technical documentation as needed',
        'Assist in developing, testing, and debugging features'
      ],
      technologies: ['React', 'JavaScript', 'Git', 'Technical Documentation']
    },
    {
      id: 2,
      title: 'Lead Developer and Coach',
      company: 'FIRST Technology Challenge Robotics',
      location: 'Strongsville, OH',
      period: 'July 2018 - Present',
      type: 'Leadership',
      description: 'Led robot design and programming for a 9-member team; advanced to state-level competitions. Selected as a Dean\'s List Semifinalist for leadership and technical impact.',
      achievements: [
        'Led robot design and programming for 9-member team',
        'Advanced to state-level competitions multiple times',
        'Selected as Dean\'s List Semifinalist for leadership',
        'Co-founded STEMstangs, a 501(c)(3) nonprofit',
        'Raised over $30K for STEM programs',
        'Created training modules in Java, CAD, and strategy',
        'Mentored junior team members and led community outreach'
      ],
      technologies: ['Java', 'CAD', 'Android Studio', 'Leadership', 'Team Management']
    },
    {
      id: 3,
      title: 'Electronics Assembler',
      company: 'Darrah Electric Company',
      location: 'Cleveland, OH',
      period: 'May 2024 - August 2024',
      type: 'Internship',
      description: 'Assembled and tested semiconductor components and power supply hardware. Streamlined inventory tracking and assisted in packaging for distribution.',
      achievements: [
        'Assembled and tested semiconductor components',
        'Worked with power supply hardware systems',
        'Streamlined inventory tracking processes',
        'Assisted in packaging for distribution',
        'Maintained high safety and cleanliness standards'
      ],
      technologies: ['Hardware Assembly', 'Quality Control', 'Inventory Management']
    }
  ]

  const education = [
    {
      id: 1,
      title: 'Honors Computer Science and Engineering',
      institution: 'The Ohio State University',
      location: 'Columbus, OH',
      period: 'Present - December 2027',
      grade: 'Expected Graduation: December 2027',
      description: 'Major in Honors Computer Science and Engineering with a Minor in Finance. Active in coursework focused on software development, algorithms, and engineering fundamentals.',
      achievements: [
        'Enrolled in Honors program for Computer Science & Engineering',
        'Pursuing Minor in Finance alongside major',
        'Completed advanced coursework in software development',
        'Active in engineering and computer science communities'
      ]
    },
    {
      id: 2,
      title: 'Relevant Coursework Highlights',
      institution: 'The Ohio State University',
      location: 'Columbus, OH',
      period: 'Ongoing',
      grade: 'Core Computer Science Curriculum',
      description: 'Comprehensive coursework covering fundamental and advanced topics in computer science, mathematics, and engineering.',
      achievements: [
        'Software Components and Software Development & Design',
        'Discrete Structures and Data Structures & Algorithms',
        'Calculus I/II/III and Statistics for Engineers',
        'Fundamentals of Engineering Honors I/II'
      ]
    }
  ]



  const TimelineItem = ({ item, isExperience = true }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-500 to-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute -left-2 top-2 w-4 h-4 bg-primary-500 rounded-full border-2 border-dark-950 shadow-lg"></div>
      
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-primary-400 font-medium mb-2">
              {isExperience ? item.company : item.institution}
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={16} />
              {item.period}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {item.location}
            </div>
          </div>
        </div>
        
        {item.grade && (
          <div className="text-sm text-green-400 mb-3 font-medium">
            {item.grade}
          </div>
        )}
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        {item.achievements && (
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-morphism rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase size={20} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap size={20} />
              Education
            </button>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div>
            {activeTab === 'experience' ? (
              <div className="relative">
                {experiences.map((exp) => (
                  <TimelineItem key={exp.id} item={exp} isExperience={true} />
                ))}
              </div>
            ) : (
              <div className="relative">
                {education.map((edu) => (
                  <TimelineItem key={edu.id} item={edu} isExperience={false} />
                ))}
              </div>
            )}
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience 