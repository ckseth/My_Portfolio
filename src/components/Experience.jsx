import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiCalendar, FiMapPin, FiStar, FiTriangle } from "react-icons/fi";

const ExperienceCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="group relative"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-20 border-t border-mocha/10">
      {/* Date Column */}
      <div className="md:col-span-3">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-mocha/10 text-[10px] font-black uppercase tracking-[0.3em] text-mocha/60">
          <FiCalendar /> {edu.duration}
        </div>
      </div>

      {/* Content Column */}
      <div className="md:col-span-6">
        <h3 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter text-mocha dark:text-white uppercase leading-none">
          {edu.title}
        </h3>
        <div className="text-xl font-bold text-bronze uppercase tracking-widest mb-6">{edu.institution}</div>
      </div>

      {/* Status Column */}
      <div className="md:col-span-3 text-right hidden md:block">
        <div className="text-xs font-black uppercase tracking-[0.5em] text-mocha/20 mb-2">Academic Standing</div>
        <div className="text-3xl font-serif font-black italic text-mocha/40">{edu.status}</div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-32 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none"
          >
            <FiTriangle size={400} className="text-mocha" />
          </motion.div>
          
          <span className="text-xs font-black uppercase tracking-[0.5em] text-mocha/40 block mb-6 px-4">The Chronology</span>
          <h2 className="text-6xl md:text-[8rem] font-serif font-black tracking-tighter text-mocha dark:text-white leading-[0.85]">
            ACADEMIC <br /> <span className="text-luxury">PEDIGREE</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {resumeData.education.map((edu, index) => (
            <ExperienceCard key={index} edu={edu} index={index} />
          ))}
          <div className="border-t border-mocha/10 w-full" />
        </div>

        {/* Honors Sidebar layout */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 self-start sticky top-32">
            <h3 className="text-4xl font-serif font-black uppercase tracking-tighter mb-8 leading-tight">
              HONORS & <br /> <span className="text-bronze italic">SPECIFICATIONS</span>
            </h3>
            <p className="text-mocha/60 text-lg leading-relaxed font-medium">
              A curated selection of industrial certifications and high-level project achievements.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {resumeData.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-6 mb-4">
                  <FiStar className="text-bronze mt-1" size={24} />
                  <p className="text-xl font-bold leading-tight text-mocha dark:text-white/90">
                    {ach}
                  </p>
                </div>
                <div className="h-px w-full bg-mocha/5 group-hover:bg-bronze transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
