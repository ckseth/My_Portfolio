import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Chhavi_Kumari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-20 px-4 overflow-hidden">
      {/* Editorial Decorative Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute -top-20 -left-20 w-96 h-96 bg-baby/10 rounded-full blur-[100px] z-0" />
      <motion.div style={{ y: y1, opacity }} className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-bronze/10 rounded-full blur-[120px] z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-16"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-bronze/30 to-baby/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-white dark:bg-stone-900 border border-mocha/5 shadow-2xl overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chhavi&backgroundColor=d5ac4e"
              alt="Chhavi Kumari"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.8em] text-mocha/40 dark:text-white/40 mb-6 block">
            Crafting Digital Excellence
          </span>
          <h1 className="text-7xl md:text-[10rem] font-serif font-black tracking-tighter leading-[0.85] mb-10 text-mocha dark:text-white">
            <span className="block">CHHAVI</span>
            <span className="text-luxury">KUMARI</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-xl md:text-3xl font-medium text-mocha/60 dark:text-white/60 font-serif italic">
            <TypeAnimation
              sequence={[
                "MERN Stack Architect",
                2000,
                "Creative Product Engineer",
                2000,
                "Strategy-Driven Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <motion.a
              href="#projects"
              whileHover={{ y: -5 }}
              className="glass-btn bg-mocha text-white dark:bg-white dark:text-mocha shadow-xl shadow-mocha/10"
            >
              Explore Portfolio <FiArrowRight />
            </motion.a>
            <motion.button
              onClick={handleDownload}
              whileHover={{ y: -5 }}
              className="glass-btn bg-white/50 dark:bg-black/20 border-mocha/10 text-mocha dark:text-white"
            >
              <FiDownload /> Get CV
            </motion.button>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { icon: <FiGithub size={24} />, href: `https://github.com/${resumeData.github}` },
              { icon: <FiLinkedin size={24} />, href: `https://linkedin.com/in/${resumeData.linkedin}` },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                className="text-mocha/40 dark:text-white/40 hover:text-bronze transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-mocha/20">Scroll</span>
        <div className="w-px h-24 bg-gradient-to-b from-mocha/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
