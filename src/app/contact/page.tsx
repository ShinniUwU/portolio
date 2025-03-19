'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt, FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Error sending message:', data.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/20 to-black/40">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-purple-700 cursor-wait' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>
            
            {/* Resume & Connect Section */}
            <div className="space-y-8">
              {/* Resume Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                
                <h2 className="text-2xl font-semibold mb-6 text-white relative z-10">My Resume</h2>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <FaFileAlt className="text-2xl text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Emily's Resume</h3>
                      <p className="text-gray-400 text-sm">PDF • Updated June 2023</p>
                    </div>
                  </div>
                  
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="flex items-center justify-center space-x-2 py-3 px-6 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-lg text-white font-medium"
                  >
                    <FaDownload />
                    <span>Download Resume</span>
                  </a>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-300 text-sm">
                      Looking for a more interactive experience? Check out my portfolio or connect with me on social media.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Connect Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h2>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-4"
                >
                  <motion.a
                    variants={itemVariants}
                    href="mailto:contact@emilydev.com"
                    className="flex items-center p-4 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-lg"
                  >
                    <FaEnvelope className="text-xl text-purple-400 mr-4" />
                    <span className="text-white">contact@emilydev.com</span>
                  </motion.a>
                  
                  <motion.a
                    variants={itemVariants}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-lg"
                  >
                    <FaGithub className="text-xl text-purple-400 mr-4" />
                    <span className="text-white">github.com/yourusername</span>
                  </motion.a>
                  
                  <motion.a
                    variants={itemVariants}
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-lg"
                  >
                    <FaLinkedin className="text-xl text-purple-400 mr-4" />
                    <span className="text-white">linkedin.com/in/yourusername</span>
                  </motion.a>
                  
                  <motion.a
                    variants={itemVariants}
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-lg"
                  >
                    <FaTwitter className="text-xl text-purple-400 mr-4" />
                    <span className="text-white">twitter.com/yourusername</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-3 text-white">What services do you offer?</h3>
                <p className="text-gray-300">
                  I specialize in full-stack development, system administration, and cloud architecture. My expertise includes React, Node.js, Python, and various DevOps tools.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-3 text-white">What is your typical project process?</h3>
                <p className="text-gray-300">
                  I start with a discovery phase to understand your needs, followed by planning, development, testing, and deployment. I maintain clear communication throughout the process.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-3 text-white">How do you handle project pricing?</h3>
                <p className="text-gray-300">
                  Pricing depends on project scope, complexity, and timeline. I offer both hourly rates and fixed-price quotes based on detailed requirements.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-3 text-white">Are you available for remote work?</h3>
                <p className="text-gray-300">
                  Yes! I work remotely with clients worldwide. I'm comfortable with different time zones and use various tools to ensure smooth collaboration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 