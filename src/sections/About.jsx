import { motion } from "framer-motion";
import Card from "../components/Card";

const roles = [
  { image: "/tech/role-ai-ml.svg",  topic: "AI/ML Engineer",    delay: 0.5  },
  { image: "/tech/role-nlp.svg",    topic: "NLP Researcher",     delay: 0.75 },
  { image: "/tech/role-agentic.svg",topic: "Agentic AI",         delay: 1.0  },
  { image: "/tech/role-startup.svg",topic: "Startup Founder",    delay: 1.25 },
];

const skillCards = [
  { image: "/tech/python.svg",     delay: 0.5  },
  { image: "/tech/pytorch.svg",    delay: 0.5  },
  { image: "/tech/tensorflow.svg", delay: 0.5  },
  { image: "/tech/pandas.svg",     delay: 0.75 },
  { image: "/tech/numpy.svg",      delay: 0.75 },
  { image: "/tech/huggingface.svg",delay: 0.75 },
  { image: "/tech/fastapi.svg",    delay: 1.0  },
  { image: "/tech/react.svg",      delay: 1.0  },
  { image: "/tech/docker.svg",     delay: 1.0  },
  { image: "/tech/linux.svg",      delay: 1.25 },
  { image: "/tech/git.svg",        delay: 1.25 },
  { image: "/tech/sql.svg",        delay: 1.25 },
];

const About = () => (
  <>
    <motion.div
      className="overview"
      id="about"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      <motion.div
        className="intro text-slate-400 text-2xl"
        initial={{ opacity: 0, y: "-5px", x: "-5px" }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
      >
        Introduction
      </motion.div>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: "-5px", x: "-5px" }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
      >
        Overview.
      </motion.div>
      <motion.div
        className="info1 text-slate-400"
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
    <motion.div
      className="cards flex justify-center"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      {roles.map((r) => (
        <Card key={r.topic} className="card" image={r.image} topic={r.topic} delay={r.delay} />
      ))}
    </motion.div>

    {/* Skill cards */}
    <motion.div
      className="cards skills flex justify-center"
      initial={{ opacity: 0, y: "-20px", x: "-20px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
    >
      {skillCards.map((s, i) => (
        <Card key={i} className="card skill" image={s.image} delay={s.delay} />
      ))}
    </motion.div>
  </>
);

export default About;
