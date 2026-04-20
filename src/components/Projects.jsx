import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FiGithub, FiExternalLink, FiStar, FiFolder } from "react-icons/fi";
import { resumeData } from "../data/resumeData";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="glass-card p-6 rounded-3xl group h-full flex flex-col"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
        <FiFolder size={24} />
      </div>
      <div className="flex gap-4 text-muted-foreground">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <FiGithub size={20} />
        </a>
        <a href={project.homepage || project.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <FiExternalLink size={20} />
        </a>
      </div>
    </div>

    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors truncate">
      {project.name.replace(/-/g, " ")}
    </h3>
    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 overflow-hidden flex-grow">
      {project.description || "A premium project built with modern technologies. Focused on performance and user experience."}
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.topics && project.topics.slice(0, 3).map((topic) => (
        <span key={topic} className="text-[10px] px-2 py-1 rounded-full bg-secondary text-primary uppercase font-bold tracking-tighter">
          {topic}
        </span>
      ))}
      {!project.topics?.length && project.language && (
        <span className="text-[10px] px-2 py-1 rounded-full bg-secondary text-primary uppercase font-bold tracking-tighter">
          {project.language}
        </span>
      )}
    </div>

    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/5">
      <div className="flex items-center gap-1">
        <FiStar className="text-yellow-500" />
        <span>{project.stargazers_count}</span>
      </div>
      <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
      <div>{new Date(project.updated_at).toLocaleDateString()}</div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${resumeData.github}/repos?sort=updated&per_page=6`
        );
        // Filter out forks
        const filtered = response.data.filter(repo => !repo.fork);
        setProjects(filtered);
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            A collection of my latest work, fetched dynamically from GitHub. 
            These represent my journey and growth as a developer.
          </p>
        </div>
        <motion.a
          href={`https://github.com/${resumeData.github}`}
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-semibold flex items-center gap-2 hover:underline underline-offset-4"
        >
          View GitHub <FiExternalLink />
        </motion.a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="glass-card h-64 rounded-3xl animate-pulse bg-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
