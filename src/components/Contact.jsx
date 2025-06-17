import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Instagram } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahulksanghvi21@gmail.com',
      href: 'mailto:rahulksanghvi21@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '440-334-9257',
      href: 'tel:4403349257',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Strongsville, OH',
      href: 'https://maps.google.com/?q=Strongsville, OH',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rsanghvi21',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rahul-sanghvi',
      color: 'hover:text-blue-400',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rsanghvi_21',
      color: 'hover:text-pink-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rahulksanghvi21@gmail.com',
      color: 'hover:text-green-400',
    },
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      setIsSubmitting(false)
      reset()
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="section bg-dark-900/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                      <info.icon size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.label}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Follow me on social media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-morphism rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                Available for freelance work
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I'm currently available for freelance projects and new opportunities. 
                Whether you need a full-stack developer, frontend specialist, or 
                technical consultant, I'd love to discuss how we can work together.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 