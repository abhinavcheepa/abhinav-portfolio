import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../constants";
import { useTilt } from "../hooks/useTilt";

const ProjectCard = ({ project, index }) => {
  const { ref, handleMouseMove, handleMouseLeave, handleMouseEnter } = useTilt(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="glass border border-slate-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, ${project.color}, #6C63FF)` }}
      />

      {/* Image placeholder */}
      <div className="w-full h-40 mb-5 relative overflow-hidden border border-slate-700/30"
        style={{ background: `linear-gradient(135deg, ${project.color}11, #6C63FF11)` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-mono text-4xl opacity-30">
            {index === 0 ? "🔬" : index === 1 ? "🚗" : index === 2 ? "🧬" : index === 3 ? "📅" : "♻️"}
          </div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`,
            backgroundSize: "20px 20px"
          }} />
      </div>

      <div className="font-mono text-xs tracking-widest mb-3" style={{ color: project.color }}>
        {project.type}
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs px-2 py-1 bg-slate-800/80 border border-slate-700/50 text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex-1 text-center font-mono text-xs py-2 border border-slate-600 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
        >
          GitHub →
        </motion.a>
        <motion.a
          href={project.live || "#"}
          whileHover={{ scale: 1.05 }}
          className="flex-1 text-center font-mono text-xs py-2 border transition-all"
          style={{ borderColor: `${project.color}40`, color: project.color }}
        >
          Live Demo
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> Projects
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
