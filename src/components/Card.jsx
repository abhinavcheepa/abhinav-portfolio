import { motion } from "framer-motion";

const Card = ({ emoji, topic, delay, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay: delay }}
    >
      <div style={{ fontSize: "3rem", position: "relative", zIndex: 5 }}>{emoji}</div>
      {topic && <div>{topic}</div>}
    </motion.div>
  );
};

export default Card;
