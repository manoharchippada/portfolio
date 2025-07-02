import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "React.js, Node.js, Spring Boot, Django with expertise in microservices architecture"
    },
    {
      icon: Brain,
      title: "AI/ML Research",
      description: "Large Language Models, TensorFlow, computer vision, and data preprocessing for ML applications"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Docker, Kubernetes, CI/CD pipelines with Jenkins and Azure DevOps"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "MongoDB, MySQL, PostgreSQL, RESTful APIs, and microservices optimization"
    }
  ];

  // Simplified, performance-optimized animations
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

  const skillCardVariants = {
    hidden: { 
      y: 15, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Optional background image with better loading */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://assets.zyrosite.com/mePGrL1bXRFjZ2nQ/8-AzG7DP0Z6zIkKPaM.gif")',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side - Profile Image */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              <motion.div
                className="w-full aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Simplified floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <Code className="text-gray-700" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [-3, 3, -3],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Brain className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6"
                variants={itemVariants}
              >
                Hello,
                <div className="flex items-center gap-2 sm:gap-4 text-gray-400 mt-2">
                  <span>Manohar here!</span>
                  <motion.span 
                    className="wave-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.img 
                      className="wave-hand" 
                      src="https://assets.zyrosite.com/mePGrL1bXRFjZ2nQ/wave-YNqN17z9R5s6aaxo.png" 
                      alt="Wave" 
                      style={{ 
                        width: '48px',
                        height: '48px'
                      }}
                      animate={{
                        rotate: [0, 14, -8, 14, -4, 10, 0],
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }
                      }}
                    />
                  </motion.span>
                </div>
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">Graduate Research Assistant</span> at Binghamton University 
                  and experienced <span className="text-white font-semibold">Full Stack Developer</span> with 4+ years 
                  at DXC Technology. Currently pursuing my MS in Computer Science with focus on AI/ML and systems programming.
                </p>
                
                <p>
                  Specialized in cloud-native applications, microservices architecture, and Large Language Models. 
                  Reduced application latency by 35% and improved deployment speed by 50% through innovative DevOps solutions.
                </p>
                
                <p>
                  Passionate about leveraging cutting-edge technologies like TensorFlow, AWS, and Kubernetes to build 
                  scalable solutions that make a real-world impact.
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-500 italic mt-4 lg:mt-6 text-sm sm:text-base"
              >
                Currently based in Binghamton, NY 📍
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-zinc-900/80 backdrop-blur-sm p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-zinc-800"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm lg:text-base">{skill.title}</h3>
                  <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8"
            >
              <motion.a
                href="https://drive.google.com/file/d/1WgvhQqjqrwCX85lJdn6QrCkilpT9J8z7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 text-center text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
              
              <motion.a
                href="mailto:lchippada@binghamton.edu"
                className="bg-zinc-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-colors duration-300 border border-zinc-700 text-center text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                lchippada@binghamton.edu
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .wave-container {
          display: inline-block;
        }

        .wave-hand {
          display: inline-block;
          transform-origin: 70% 70%;
        }

        /* Responsive wave hand sizing */
        @media (max-width: 640px) {
          .wave-hand {
            width: 32px !important;
            height: 32px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .wave-hand {
            width: 48px !important;
            height: 48px !important;
          }
        }

        @media (min-width: 1025px) {
          .wave-hand {
            width: 68px !important;
            height: 68px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
