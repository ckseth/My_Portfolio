import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info Sidebar */}
          <div className="bg-primary p-12 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-white/80 mb-10">
                I'm currently looking for new opportunities and collaborations. 
                My inbox is always open whether you have a question or just want to say hi!
              </p>

              <div className="space-y-6">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FiMail />
                  </div>
                  <span>{resumeData.email}</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FiLinkedin />
                  </div>
                  <span>linkedin.com/in/{resumeData.linkedin}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: <FiGithub size={20} />, href: `https://github.com/${resumeData.github}` },
                { icon: <FiLinkedin size={20} />, href: `https://linkedin.com/in/${resumeData.linkedin}` },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white text-primary border border-white/20 flex items-center justify-center transition-all hover:text-primary active:scale-90"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-primary text-white neon-glow hover:scale-[1.02] active:scale-95"
                }`}
              >
                {status === "sending" ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <FiSend />
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
