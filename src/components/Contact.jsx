import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="premium-card relative overflow-hidden bg-white/70 dark:bg-stone-900/70 p-12 md:p-24 border-mocha/5">
          {/* Subtle atmospheric glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-mocha/40 dark:text-white/40 mb-6 block">Ready for impact</span>
              <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-mocha dark:text-white leading-[0.85] mb-12 italic">
                LET'S <br /> <span className="text-luxury not-italic">BUILD IT.</span>
              </h2>
              <p className="text-xl text-mocha/60 dark:text-white/60 mb-16 max-w-md leading-relaxed font-medium">
                "Small details make perfection, but perfection is not a small detail." Let's create something world-class together.
              </p>

              <div className="space-y-10">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-mocha text-white dark:bg-white dark:text-mocha flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-mocha/40 tracking-[0.2em] block mb-1">Direct Line</span>
                    <span className="text-2xl font-bold tracking-tight">{resumeData.email}</span>
                  </div>
                </a>
              </div>

              <div className="flex gap-6 mt-20">
                <a 
                  href={`https://github.com/${resumeData.github}`}
                  target="_blank"
                  className="w-16 h-16 rounded-3xl bg-mocha/5 dark:bg-white/5 border border-mocha/10 flex items-center justify-center hover:bg-bronze hover:text-white transition-all group"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href={`https://linkedin.com/in/${resumeData.linkedin}`}
                  target="_blank"
                  className="w-16 h-16 rounded-3xl bg-mocha/5 dark:bg-white/5 border border-mocha/10 flex items-center justify-center hover:bg-bronze hover:text-white transition-all group"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase text-mocha/40 tracking-widest block ml-2">Identity</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-mocha/10 focus:border-bronze py-6 px-4 text-2xl font-serif font-black focus:outline-none transition-colors placeholder:text-mocha/10"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase text-mocha/40 tracking-widest block ml-2">Digital Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-mocha/10 focus:border-bronze py-6 px-4 text-2xl font-serif font-black focus:outline-none transition-colors placeholder:text-mocha/10"
                    placeholder="Email Address"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase text-mocha/40 tracking-widest block ml-2">Inquiry</label>
                  <textarea
                    required
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-mocha/10 focus:border-bronze py-6 px-4 text-2xl font-serif font-black focus:outline-none transition-colors placeholder:text-mocha/10 resize-none"
                    placeholder="Brief Project Overview"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group mt-12 overflow-hidden relative glass-btn bg-mocha text-white dark:bg-white dark:text-mocha !py-6 !text-2xl font-serif shadow-2xl shadow-mocha/20 flex items-center justify-center gap-6"
                >
                  <span className="relative z-10">
                    {status === "sending" ? "INITIATING..." : status === "success" ? "TRANSMITTED." : "SEND INQUIRY"}
                  </span>
                  <FiArrowUpRight size={32} className="relative z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-bronze transition-all duration-500 group-hover:h-full z-0" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
