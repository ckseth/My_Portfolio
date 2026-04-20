import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { resumeData } from "../data/resumeData";
import { FiCode, FiServer, FiTarget } from "react-icons/fi";

const SkillBadge = ({ name, level, index, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="mb-5 last:mb-0"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold text-sm text-foreground/90">{name}</span>
      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground">
        {level}%
      </span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className={`h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)]`}
        style={{ 
          background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,0.1) 100%)`,
          boxShadow: `0 0 12px ${color}44`
        }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { id: 'frontend', icon: <FiCode />, color: '#A855F7' },
    { id: 'backend', icon: <FiServer />, color: '#3B82F6' },
    { id: 'tools', icon: <FiTarget />, color: '#F59E0B' },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          My Technical Expertise
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Skills & <span className="text-gradient">Abilities</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, catIndex) => (
          <Tilt
            key={cat.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card p-8 h-full flex flex-col border-white/5 bg-gradient-to-br from-white/10 to-transparent"
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="p-3 rounded-2xl text-white shadow-lg"
                  style={{ backgroundColor: `${cat.color}22`, border: `1px solid ${cat.color}44` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-foreground/90">
                  {cat.id}
                </h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                {resumeData.skills[cat.id].map((skill, index) => (
                  <SkillBadge key={skill.name} {...skill} index={index} color={cat.color} />
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
