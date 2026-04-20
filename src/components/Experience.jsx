import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiBriefcase, FiCalendar, FiAward, FiCheckCircle } from "react-icons/fi";

const TimelineItem = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative pl-12 border-l-2 border-brand-primary/20 pb-16 last:pb-0"
  >
    {/* Dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-primary border-4 border-background shadow-[0_0_10px_rgba(147,51,234,0.5)]" />
    
    <div className="glass-card p-8 rounded-3xl group hover:border-brand-primary/30 transition-all">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h3 className="text-2xl font-bold text-gradient">{exp.title}</h3>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest leading-none">
          <FiCalendar />
          {exp.duration}
        </div>
      </div>
      <div className="text-xl font-medium text-foreground/70 mb-4">{exp.company}</div>
      <p className="text-muted-foreground leading-relaxed text-lg">
        {exp.description}
      </p>
    </div>
  </motion.div>
);

const AchievementCard = ({ text, index }) => {
  const colors = [
    "border-blue-500/50 text-blue-500 bg-blue-500/5",
    "border-emerald-500/50 text-emerald-500 bg-emerald-500/5",
    "border-orange-500/50 text-orange-500 bg-orange-500/5",
    "border-purple-500/50 text-purple-500 bg-purple-500/5",
  ];
  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 rounded-2xl border flex items-start gap-5 transition-all hover:scale-[1.02] ${colorClass}`}
    >
      <div className="mt-1">
        <FiCheckCircle size={20} />
      </div>
      <p className="text-sm font-semibold tracking-wide leading-relaxed text-foreground/90">
        {text}
      </p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
          Professional <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Tracing my footprints in the tech industry and academia.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-32">
        {resumeData.experience.map((exp, index) => (
          <TimelineItem key={index} exp={exp} index={index} />
        ))}
      </div>

      {/* Achievement Section inspired by reference */}
      <div>
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-[2px] w-12 bg-brand-primary/30" />
          <h3 className="text-2xl md:text-4xl font-bold text-center flex items-center gap-3">
            <FiAward className="text-brand-primary" />
            Certifications & <span className="text-brand-primary">Honors</span>
          </h3>
          <div className="h-[2px] w-12 bg-brand-primary/30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.achievements.map((ach, i) => (
            <AchievementCard key={i} text={ach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
