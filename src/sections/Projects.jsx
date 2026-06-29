import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const emojiMap = ["🔬", "🚗", "🧬", "📅", "♻️"];

const Work = () => {
  return (
    <>
      <motion.div
        className="overview"
        id="projects"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        <motion.div
          className="intro text-slate-400 text-2xl"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          My Work
        </motion.div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Projects.
        </motion.div>
        <motion.div
          className="info1 text-slate-400"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Following projects showcase my skills and research through real-world examples. Each project reflects my ability to solve complex problems, work with deep learning and NLP technologies, and manage projects effectively.
        </motion.div>

        <motion.div
          className="cards flex justify-center"
          initial={{ opacity: 0, y: "-20px", x: '-20px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              className="project card"
              emoji={emojiMap[i]}
              delay={0.3 + i * 0.15}
              source_code_link="https://github.com/abhinavcheepa"
              project_name={p.title}
              overview={p.description}
              technologies={p.tags.join(", ")}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Work;
