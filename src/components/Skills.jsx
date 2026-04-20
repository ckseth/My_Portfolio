import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiCode, FiServer, FiTarget } from "react-icons/fi";

const SkillBadge = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="mb-6 last:mb-0"
  >
    <div className="flex justify-between items-center mb-2.5">
      <span className="font-bold text-sm tracking-wide text-foreground/90">{name}</span>
      <span className="text-xs font-black text-brand-primary/80 bg-brand-primary/5 px-2 py-0.5 rounded-md border border-brand-primary/10">
        {level}%
      </span>
    </div>
    <div className="h-2.5 w-full bg-secondary/50 rounded-full overflow-hidden border border-white/5 dark:border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "circOut", delay: index * 0.1 }}
        className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%] animate-gradient-x rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const icons = {
    frontend: <FiCode size={28} />,
    backend: <FiServer size={28} />,
    tools: <FiTarget size={28} />,
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Expertise & <span className="text-gradient">Tools</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          My technical repertoire spans across frontend, backend, and DevOps tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(resumeData.skills).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.15 }}
            className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-brand-primary/20 transition-all hover:neon-glow"
          >
            {/* Ambient Background Light */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary/10 blur-3xl group-hover:bg-brand-primary/20 transition-all" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary shadow-inner">
                {icons[category]}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground/90">
                {category}
              </h3>
            </div>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
