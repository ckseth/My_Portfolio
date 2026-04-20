import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const TimelineItem = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`flex flex-col md:flex-row gap-8 mb-12 items-start ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 text-primary text-sm font-bold ${
        index % 2 === 0 ? "md:justify-end" : ""
      }`}>
        <FiCalendar />
        {exp.duration}
      </div>
      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
      <div className="text-xl font-medium text-muted-foreground mb-4">{exp.company}</div>
      <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 ms-auto">
        {exp.description}
      </p>
    </div>

    <div className="hidden md:flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex justify-center items-center text-primary border-4 border-background z-10">
        <FiBriefcase size={20} />
      </div>
      <div className="w-1 h-full bg-border -mt-1" />
    </div>

    <div className="hidden md:block w-1/2" />
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-gradient">Experience</span>
        </motion.h2>
        <p className="text-muted-foreground">My academic and professional journey so far.</p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Center Line for Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-32">
        <h3 className="text-2xl font-bold mb-10 text-center">Achievements & <span className="text-primary">Certifications</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 glass rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-all"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm text-foreground/80">{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
