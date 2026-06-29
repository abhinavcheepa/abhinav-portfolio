import { motion } from "framer-motion";

const ProjectCard = ({ className, emoji, project_name, delay, overview, source_code_link, technologies }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay: delay }}
    >
      {/* Project image area */}
      <div className="absolute flex justify-center w-full">
        <div className="project-image h-48 rounded-xl border-slate-600 border-2 w-[95%] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1a0533, #0d1117)", fontSize: "4rem" }}>
          {emoji}
        </div>
        <div className="github flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            style={{ background: "#2c0056", border: "3px solid purple" }}
          >
            <span style={{ fontSize: "1.2rem" }}>⌥</span>
          </div>
        </div>
      </div>
      <span className="title">{project_name}</span>
      <div className="details">{overview}</div>
      <div className="technologies">Technologies Used: <span>{technologies}</span></div>
    </motion.div>
  );
};

export default ProjectCard;
