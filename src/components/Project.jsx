import { motion } from "framer-motion";

const Project = ({ className, image, project_name, delay, overview, source_code_link, technologies }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", delay }}
  >
    <div className="absolute flex justify-center w-full" style={{ top: 0, left: 0 }}>
      <img src={image} alt="project" className="project-image h-48 rounded-xl border-slate-600 border-2" />
      <div
        className="github-btn flex justify-end m-3"
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <div className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          style={{ background: "#2c0056", border: "4px solid purple" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>
      </div>
    </div>
    <span className="project-title">{project_name}</span>
    <div className="project-details">{overview}</div>
    <div className="project-tech">Technologies Used: <span>{technologies}</span></div>
  </motion.div>
);

export default Project;
