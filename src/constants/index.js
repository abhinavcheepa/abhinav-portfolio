export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "research", title: "Research" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  { name: "Python", level: 92, category: "Languages" },
  { name: "PyTorch", level: 88, category: "ML/DL" },
  { name: "TensorFlow", level: 78, category: "ML/DL" },
  { name: "Machine Learning", level: 85, category: "ML/DL" },
  { name: "Deep Learning", level: 85, category: "ML/DL" },
  { name: "Transformers", level: 88, category: "NLP" },
  { name: "NLP", level: 90, category: "NLP" },
  { name: "Scikit-learn", level: 80, category: "ML/DL" },
  { name: "Pandas", level: 85, category: "Data" },
  { name: "NumPy", level: 85, category: "Data" },
  { name: "FastAPI", level: 72, category: "Backend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 68, category: "Languages" },
  { name: "Git", level: 82, category: "Tools" },
  { name: "Linux", level: 78, category: "Tools" },
  { name: "Docker", level: 65, category: "Tools" },
  { name: "SQL", level: 72, category: "Data" },
];

export const projects = [
  {
    title: "ACL NLP Research",
    description: "Published research on multilingual NLP using Transformers and Deep Learning. Developed novel subword decoding strategy (lbs_weighted) for Hindi POS tagging that beats Stanza benchmark. MuRIL + CRF dual pipeline architecture with 4-layer hidden state fusion.",
    tags: ["MuRIL", "CRF", "PyTorch", "Hindi NLP", "Transformers"],
    type: "Research · ACL 2025",
    github: "https://github.com/abhinavcheepa7",
    live: null,
    color: "#00d4ff",
  },
  {
    title: "Driver Safety AI",
    description: "AI-powered road safety system with voice assistant, real-time SOS alerts, pothole detection using CV, and intelligent navigation. Built with Flutter, Firebase, and n8n workflow automation.",
    tags: ["Flutter", "Firebase", "Computer Vision", "n8n", "Node.js"],
    type: "Mobile · Safety",
    github: "https://github.com/abhinavcheepa7",
    live: null,
    color: "#6C63FF",
  },
  {
    title: "Hindi POS Tagging Framework",
    description: "Transformer-based Part-of-Speech tagging with uncertainty estimation for Hindi. Features four decoding methods: zero_shot, lookback, lbs, and the original lbs_weighted. Achieves state-of-the-art F1 on Hindi benchmark datasets.",
    tags: ["MuRIL", "CRF", "Hindi", "POS Tagging", "Uncertainty"],
    type: "NLP · Framework",
    github: "https://github.com/abhinavcheepa7",
    live: null,
    color: "#00d4ff",
  },
  {
    title: "School Timetable Management",
    description: "Automated timetable generation and management system for schools. Constraint-based scheduling with conflict resolution, teacher allocation, and real-time updates.",
    tags: ["Python", "FastAPI", "React", "SQL"],
    type: "Full Stack · EdTech",
    github: "https://github.com/abhinavcheepa7",
    live: null,
    color: "#6C63FF",
  },
  {
    title: "Indigenous Waste Management",
    description: "Smart waste management system using AI for waste classification, route optimization for collection vehicles, and community reporting with real-time analytics dashboard.",
    tags: ["Python", "CV", "Deep Learning", "React"],
    type: "AI · Sustainability",
    github: "https://github.com/abhinavcheepa7",
    live: null,
    color: "#00d4ff",
  },
];

export const experiences = [
  {
    title: "AI/ML Research",
    company: "Independent Research",
    date: "2024 — Present",
    desc: "Publishing research on multilingual NLP and Hindi POS tagging. Developing novel architectures targeting ACL 2025.",
    icon: "🔬",
  },
  {
    title: "Full Stack Development",
    company: "Personal Projects",
    date: "2023 — Present",
    desc: "Built multiple production applications including Flutter + Firebase mobile apps and Node.js backends with workflow automation.",
    icon: "⚙️",
  },
  {
    title: "Open Source Contributor",
    company: "Community",
    date: "2023 — Present",
    desc: "Active contributor to NLP and ML open-source ecosystem. Studying and contributing to transformer architectures and multilingual models.",
    icon: "🌐",
  },
  {
    title: "B.Tech Undergraduate",
    company: "MITS Gwalior",
    date: "2024 — Present",
    desc: "Pursuing undergraduate engineering at one of India's premier institutions. Deep focus on AI, ML, and computational linguistics.",
    icon: "🎓",
  },
];

export const researchInterests = [
  { title: "Natural Language Processing", desc: "Multilingual NLP, low-resource languages, Hindi text understanding", icon: "🧠" },
  { title: "Large Language Models", desc: "LLM alignment, fine-tuning strategies, parameter-efficient methods", icon: "🤖" },
  { title: "Agentic AI", desc: "Multi-agent systems, tool-use, autonomous reasoning pipelines", icon: "⚡" },
  { title: "Deep Learning", desc: "Transformer architectures, CRF decoders, sequence labeling", icon: "🔬" },
  { title: "Transformers", desc: "MuRIL, BERT variants, cross-lingual transfer, tokenization", icon: "🔮" },
  { title: "Future Publications", desc: "ACL 2025 submission on Hindi POS tagging with novel decoding strategies", icon: "📄" },
];
