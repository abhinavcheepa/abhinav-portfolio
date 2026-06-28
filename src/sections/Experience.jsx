import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../constants";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> Experience & Education
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-6 h-6 rounded-full border-2 border-cyan-400 bg-slate-900 hidden md:flex items-center justify-center text-xs">
                  {exp.icon}
                </div>

                <div className="glass border border-slate-700/50 p-6 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg">{exp.title}</h3>
                      <div className="text-cyan-400 text-sm font-mono mt-1">{exp.company}</div>
                    </div>
                    <div className="font-mono text-xs text-slate-500 px-3 py-1 border border-slate-700/50">
                      {exp.date}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
