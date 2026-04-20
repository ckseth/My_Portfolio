import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative pt-20 px-4">
      {/* Background Glows inspired by reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-card p-1.5 overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chhavi&backgroundColor=9333ea"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 max-w-4xl"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-brand-primary tracking-widest uppercase mb-2">
          Welcome to my portfolio
        </h2>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
          I'm <span className="text-gradient">{resumeData.name}</span>
        </h1>
        
        <div className="text-2xl md:text-5xl font-bold text-foreground/80 mb-12 h-16">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Expert",
              2000,
              "Creative UI Designer",
              2000,
              "Tech Consultant",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
          Building and designing exceptional digital experiences that live on the web. 
          Specializing in scalable backend architectures and fluid frontend interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand-primary text-white rounded-2xl font-bold neon-glow shadow-lg flex items-center gap-2 group transition-all"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 glass text-foreground rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
          >
            <FiDownload />
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-brand-primary to-transparent rounded-full animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
