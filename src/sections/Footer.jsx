const Footer = () => (
  <footer className="relative z-10 border-t border-slate-800 py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-mono text-sm text-cyan-400 tracking-widest">&lt;abhinav.ai /&gt;</div>
      <div className="font-mono text-xs text-slate-600">
        © 2026 Abhinav Cheepa · IIT Bombay · Built with React + Three.js
      </div>
      <div className="flex gap-6">
        {[
          { label: "GitHub", href: "https://github.com/abhinavcheepa7" },
          { label: "LinkedIn", href: "#" },
          { label: "Email", href: "mailto:abhinavcheepa7@gmail.com" },
        ].map((l) => (
          <a key={l.label} href={l.href}
            className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors tracking-widest uppercase">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
