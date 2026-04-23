import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiArrowDownRight, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Large Editorial Subheader */}
          <div className="lg:col-span-12 mb-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-[12vw] md:text-[15vw] font-serif font-black tracking-tighter text-mocha/5 dark:text-white/5 leading-none absolute left-0 right-0 text-center select-none z-0"
            >
              CRAFTED BY DESIGN
            </motion.h2>
            <div className="relative z-10 text-center mt-[5vw]">
              <span className="text-xs font-black uppercase tracking-[1em] text-mocha/40 dark:text-white/40 block mb-6 px-4">Executive Summary</span>
              <h3 className="text-5xl md:text-8xl font-serif font-black tracking-tight text-mocha dark:text-white px-4">
                THE <span className="text-luxury">FOUNDATION</span>
              </h3>
            </div>
          </div>

          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-serif font-bold text-mocha dark:text-white/90 leading-[1.2]"
            >
              {resumeData.bio.split('.')[0]}.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-mocha/60 dark:text-white/60 leading-relaxed max-w-2xl"
            >
              {resumeData.bio.split('.').slice(1).join('.')}
            </motion.p>

            <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-mocha/10 dark:border-white/10">
              <div className="space-y-4">
                <FiMapPin className="text-bronze" size={32} />
                <h4 className="text-xl font-bold uppercase tracking-tight">Location</h4>
                <p className="text-mocha/60 dark:text-white/60 text-lg">{resumeData.location}</p>
              </div>
              <div className="space-y-4">
                <FiMail className="text-bronze" size={32} />
                <h4 className="text-xl font-bold uppercase tracking-tight">Communication</h4>
                <p className="text-mocha/60 dark:text-white/60 text-lg">{resumeData.email}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars (Interpersonal) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-100 dark:bg-stone-900/80 p-12 rounded-[4rem] border border-mocha/5">
              <h4 className="text-2xl font-serif font-black mb-12 uppercase tracking-tight flex items-center gap-4">
                Core Pillars <FiArrowDownRight className="text-bronze" />
              </h4>
              <div className="space-y-10">
                {resumeData.interpersonalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-6 mb-2">
                      <span className="text-xs font-black text-bronze/40 group-hover:text-bronze tracking-widest transition-colors">0{index + 1}</span>
                      <p className="text-lg md:text-xl font-bold text-mocha dark:text-white/90 leading-tight">
                        {skill}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="p-10 rounded-[3rem] bg-bronze text-white shadow-2xl shadow-bronze/20 text-center overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-2 opacity-60">Status</h4>
                <p className="text-3xl font-black italic font-serif">Open for Strategic Roles</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
