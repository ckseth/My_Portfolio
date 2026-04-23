import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-[500px] md:h-[600px] w-full overflow-hidden rounded-[3rem] cursor-pointer"
    >
      {/* Background with dynamic coloring based on project */}
      <div className="absolute inset-0 bg-mocha/5 dark:bg-white/5 transition-transform duration-1000 group-hover:scale-105" />
      
      {/* Editorial Tech Badge */}
      <div className="absolute top-10 left-10 z-20">
        <span className="px-5 py-2 glass-btn bg-white/80 dark:bg-stone-900/80 text-[10px] font-black uppercase tracking-widest leading-none">
          {project.language || "Open Source"}
        </span>
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 md:p-14 text-white">
        {/* Gradient Shadow for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-mocha via-mocha/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        
        <div className="relative transform transition-all duration-700 group-hover:translate-y-[-20px]">
          <h3 className="text-4xl md:text-6xl font-serif font-black mb-6 tracking-tight leading-tight uppercase">
            {project.name.replace(/-/g, " ")}
          </h3>
          
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-white/70 text-lg md:text-xl mb-8 max-w-xl font-medium leading-relaxed"
              >
                {project.description || "A meticulously crafted software solution designed for scale and user impact. Built with modern patterns and a focus on architectural integrity."}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex gap-4">
            <a 
              href={resumeData.projectLinks?.[project.name] || project.homepage || project.html_url}
              target="_blank"
              className="w-16 h-16 rounded-full bg-bronze text-mocha flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl"
            >
              <FiArrowUpRight size={28} />
            </a>
            <a 
              href={project.html_url}
              target="_blank"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/20"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Design Element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-bronze/10 rounded-full blur-[100px] group-hover:bg-bronze/20 transition-all duration-700" />
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${resumeData.github}/repos?sort=updated&per_page=30`
        );
        let allRepos = response.data.filter(repo => !repo.fork);
        const prioritizedNames = ["CampusTrade", "SkillSphere-AI-Learning-Skill-Exchange-Network", "SyntaxArena", "Simon-says-Memory-Flash-Challenge"];
        const featured = allRepos.filter(repo => prioritizedNames.includes(repo.name));
        const others = allRepos.filter(repo => !prioritizedNames.includes(repo.name));
        setProjects([...featured, ...others].slice(0, 4)); // Using 4 for a clean grid
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-mocha/40 dark:text-white/40 mb-6 block font-sans">Selected Works</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-mocha dark:text-white leading-none">
              RECENT <br /> <span className="text-luxury">PROJECTS</span>
            </h2>
          </div>
          <p className="text-mocha/60 dark:text-white/60 text-xl md:text-2xl max-w-lg italic font-serif leading-relaxed text-right md:text-left">
            "Design is a formal response to a strategic question." Focusing on scalability and flawless execution.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="h-[500px] md:h-[600px] rounded-[3rem] bg-mocha/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <a 
            href={`https://github.com/${resumeData.github}`}
            target="_blank"
            className="inline-flex items-center gap-4 text-mocha/60 dark:text-white/60 font-black uppercase tracking-widest text-sm hover:text-bronze transition-colors group"
          >
            <FiLayers /> View Expanded Archive
            <div className="w-12 h-[1px] bg-mocha/20 group-hover:w-20 group-hover:bg-bronze transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
