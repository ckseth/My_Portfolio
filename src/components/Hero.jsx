import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Hero = () => {
  const handleDownload = () => {
    // This expects a file named 'resume.pdf' to be in the 'public' folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Chhavi_Kumari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 overflow-hidden">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full z-[-1]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-12 relative"
      >
        <div className="relative w-32 h-32 md:w-56 md:h-56">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-brand-secondary to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-full h-full rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-sm z-10">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chhavi&backgroundColor=A855F7"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="text-primary text-sm md:text-base font-black uppercase tracking-[0.6em] mb-6 animate-pulse">
          Official Portfolio
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
          CHHAVI <br />
          <span className="text-gradient uppercase">KUMARI</span>
        </h1>
        
        <div className="text-xl md:text-4xl font-black text-white/40 mb-12 h-10 italic tracking-tight">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Creative Technologist",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black rounded-full font-black text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-3 group transition-all"
          >
            Projects
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 glass-card !rounded-full text-white font-black text-lg flex items-center gap-3 transition-all border-white/10 hover:border-white/30"
          >
            <FiDownload />
            Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Visual Line Anchor */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-100 transition-opacity"
      >
        <div className="w-[2px] h-24 bg-gradient-to-b from-primary via-white to-transparent rounded-full shadow-[0_0_10px_white]" />
      </motion.a>
    </section>
  );
};

export default Hero;
