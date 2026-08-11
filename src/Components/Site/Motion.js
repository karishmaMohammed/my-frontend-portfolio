import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, className = "", y = 36 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ to, suffix = "", prefix = "", from = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let start;
    const duration = 1400;
    const tick = (time) => {
      if (!start) start = time;
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, to, from]);

  return (
    <b ref={ref}>
      {prefix}
      {value}
      {suffix}
    </b>
  );
}

export function Magnetic({ children, className = "", strength = 18 }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div className={`magnetic ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={ref} className="magnetic-inner">
        {children}
      </div>
    </div>
  );
}

export function CursorFX() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-80);
  const y = useMotionValue(-80);
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      document.documentElement.style.setProperty("--spot-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spot-y", `${event.clientY}px`);
    };
    const over = (event) => {
      const hit = event.target.closest("a, button, .project, .exp-card, .skill-group, .stat");
      setActive(Boolean(hit));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className={`cursor-dot ${active ? "is-active" : ""}`} style={{ x, y }} />
      <motion.div className={`cursor-ring ${active ? "is-active" : ""}`} style={{ x: springX, y: springY }} />
    </>
  );
}
