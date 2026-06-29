import { motion } from "framer-motion";
import Project from "../components/Project";

const projects = [
  {
    name: "ACL NLP Research",
    overview: "Research on Hindi POS tagging using MuRIL with CRF and Linear decoder pipelines. Introduced lbs_weighted — an original subword decoding method that outperforms Stanza benchmarks. 4-layer hidden state fusion with 17 BIS tag classes. Targeting ACL 2025.",
    tech: "MuRIL, CRF, PyTorch, Hindi NLP, Transformers",
    link: "https://github.com/abhinavcheepa",
  },
  {
    name: "RoadGuard — Driver Safety AI",
    overview: "AI-powered road safety application with voice assistant, real-time SOS alerts, pothole detection via computer vision, Haversine proximity checking, and intelligent navigation. Full n8n workflow automation backend.",
    tech: "Flutter, Firebase, n8n, Node.js, Computer Vision",
    link: "https://github.com/abhinavcheepa",
  },
  {
    name: "Hindi POS Tagging Framework",
    overview: "Transformer-based Part-of-Speech tagging framework with uncertainty estimation for Hindi. Four decoding strategies: zero_shot, lookback, lbs, lbs_weighted. State-of-the-art F1 on HDTB and IITP benchmark datasets.",
    tech: "MuRIL, CRF, PyTorch, CUDA, Subword Decoding",
    link: "https://github.com/abhinavcheepa",
  },
  {
    name: "School Timetable Management",
    overview: "Automated constraint-based timetable generation for schools. Features conflict resolution, teacher allocation, room scheduling, and real-time updates via web dashboard.",
    tech: "Python, FastAPI, React, SQL",
    link: "https://github.com/abhinavcheepa",
  },
  {
    name: "Indigenous Waste Management",
    overview: "AI-powered smart waste management with deep learning classification, route optimization for collection vehicles, and community reporting with real-time analytics dashboard.",
    tech: "Python, Deep Learning, React, Computer Vision",
    link: "https://github.com/abhinavcheepa",
  },
];

const Work = () => (
  <motion.div className="overview" id="work"
    initial={{ opacity: 0, y: "-20px", x: "-20px" }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
  >
    <motion.div className="intro text-slate-400 text-2xl"
      initial={{ opacity: 0, y: "-5px", x: "-5px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
    >My Work</motion.div>

    <motion.div className="title"
      initial={{ opacity: 0, y: "-5px", x: "-5px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
    >Projects.</motion.div>

    <motion.div className="info1 text-slate-400"
      initial={{ opacity: 0, y: "-5px", x: "-5px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
    >
      Following projects showcase my skills and research through real-world examples. Each project
      is described with links to code repositories. It reflects my ability to solve complex problems,
      work with deep learning and NLP technologies, and manage projects effectively.
    </motion.div>

    <motion.div className="cards flex justify-center"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      {projects.map((p, i) => (
        <Project
          key={p.name}
          className="project card"
          delay={0.3 + i * 0.15}
          source_code_link={p.link}
          project_name={p.name}
          overview={p.overview}
          technologies={p.tech}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default Work;
