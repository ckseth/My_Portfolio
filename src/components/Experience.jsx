import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiBookOpen, FiCalendar, FiAward, FiCheckCircle, FiHeart } from "react-icons/fi";

const EducationItem = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative pl-12 border-l-2 border-brand-primary/20 pb-12 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-primary border-4 border-background shadow-[0_0_10px_rgba(147,51,234,0.5)]" />
    
    <div className="glass-card p-6 md:p-8 rounded-3xl group hover:border-brand-primary/30 transition-all">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-3">
        <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-brand-primary transition-colors">
          {edu.title}
        </h3>
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-tighter">
          <FiCalendar />
          {edu.duration}
        </div>
      </div>
      <div className="text-lg font-semibold text-brand-primary/80 mb-2">{edu.institution}</div>
      <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-bold text-muted-foreground">
        Result: <span className="text-white">{edu.status}</span>
      </div>
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-5 rounded-2xl border flex items-start gap-4 transition-all hover:translate-y-[-5px] ${colors[index % colors.length]}`}
    >
      <div className="mt-1 flex-shrink-0">
        <FiCheckCircle size={18} />
      </div>
      <p className="text-sm font-bold tracking-tight text-foreground/90 leading-snug">
        {text}
      </p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Educational Background</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Journey & <span className="text-gradient">Academics</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mb-32">
        {resumeData.education.map((edu, index) => (
          <EducationItem key={index} edu={edu} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Achievements Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary">
              <FiAward size={24} />
            </div>
            <h3 className="text-3xl font-black tracking-tighter">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {resumeData.achievements.map((ach, i) => (
              <AchievementCard key={i} text={ach} index={i} />
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary">
              <FiHeart size={24} />
            </div>
            <h3 className="text-3xl font-black tracking-tighter">Hobbies & Interests</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {resumeData.hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-3xl flex items-center gap-5 group hover:border-brand-primary/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:scale-150 transition-transform" />
                <span className="text-lg font-bold text-foreground/80 group-hover:text-white transition-colors">
                  {hobby}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
