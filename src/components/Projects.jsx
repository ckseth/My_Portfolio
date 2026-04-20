import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import axios from "axios";
import { FiGithub, FiExternalLink, FiFolder, FiStar } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.15}
      className="h-full"
    >
      <div className="glass-card p-6 h-full flex flex-col group relative overflow-hidden">
        {/* Glow behind folder icon */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary">
            <FiFolder size={24} />
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
              <FiGithub size={20} />
            </a>
            {(resumeData.projectLinks?.[project.name] || project.homepage) && (
              <a 
                href={resumeData.projectLinks?.[project.name] || project.homepage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-all hover:scale-110"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.name.replace(/-/g, " ")}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">
          {project.description || "Sophisticated technology project focused on scalability, performance, and modern UI/UX principles."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.language && (
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-black uppercase tracking-wider">
              {project.language}
            </span>
          )}
          {project.topics && project.topics.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <FiStar className="text-yellow-500" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="w-1 h-1 bg-white/10 rounded-full" />
          <span>Updated {new Date(project.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${resumeData.github}/repos?sort=updated&per_page=30`
        );
        
        // Filter out forks
        let allRepos = response.data.filter(repo => !repo.fork);
        
        // Prioritize specific projects
        const prioritizedNames = ["CampusTrade", "SyntaxArena", "Simon-says-Memory-Flash-Challenge"];
        const featured = allRepos.filter(repo => prioritizedNames.includes(repo.name));
        const others = allRepos.filter(repo => !prioritizedNames.includes(repo.name));
        
        setProjects([...featured, ...others].slice(0, 6));
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          My Creative Work
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Latest <span className="text-gradient">Creations</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {loading ? (
          [1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="glass-card h-80 animate-pulse bg-white/5" />
          ))
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
