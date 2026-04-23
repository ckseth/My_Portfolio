import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Biography", href: "#about" },
  { name: "Arsenal", href: "#skills" },
  { name: "Selected Works", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Connect", href: "#contact" },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-6",
        scrolled ? "backdrop-blur-3xl bg-white/40 dark:bg-black/40 py-4 shadow-xl shadow-mocha/5" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif font-black tracking-tighter text-mocha dark:text-white"
        >
          C<span className="text-bronze">.</span>KUMARI
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-bronze transition-colors text-mocha/40 dark:text-white/60"
            >
              {link.name}
            </motion.a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full border border-mocha/10 dark:border-white/10 flex items-center justify-center text-mocha dark:text-white hover:bg-mocha hover:text-white dark:hover:bg-white dark:hover:text-mocha transition-all"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-mocha/10 text-mocha dark:text-white"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-mocha dark:text-white">
            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        className="fixed inset-0 h-screen bg-stone-100 dark:bg-stone-900 z-50 lg:hidden flex flex-col p-12"
      >
        <div className="flex justify-between items-center mb-20">
          <span className="text-2xl font-serif font-black tracking-tighter">C.K</span>
          <button onClick={() => setIsOpen(false)} className="p-4 rounded-full bg-mocha text-white">
            <HiX size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl font-serif font-black tracking-tighter text-mocha dark:text-white hover:text-bronze transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-auto border-t border-mocha/10 pt-10">
          <p className="text-xs font-black uppercase tracking-widest text-mocha/40">Available for Architecture Projects</p>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
