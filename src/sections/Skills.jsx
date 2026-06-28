import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../constants";

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between font-mono text-xs mb-2">
        <span className="text-slate-300">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-1 bg-slate-800 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="absolute inset-0 h-full bg-gradient-to-r from-cyan-400/40 to-purple-500/40 blur-sm"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="section-padding relative z-10" style={{ background: "rgba(15,23,42,0.4)" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> Skills
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
              className="glass border border-slate-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-5 pb-3 border-b border-slate-700/50">
                {cat}
              </div>
              {skills
                .filter((s) => s.category === cat)
                .map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + i * 0.08} />
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
