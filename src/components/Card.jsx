import { motion } from "framer-motion";

const ROLE_CONFIG = {
  "AI/ML Engineer":   { icon: "🤖", accent: "#00d4ff", tags: ["PyTorch", "TensorFlow", "CUDA"] },
  "NLP Researcher":   { icon: "🧬", accent: "#10b981", tags: ["MuRIL", "BERT", "ACL 2025"] },
  "Agentic AI":       { icon: "⚡", accent: "#f59e0b", tags: ["LangChain", "n8n", "Tools"] },
  "Startup Founder":  { icon: "🚀", accent: "#6366f1", tags: ["Vision", "Product", "Scale"] },
};

const SKILL_CONFIG = {
  "python":      { icon: "🐍", label: "Python" },
  "pytorch":     { icon: "🔥", label: "PyTorch" },
  "tensorflow":  { icon: "🧠", label: "TensorFlow" },
  "pandas":      { icon: "🐼", label: "Pandas" },
  "numpy":       { icon: "📐", label: "NumPy" },
  "huggingface": { icon: "🤗", label: "HuggingFace" },
  "fastapi":     { icon: "⚡", label: "FastAPI" },
  "react":       { icon: "⚛️", label: "React" },
  "docker":      { icon: "🐳", label: "Docker" },
  "linux":       { icon: "🐧", label: "Linux" },
  "git":         { icon: "🔀", label: "Git" },
  "sql":         { icon: "🗄️", label: "SQL" },
};

const Card = ({ topic, skillKey, delay, className }) => {
  const isSkill = !!skillKey;
  const skill = SKILL_CONFIG[skillKey];
  const role = ROLE_CONFIG[topic];

  if (isSkill && skill) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay }}
        style={{ flexDirection: "column" }}
      >
        <span style={{ fontSize: "2.8rem", position: "relative", zIndex: 5, lineHeight: 1 }}>
          {skill.icon}
        </span>
        <span style={{
          position: "relative", zIndex: 5, fontSize: "11px",
          fontFamily: "monospace", color: "#94a3b8", marginTop: "6px", fontWeight: 400,
        }}>
          {skill.label}
        </span>
      </motion.div>
    );
  }

  if (role) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay }}
        style={{ flexDirection: "column", gap: "8px" }}
      >
        <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 5, lineHeight: 1 }}>
          {role.icon}
        </span>
        <span style={{
          position: "relative", zIndex: 5, fontSize: "18px",
          fontWeight: 700, color: "white", textShadow: "0 0 6px whitesmoke",
        }}>
          {topic}
        </span>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 5 }}>
          {role.tags.map(t => (
            <span key={t} style={{
              fontSize: "10px", fontFamily: "monospace",
              color: role.accent, border: `1px solid ${role.accent}50`,
              padding: "2px 8px", borderRadius: "10px",
              background: `${role.accent}15`,
            }}>{t}</span>
          ))}
        </div>
      </motion.div>
    );
  }

  return null;
};

export default Card;
