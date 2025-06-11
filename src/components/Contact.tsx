import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  // Simplified animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative min-h-screen overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video background only for larger screens */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute w-full h-full object-cover opacity-10 hidden lg:block"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/bg1.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-4 lg:mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed font-medium px-4"
          >
            Ready to collaborate on your next project? Let's discuss how we can build 
            something amazing together using cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-4 lg:mb-6">Get In Touch</h3>
              <p className="text-sm sm:text-base lg:text-lg text-cyan-100 max-w-2xl leading-relaxed font-medium">
                I'm always open to discussing new opportunities, research collaborations, 
                or innovative projects in AI/ML, cloud architecture, and full-stack development.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
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
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl lg:rounded-2xl shadow-md transition-all duration-300 ${contact.href === '#' ? 'cursor-default' : 'hover:shadow-lg hover:transform hover:translate-x-2'}`}
                  whileHover={contact.href !== '#' ? { x: 5 } : {}}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                    <contact.icon className="text-gray-700" size={window.innerWidth < 640 ? 20 : 24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-sm sm:text-base text-gray-800 font-semibold truncate">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="space-y-4 pt-4 lg:pt-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href="https://drive.google.com/file/d/1r4yhzlE0SEmg5dBbjG0xtSVCnlK9YCzi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-6 py-3 rounded-full font-medium shadow-lg text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Resume
                </motion.a>
                <motion.a
                  href="https://github.com/manoharchippada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-full font-medium shadow-lg text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GitHub Profile
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/manohar-chippada-12b987179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-full font-medium shadow-lg text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-xl space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base">
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
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 sm:py-4 rounded-lg lg:rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
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