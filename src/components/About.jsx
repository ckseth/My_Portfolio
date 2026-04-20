import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { FiMail, FiMapPin, FiPhone, FiCheckCircle } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Identification</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-10 font-medium">
              {resumeData.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm border-t border-white/5 pt-10">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground mb-0.5">Email</div>
                  <div className="font-bold text-base">{resumeData.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground mb-0.5">Phone</div>
                  <div className="font-bold text-base">{resumeData.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground mb-0.5">Location</div>
                  <div className="font-bold text-base">{resumeData.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground mb-0.5">Availability</div>
                  <div className="font-bold text-base">Immediately Available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-black tracking-tight mb-8">Interpersonal Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {resumeData.interpersonalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-3xl border-transparent hover:border-brand-primary/20 transition-all flex items-start gap-4"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-primary" />
                  <p className="font-semibold text-foreground/80 leading-snug">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
