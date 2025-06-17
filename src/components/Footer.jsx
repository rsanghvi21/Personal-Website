import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rsanghvi21', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-sanghvi', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/rsanghvi_21', label: 'Instagram' },
    { icon: Mail, href: 'mailto:rahulksanghvi21@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Rahul Sanghvi
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Computer Science & Engineering student at The Ohio State University. 
                  Passionate about AI, robotics, and innovative software solutions. 
                  Always learning, always building, always ready for new challenges.
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>Made with</span>
                  <Heart size={16} className="text-red-500 animate-pulse" />
                  <span>and lots of ☕</span>
                </div>
              </motion.div>
            </div>

            {/* Quick links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-400 hover:text-white hover:gradient-text transition-all duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social & Contact */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  Let's Connect
                </h4>
                <div className="flex gap-3 mb-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
                <div className="text-gray-400 text-sm">
                  <p className="mb-1">rahulksanghvi21@gmail.com</p>
                  <p>440-334-9257</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Rahul Sanghvi. All rights reserved. Built with React & Tailwind CSS.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 