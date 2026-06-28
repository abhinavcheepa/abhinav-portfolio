import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { researchInterests } from "../constants";

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding relative z-10" style={{ background: "rgba(15,23,42,0.4)" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> Research
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            Research <span className="gradient-text">Frontiers</span>
          </h2>
        </motion.div>

        {/* ACL paper highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass border border-cyan-500/30 p-8 mb-10 relative overflow-hidden glow-cyan"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
          <div className="flex flex-wrap gap-3 items-start justify-between">
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
                📄 ACL 2025 · Submission
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                Novel Subword Decoding for Hindi POS Tagging
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                A transformer-based framework for Hindi Part-of-Speech tagging introducing <em className="text-cyan-400">lbs_weighted</em> — an original lookback-with-score-weighted decoding strategy. Uses MuRIL with CRF and Linear decoder pipelines. Achieves state-of-the-art performance, outperforming Stanza benchmarks on Hindi benchmark datasets.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["MuRIL", "CRF Decoder", "Hindi NLP", "Transformers", "Subword Decoding"].map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 border border-cyan-500/20 text-cyan-400 bg-cyan-500/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass border border-cyan-500/20 p-4 text-center min-w-[120px]">
              <div className="font-mono text-2xl font-bold text-cyan-400">ACL</div>
              <div className="font-mono text-xs text-slate-500 mt-1">2025</div>
              <div className="font-mono text-xs text-green-400 mt-2">↑ SOTA</div>
            </div>
          </div>
        </motion.div>

        {/* Research interests grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {researchInterests.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass border border-slate-700/50 p-6 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h4 className="font-display font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {r.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
