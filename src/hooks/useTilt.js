import { useRef, useCallback } from "react";

export const useTilt = (intensity = 15) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(10px)`;
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      ref.current.style.transition = "transform 0.5s ease";
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (ref.current) ref.current.style.transition = "transform 0.1s ease";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave, handleMouseEnter };
};
