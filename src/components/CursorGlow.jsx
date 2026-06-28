import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  useEffect(() => {
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: "fixed", width: 8, height: 8, borderRadius: "50%",
        background: "#00d4ff", transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9999, mixBlendMode: "screen",
        transition: "width 0.2s, height 0.2s",
      }} />
      <div ref={ringRef} style={{
        position: "fixed", width: 36, height: 36, borderRadius: "50%",
        border: "1px solid rgba(0,212,255,0.5)",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9998,
      }} />
    </>
  );
};

export default CursorGlow;
