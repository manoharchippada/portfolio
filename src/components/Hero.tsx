import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6">
            Manohar
            <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6"><span> </span>Chippada</span>
          </h1>
        </motion.div>
         <motion.div
                    variants={itemVariants}
                    className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-purple-500/50"
                  ></motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-cyan-100 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Graduate Research Assistant & Full-Stack Developer specializing in AI/ML, cloud technologies, and scalable web applications.
        </motion.p>

        <motion.div
                    variants={itemVariants}
                    className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-purple-500/50"
                  ></motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.a
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1WgvhQqjqrwCX85lJdn6QrCkilpT9J8z7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={20} />
            View Resume
          </motion.a>
          
          <motion.a
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:lchippada@binghamton.edu"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/manoharchippada" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/manohar-chippada-12b987179/" },
            { icon: Mail, href: "mailto:lchippada@binghamton.edu" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
