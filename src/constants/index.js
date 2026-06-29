export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
    title: "ACL NLP Research",
    description: "Research on Hindi POS tagging using MuRIL with CRF and Linear decoder pipelines. Introduced lbs_weighted — an original subword decoding method that beats Stanza's Hindi benchmark. 4-layer hidden state fusion with 17 tag classes.",
    tags: ["MuRIL", "CRF", "PyTorch", "Hindi NLP", "Transformers"],
  },
  {
    title: "Driver Safety AI (RoadGuard)",
    description: "AI-powered road safety system with voice assistant, real-time SOS alerts, pothole detection, and intelligent navigation. Built with Flutter, Firebase, and n8n workflow automation.",
    tags: ["Flutter", "Firebase", "Computer Vision", "n8n", "Node.js"],
  },
  {
    title: "Hindi POS Tagging Framework",
    description: "Transformer-based Part-of-Speech tagging with uncertainty estimation. Features four decoding methods: zero_shot, lookback, lbs, and lbs_weighted. Achieves state-of-the-art F1 on Hindi benchmark datasets.",
    tags: ["MuRIL", "CRF", "Hindi", "POS Tagging"],
  },
  {
    title: "School Timetable Management",
    description: "Automated timetable generation and management system for schools. Constraint-based scheduling with conflict resolution, teacher allocation, and real-time updates.",
    tags: ["Python", "FastAPI", "React", "SQL"],
  },
  {
    title: "Indigenous Waste Management",
    description: "Smart waste management system using AI for waste classification, route optimization for collection vehicles, and community reporting with real-time analytics dashboard.",
    tags: ["Python", "Deep Learning", "React", "Computer Vision"],
  },
];
