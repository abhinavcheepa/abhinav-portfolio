import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> About Me
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            The Mind Behind the{" "}
            <span className="gradient-text">Models</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass border border-cyan-500/20 aspect-square max-w-sm mx-auto overflow-hidden glow-cyan">
              {/* Placeholder avatar with neural art */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-6xl">
                    🧠
                  </div>
                  {/* Orbiting rings */}
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "8s", transform: "scale(1.5)" }} />
                  <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse", transform: "scale(1.8)" }} />
                </div>
              </div>
              {/* Scan line */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" style={{ animation: "scan 3s linear infinite" }} />
              </div>
            </div>
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-cyan-400" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-cyan-400" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-cyan-400" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-cyan-400" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-slate-300 leading-relaxed mb-5">
              I am a passionate AI/ML Engineer and NLP Researcher at IIT Bombay, driven by an obsession with building intelligent systems that genuinely understand human language. My work sits at the frontier of Deep Learning, Transformers, and multilingual NLP.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              Currently publishing research on Hindi Part-of-Speech tagging using MuRIL — a multilingual transformer — combined with CRF decoders and novel subword decoding strategies. My goal: push state-of-the-art NLP for low-resource Indian languages.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Beyond research, I am deeply passionate about Agentic AI — systems that don't just answer questions but reason, plan, and act autonomously. My long-term vision is to found an AI startup that deploys these capabilities to solve pressing real-world problems at scale.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Deep Learning", "NLP", "Transformers", "LLMs", "Agentic AI", "Research", "Startup Vision"].map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1 border border-cyan-500/20 text-cyan-400 bg-cyan-500/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
