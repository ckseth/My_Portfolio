import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const SkillBadge = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="mb-6"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-gradient">Tech Stack</span>
        </motion.h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          I've worked with a wide range of technologies in the web development ecosystem, 
          focusing on creating seamless user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {Object.entries(resumeData.skills).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary border-b border-white/5 pb-2">
              {category}
            </h3>
            <div className="space-y-2">
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
