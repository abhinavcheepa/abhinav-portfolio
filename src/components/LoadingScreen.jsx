import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 600); }, 300);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="loading-screen flex-col gap-8"
        >
          {/* Neural brain SVG */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative w-24 h-24"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#00d4ff22" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#6C63FF22" strokeWidth="1" />
              {[0,60,120,180,240,300].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x = 50 + 45 * Math.cos(rad);
                const y = 50 + 45 * Math.sin(rad);
                return (
                  <motion.circle
                    key={i}
                    cx={x} cy={y} r="3"
                    fill="#00d4ff"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                );
              })}
              <circle cx="50" cy="50" r="6" fill="#00d4ff" />
            </svg>
          </motion.div>

          <div className="text-center">
            <div className="font-mono text-cyan-400 text-sm tracking-widest mb-2">
              INITIALIZING AI INTERFACE
            </div>
            <div className="font-mono text-slate-500 text-xs tracking-widest mb-6">
              abhinav.cheepa — nlp researcher
            </div>
            <div className="w-64 h-0.5 bg-slate-800 relative overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="font-mono text-xs text-slate-600 mt-2">
              {Math.min(Math.floor(progress), 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
