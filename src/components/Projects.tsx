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

  // Simplified animations for better performance
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
      y: 30, 
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

  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { 
        duration: 0.2, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative min-h-screen overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20"></div>
        
        {/* Optional video background for larger screens only */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute w-full h-full object-cover opacity-5 hidden lg:block"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/bg1.mp4" type="video/mp4" />
        </video>
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-4 lg:mb-6 rounded-full shadow-lg shadow-purple-500/50"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed font-medium px-4"
          >
            A showcase of my recent work, demonstrating expertise in modern web technologies
            and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
                className="bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/70 transition-colors duration-300 shadow-xl shadow-black/50 h-full"
              >
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:from-cyan-100 group-hover:via-purple-100 group-hover:to-pink-100 transition-all duration-200">
                      {project.title}
                    </h3>
                    <p className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm font-medium flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r ${tag.color} text-white text-xs rounded-lg font-bold border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-200`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Simplified floating particles for larger screens only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
              transition: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;