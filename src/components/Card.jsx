import { motion } from "framer-motion";

const Card = ({ image, topic, delay, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", delay }}
  >
    <img src={image} alt={topic || "skill"} />
    {topic && <span>{topic}</span>}
  </motion.div>
);

export default Card;
