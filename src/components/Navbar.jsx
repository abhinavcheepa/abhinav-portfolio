import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-cyan-500/10 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="font-mono text-sm tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          &lt;abhinav.ai /&gt;
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                active === link.id ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"
              }`}
              whileHover={{ y: -2 }}
            >
              {link.title}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="font-mono text-xs tracking-widest px-4 py-2 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-cyan-400 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-cyan-500/10 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
