import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";
import StarsCanvas from "../canvas/Stars";

const handleNavClick = (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute("href");
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
};

const Hero = () => {
  const typed = useTypingEffect(
    ["AI/ML Engineer", "NLP Researcher", "Agentic AI Enthusiast", "Future AI Startup Founder"],
    80, 2200
  );

  return (
    <motion.div
      id="home"
      className="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
    >
      <StarsCanvas />

      <motion.div
        className="circle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.1 }}
      />

      <motion.div
        className="title font-bold text-white"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        Hi, I'm <span className="text-violet-700">Abhinav Cheepa</span>
      </motion.div>

      <motion.div
        className="info text-white"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.6 }}
      >
        <span className="text-violet-400">{typed}</span>
        <span style={{
          display: "inline-block", width: 3, height: "0.9em",
          background: "#a78bfa", marginLeft: 3,
          verticalAlign: "text-bottom", animation: "blink 1s step-end infinite"
        }} />
        <br />
        <span style={{ fontSize: "1.6vw", color: "#94a3b8" }}>
          Building intelligent AI systems that solve real-world problems.
        </span>
      </motion.div>

      <div className="gif absolute flex justify-center items-center bottom-44 w-full">
        <a href="#about" onClick={handleNavClick}>
          <div className="flex justify-center items-start p-2 border-4 rounded-full border-slate-500 w-[35px] h-[64px]">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-slate-500"
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
