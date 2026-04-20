import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full z-[-1]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-12 relative"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chhavi&backgroundColor=A855F7"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.5em] mb-6">
          Full Stack Software Engineer
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
          Elevating <br />
          <span className="text-gradient">Digital Worlds</span>
        </h1>
        
        <div className="text-xl md:text-3xl font-medium text-white/50 mb-12 h-10">
          <TypeAnimation
            sequence={[
              "Designing Scalable Systems",
              2000,
              "Building Modern Web Apps",
              2000,
              "Solving Complex Problems",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black rounded-full font-bold shadow-2xl flex items-center gap-2 group transition-all"
          >
            Explore Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 glass-card !rounded-full text-white font-bold flex items-center gap-2 transition-all border-white/5"
          >
            <FiDownload />
            Download CV
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
