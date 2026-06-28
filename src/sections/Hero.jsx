import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Ring } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const AIBrain = () => (
  <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
    <group>
      {/* Core orb */}
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
          emissive="#00d4ff"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Energy rings */}
      {[1.8, 2.4, 3.0].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.4, 0, i * 0.6]}>
          <torusGeometry args={[r, 0.015, 8, 80]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#00d4ff" : "#6C63FF"} transparent opacity={0.6 - i * 0.15} />
        </mesh>
      ))}

      {/* Orbiting particles */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 2.2;
        return (
          <mesh key={`p-${i}`} position={[Math.cos(angle) * r, Math.sin(angle * 0.5) * 0.5, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color={i % 3 === 0 ? "#6C63FF" : "#00d4ff"} />
          </mesh>
        );
      })}
    </group>
  </Float>
);

const Hero = () => {
  const typedText = useTypingEffect(
    ["AI/ML Engineer", "NLP Researcher", "Agentic AI Enthusiast", "Future AI Startup Founder"],
    80, 2200
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-10 opacity-90">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
            <pointLight position={[-5, -5, -5]} intensity={0.8} color="#6C63FF" />
            <Stars radius={80} depth={40} count={3000} factor={3} fade speed={1} />
            <AIBrain />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs tracking-widest text-cyan-400 uppercase mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-cyan-400" />
            IIT Bombay · AI Researcher
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05 }}
          >
            <span className="text-white">Abhinav</span>
            <br />
            <span className="gradient-text">Cheepa</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-lg text-slate-300 mb-6 h-8"
          >
            {typedText}<span className="typing-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg"
          >
            Building intelligent AI systems that solve real-world problems.
            Publishing research on multilingual NLP while architecting the next
            generation of Agentic AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 font-mono text-sm font-bold tracking-widest transition-all"
            >
              View Projects →
            </motion.a>
            <motion.a
              href="mailto:abhinavcheepa7@gmail.com"
              whileHover={{ scale: 1.05, borderColor: "#00d4ff", color: "#00d4ff" }}
              className="px-7 py-3 border border-slate-600 text-slate-300 font-mono text-sm tracking-widest transition-all hover:bg-cyan-500/5"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 mt-16 pt-8 border-t border-slate-800"
          >
            {[
              { num: "ACL", label: "Conference Target" },
              { num: "237M", label: "Model Parameters" },
              { num: "17", label: "POS Tag Classes" },
              { num: "IIT-B", label: "Institution" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-mono font-bold text-cyan-400 text-lg">{s.num}</div>
                <div className="font-mono text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</div>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
