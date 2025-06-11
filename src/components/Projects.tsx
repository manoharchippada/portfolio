import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cloud-Based E-Commerce Platform",
      description: "Built a scalable React.js & Node.js application hosted on AWS with microservices architecture. Containerized six core components using Docker and orchestrated deployment with Kubernetes.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: [
        { name: "React.js", color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", color: "from-green-400 to-emerald-400" },
        { name: "AWS", color: "from-orange-400 to-yellow-400" },
        { name: "Docker", color: "from-blue-500 to-indigo-500" },
        { name: "Kubernetes", color: "from-purple-400 to-indigo-400" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Faster RCNN Garbage Detection",
      description: "Developed an AI-powered tool for detecting garbage bags and container waste on roadsides and in water using Faster RCNN network with TensorFlow. Achieves detection in under 150ms.",
      image: "https://images.pexels.com/photos/3687774/pexels-photo-3687774.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: [
        { name: "Python", color: "from-blue-400 to-blue-600" },
        { name: "TensorFlow", color: "from-orange-400 to-red-400" },
        { name: "Computer Vision", color: "from-green-400 to-emerald-400" },
        { name: "Machine Learning", color: "from-purple-400 to-pink-400" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Full-Stack Web Applications at DXC",
      description: "Launched resilient applications using React.js, Node.js, and Spring Boot on AWS, reducing latency by 35%. Designed RESTful APIs & microservices, improving data exchange efficiency by 40%.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: [
        { name: "React.js", color: "from-blue-400 to-cyan-400" },
        { name: "Spring Boot", color: "from-green-500 to-teal-500" },
        { name: "AWS", color: "from-orange-400 to-yellow-400" },
        { name: "Jenkins", color: "from-red-400 to-pink-400" },
        { name: "Azure DevOps", color: "from-blue-500 to-purple-500" }
      ],
      github: "#",
      live: "#"
    }
  ];

  // Optimized animation variants with better performance
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
      y: 40, 
      opacity: 0,
      scale: 0.9
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

  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      scale: 1.03,
      y: -12,
      transition: { 
        duration: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    rest: { 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    rest: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    hover: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const tagVariants = {
    rest: { 
      scale: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  // Optimized particle animation
  const particleVariants = {
    animate: (i: number) => ({
      y: [-30, -120],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="py-20 px-6 relative min-h-screen overflow-hidden">
      {/* Optimized Background */}
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-purple-500/50"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A showcase of my recent work, demonstrating expertise in modern web technologies
            and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Optimized Project cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="bg-black/80 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/70 transition-colors duration-300 shadow-xl shadow-black/50"
                style={{ willChange: 'transform' }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      variants={imageVariants}
                      loading="lazy"
                      style={{ willChange: 'transform' }}
                    />
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent flex items-center justify-center"
                      variants={overlayVariants}
                    >
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          style={{ willChange: 'transform' }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          style={{ willChange: 'transform' }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3 group-hover:from-cyan-100 group-hover:via-purple-100 group-hover:to-pink-100 transition-all duration-200">
                      {project.title}
                    </h3>
                    <p className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text mb-4 leading-relaxed text-sm font-medium">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`px-3 py-1.5 bg-gradient-to-r ${tag.color} text-white text-xs rounded-lg font-bold border border-white/20 shadow-lg`}
                          variants={tagVariants}
                          whileHover="hover"
                          style={{ willChange: 'transform' }}
                        >
                          {tag.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity'
            }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;