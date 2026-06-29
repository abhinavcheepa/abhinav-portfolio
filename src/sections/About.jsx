import { motion } from "framer-motion";
import Card from "../components/Card";

const roles = [
  { emoji: "🧠", topic: "AI/ML Engineer" },
  { emoji: "🔬", topic: "NLP Researcher" },
  { emoji: "🤖", topic: "Agentic AI" },
  { emoji: "🚀", topic: "Startup Vision" },
];

const skillEmojis = [
  "🐍", "🔥", "🧬", "📊", "🤗", "⚡",
  "🌐", "💾", "🐳", "🖥️", "📐", "🔗",
];

const skillNames = [
  "Python", "PyTorch", "TensorFlow", "Pandas",
  "HuggingFace", "FastAPI", "React", "SQL",
  "Docker", "Linux", "NumPy", "Git",
];

const About = () => {
  return (
    <>
      <motion.div
        className="overview"
        id="about"
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
          Introduction
        </motion.div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Overview.
        </motion.div>
        <motion.div
          className="info1 text-slate-400"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          I'm a passionate AI/ML Engineer and NLP Researcher at MITS Gwalior, driven by an obsession with building intelligent systems that understand human language. My research focuses on multilingual NLP — particularly Hindi POS tagging using MuRIL with CRF decoders — targeting ACL 2025.
          <div className="text-white mt-2">
            My goal: become an AI Research Engineer while building an AI startup that solves real-world problems at scale.
          </div>
        </motion.div>
      </motion.div>

      {/* Role cards */}
      <motion.div
        className="cards flex justify-center"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        {roles.map((r, i) => (
          <Card key={r.topic} className="card" emoji={r.emoji} topic={r.topic} delay={0.5 + i * 0.25} />
        ))}
      </motion.div>

      {/* Skill cards */}
      <motion.div
        className="cards skills flex justify-center"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        {skillEmojis.map((em, i) => (
          <Card key={i} className="card skill" emoji={em} topic={skillNames[i]} delay={0.5 + (i % 4) * 0.25} />
        ))}
      </motion.div>
    </>
  );
};

export default About;
