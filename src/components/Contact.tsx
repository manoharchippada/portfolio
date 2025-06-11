import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  // Optimized animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const contactItemVariants = {
    rest: { 
      x: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: { 
      x: 10,
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 px-6 relative min-h-screen overflow-hidden">
      {/* Optimized Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute w-full h-full object-cover opacity-10"
          style={{ willChange: 'auto' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/bg1.mp4" type="video/mp4" />
          <source src="/bg1.webm" type="video/webm" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Ready to collaborate on your next project? Let's discuss how we can build 
            something amazing together using cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6">Get In Touch</h3>
              <p className="text-lg text-cyan-100 max-w-2xl leading-relaxed font-medium">
                I'm always open to discussing new opportunities, research collaborations, 
                or innovative projects in AI/ML, cloud architecture, and full-stack development.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: "lchippada@binghamton.edu",
                  href: "mailto:lchippada@binghamton.edu"
                },
                { 
                  icon: Phone, 
                  label: "Phone", 
                  value: "(607) 296-8907",
                  href: "tel:+16072968907"
                },
                { 
                  icon: MapPin, 
                  label: "Location", 
                  value: "Binghamton, NY",
                  href: "#"
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md transition-all duration-300 ${contact.href === '#' ? 'cursor-default' : ''}`}
                  variants={contactItemVariants}
                  whileHover={contact.href !== '#' ? "hover" : "rest"}
                  style={{ willChange: 'transform' }}
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <contact.icon className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-gray-800 font-semibold">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="space-y-4 pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://drive.google.com/file/d/1r4yhzlE0SEmg5dBbjG0xtSVCnlK9YCzi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  View Resume
                </motion.a>
                <motion.a
                  href="https://github.com/manoharchippada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  GitHub Profile
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/manohar-chippada-12b987179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform' }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={formVariants}>
            <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300">
                  <option value="">Select a topic</option>
                  <option value="research">Research Collaboration</option>
                  <option value="project">Project Discussion</option>
                  <option value="job">Job Opportunity</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ willChange: 'transform' }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;