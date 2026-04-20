import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
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
    <section id="contact" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto glass-card rounded-[3rem] overflow-hidden border-white/5">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Info Sidebar */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-12 lg:w-2/5 text-white flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-8 italic">Let's <br />Collaborate</h2>
              <p className="text-white/80 text-lg font-medium mb-12 leading-relaxed">
                I'm currently looking for new opportunities as a <span className="text-white font-black underline decoration-2 underline-offset-4">Full Stack Developer</span>. 
                Whether you have a question or a project idea, I'm just a message away.
              </p>

              <div className="space-y-8">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMail size={22} />
                  </div>
                  <div className="text-lg font-bold tracking-tight">{resumeData.email}</div>
                </a>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center">
                    <FiMapPin size={22} />
                  </div>
                  <div className="text-lg font-bold tracking-tight">{resumeData.location}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <a
                href={`https://github.com/${resumeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all active:scale-95"
              >
                <FiGithub size={24} />
              </a>
              <a
                href={`https://linkedin.com/in/${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all active:scale-95"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:w-3/5 bg-black/40">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all font-bold placeholder:text-white/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all font-bold placeholder:text-white/20"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-muted-foreground tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all font-bold placeholder:text-white/20 resize-none"
                  placeholder="How can I help you today?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${
                  status === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-brand-primary text-white neon-glow hover:scale-[1.01] active:scale-95 shadow-lg shadow-brand-primary/20"
                }`}
              >
                {status === "sending" ? (
                  <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                ) : status === "success" ? (
                  "Submitted Successfully!"
                ) : (
                  <>
                    Launch Message <FiSend className="rotate-45" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
