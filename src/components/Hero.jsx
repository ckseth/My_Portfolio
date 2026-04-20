import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-card p-1 overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chhavi" // Using a generic avatar since I don't have the user's real image
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4"
      >
        Hi, I'm <span className="text-gradient">{resumeData.name}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-3xl font-medium text-muted-foreground mb-8 min-h-[1.5em]"
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Specialist",
            2000,
            "Tech Enthusiast",
            2000,
            "Creative Designer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-2xl text-muted-foreground md:text-lg mb-10 leading-relaxed"
      >
        Building digital experiences that combine innovative design with robust engineering. 
        Specializing in building high-performance web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold neon-glow flex items-center gap-2 group hover:scale-105 active:scale-95 transition-all">
          View Projects
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 glass text-foreground rounded-full font-semibold border-white/10 flex items-center gap-2 hover:bg-white/5 active:scale-95 transition-all">
          <FiDownload />
          Download CV
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
