import { motion } from "framer-motion";
import Card from "../components/Card";

const roles = [
  { topic: "AI/ML Engineer", delay: 0.5  },
  { topic: "NLP Researcher",  delay: 0.75 },
  { topic: "Agentic AI",      delay: 1.0  },
  { topic: "Startup Founder", delay: 1.25 },
];

const skills = [
  { key: "python",      delay: 0.5  },
  { key: "pytorch",     delay: 0.5  },
  { key: "tensorflow",  delay: 0.5  },
  { key: "pandas",      delay: 0.75 },
  { key: "numpy",       delay: 0.75 },
  { key: "huggingface", delay: 0.75 },
  { key: "fastapi",     delay: 1.0  },
  { key: "react",       delay: 1.0  },
  { key: "docker",      delay: 1.0  },
  { key: "linux",       delay: 1.25 },
  { key: "git",         delay: 1.25 },
  { key: "sql",         delay: 1.25 },
];

const About = () => (
  <>
    <motion.div
      className="overview" id="about"
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
      >Introduction</motion.div>

      <motion.div className="title"
        initial={{ opacity: 0, y: "-5px", x: "-5px" }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
      >Overview.</motion.div>

      <motion.div className="info1 text-slate-400"
        initial={{ opacity: 0, y: "-5px", x: "-5px" }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
      >
        I'm a passionate AI/ML Engineer and NLP Researcher at MITS Gwalior, driven by an obsession
        with building intelligent systems that understand human language. My research focuses on
        multilingual NLP — particularly Hindi POS tagging using MuRIL with CRF decoders —
        targeting ACL 2025. I work with transformers, deep learning, and agentic AI pipelines.
        <div className="text-white mt-2">
          My goal: become an AI Research Engineer while building an AI startup that solves
          real-world problems at scale. Let's build the future together.
        </div>
      </motion.div>
    </motion.div>

    {/* Role cards */}
    <motion.div className="cards flex justify-center"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      {roles.map((r) => (
        <Card key={r.topic} className="card" topic={r.topic} delay={r.delay} />
      ))}
    </motion.div>

    {/* Skill cards */}
    <motion.div className="cards skills flex justify-center"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      {skills.map((s) => (
        <Card key={s.key} className="card skill" skillKey={s.key} delay={s.delay} />
      ))}
    </motion.div>
  </>
);

export default About;
