import { motion } from "framer-motion";

const PROJECT_COLORS = {
  "ACL NLP Research": { from: "#00d4ff22", to: "#7c3aed22", accent: "#00d4ff", icon: "🧠" },
  "RoadGuard — Driver Safety AI": { from: "#f59e0b22", to: "#ef444422", accent: "#f59e0b", icon: "🚗" },
  "Hindi POS Tagging Framework": { from: "#10b98122", to: "#05966922", accent: "#10b981", icon: "🔬" },
  "School Timetable Management": { from: "#6366f122", to: "#4f46e522", accent: "#6366f1", icon: "📅" },
  "Indigenous Waste Management": { from: "#22c55e22", to: "#16a34a22", accent: "#22c55e", icon: "♻️" },
};

const Project = ({ className, project_name, delay, overview, source_code_link, technologies }) => {
  const theme = PROJECT_COLORS[project_name] || { from: "#00d4ff22", to: "#7c3aed22", accent: "#00d4ff", icon: "💻" };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay }}
      style={{ minHeight: 420, padding: "10px", paddingTop: "210px", position: "relative" }}
    >
      {/* Project image area — always visible, no broken img tag */}
      <div style={{
        position: "absolute", top: 0, left: "10px", right: "10px",
        height: "192px", borderRadius: "12px",
        background: `linear-gradient(135deg, ${theme.from}, ${theme.to})`,
        border: "2px solid #334155",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", zIndex: 5,
      }}>
        {/* Grid pattern */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
          <defs>
            <pattern id={`grid-${delay}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke={theme.accent} strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${delay})`}/>
        </svg>

        {/* Center icon */}
        <div style={{ fontSize: "4rem", position: "relative", zIndex: 2 }}>{theme.icon}</div>

        {/* Glow */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: "40px",
          background: `radial-gradient(ellipse, ${theme.accent}40, transparent)`,
        }}/>
      </div>

      {/* GitHub button */}
      <div
        className="github-btn flex justify-end m-3"
        onClick={() => window.open(source_code_link, "_blank")}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 7 }}
      >
        <div style={{
          width: 40, height: 40, borderRadius: "50%", display: "flex",
          alignItems: "center", justifyContent: "center", cursor: "pointer",
          background: "#2c0056", border: "4px solid purple",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>
      </div>

      <span className="project-title" style={{ color: theme.accent }}>{project_name}</span>
      <div className="project-details">{overview}</div>
      <div className="project-tech">Technologies Used: <span>{technologies}</span></div>
    </motion.div>
  );
};

export default Project;
