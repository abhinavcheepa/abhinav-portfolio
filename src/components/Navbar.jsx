import { motion } from "framer-motion";

const handleNavClick = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({ top: Math.max(0, offsetTop), behavior: "smooth" });
  }
};

const Navbar = () => (
  <motion.header
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
  >
    <span className="title1">&lt;abhinav.ai /&gt;</span>
    <ul className="links max-sm:hidden">
      <li><a href="#home" onClick={handleNavClick}>Home</a></li>
      <li><a href="#about" onClick={handleNavClick}>About</a></li>
      <li><a href="#work" onClick={handleNavClick}>Work</a></li>
      <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
    </ul>
  </motion.header>
);

export default Navbar;
