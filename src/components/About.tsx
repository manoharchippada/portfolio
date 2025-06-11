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

  // Optimized animation variants with hardware acceleration
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

  const skillCardVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background with optimized rendering */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src="https://assets.zyrosite.com/mePGrL1bXRFjZ2nQ/8-AzG7DP0Z6zIkKPaM.gif"
          alt="Background Animation"
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      </div>

      {/* Content container with optimized transforms */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Left side - Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <motion.div
                className="w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ willChange: 'transform' }}
              >
                <img
                  src="/me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Floating elements with optimized animations */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
                variants={rotateVariants}
                animate="animate"
                style={{ willChange: 'transform' }}
              >
                <Code className="text-gray-700" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                style={{ willChange: 'transform' }}
              >
                <Brain className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Hello,
                <div className="flex items-center gap-4 text-gray-400 mt-2">
                  <span>Manohar here!</span>
                  <motion.span 
                    className="wave-container"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.img 
                      className="wave-hand" 
                      src="https://assets.zyrosite.com/mePGrL1bXRFjZ2nQ/wave-YNqN17z9R5s6aaxo.png" 
                      alt="Wave" 
                      style={{ width: '68px', height: '68px', willChange: 'transform' }}
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
              
              <motion.div variants={itemVariants} className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">Graduate Research Assistant</span> at Binghamton University 
                  and experienced <span className="text-white font-semibold">Full Stack Developer</span> with 3+ years 
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
                className="text-gray-500 italic mt-6"
              >
                Currently based in Binghamton, NY 📍
              </motion.p>
            </div>

            {/* Skills Grid with optimized animations */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-zinc-800"
                  style={{ willChange: 'transform' }}
                >
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.a
                href="https://drive.google.com/file/d/1r4yhzlE0SEmg5dBbjG0xtSVCnlK9YCzi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
              >
                Resume
              </motion.a>
              
              <motion.a
                href="mailto:lchippada@binghamton.edu"
                className="bg-zinc-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-colors duration-300 border border-zinc-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
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

        @media (max-width: 768px) {
          .wave-hand {
            width: 48px !important;
            height: 48px !important;
          }
        }

        @media (max-width: 480px) {
          .wave-hand {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;