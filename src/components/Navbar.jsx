import { motion } from "framer-motion";
import { navLinks } from "../constants";

const handleNavClick = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const navbarHeight = 80;
    const offsetTop = targetSection.offsetTop - navbarHeight;
    window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <motion.header
      className="flex max-sm:pl-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
    >
      <div className="title1 pl-4">&lt;abhinav.ai /&gt;</div>
      <div className="links max-sm:hidden">
        <ul className="links flex justify-around">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={handleNavClick}
                className="hover:text-violet-400 transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
};

export default Navbar;
