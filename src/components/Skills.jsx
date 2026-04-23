import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const SkillDetail = ({ skill, index, color }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="group"
  >
    <div className="flex justify-between items-end mb-4">
      <h4 className="text-xl font-bold tracking-tight text-mocha dark:text-white uppercase">{skill.name}</h4>
      <span className="text-xs font-black text-mocha/30 dark:text-white/30 tracking-widest">{skill.level}%</span>
    </div>
    <div className="h-[2px] w-full bg-mocha/5 dark:bg-white/5 overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "circOut" }}
        className="h-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { id: 'frontend', color: '#87a0b2' }, // Cool Steel
    { id: 'backend', color: '#d5ac4e' },  // Golden Bronze
    { id: 'tools', color: '#684a52' },    // Mauve Shadow
  ];

  return (
    <section id="skills" className="py-32 bg-stone-100 dark:bg-stone-900/50 rounded-[4rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-mocha/40 dark:text-white/40 mb-6 block font-sans">Core Architectures</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-mocha dark:text-white leading-[0.85] mb-12">
              TECHNICAL <br /> <span className="text-luxury italic">ARSENAL</span>
            </h2>
            <p className="text-mocha/60 dark:text-white/60 text-lg leading-relaxed font-medium">
              Developing complex infrastructures with a focus on code readability, 
              scalable design patterns, and flawless user interaction.
            </p>
          </div>

          {/* Skills Lists */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {categories.map((cat, catIndex) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-4 border-l-4 pl-8" style={{ borderColor: cat.color }}>
                  <h3 className="text-3xl font-serif font-black uppercase tracking-tight text-mocha dark:text-white mb-2">
                    {cat.id}
                  </h3>
                  <span className="text-[10px] uppercase font-black tracking-widest text-mocha/40">Competency Layer 0{catIndex + 1}</span>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 gap-12">
                  {resumeData.skills[cat.id].map((skill, index) => (
                    <SkillDetail key={skill.name} skill={skill} index={index} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
