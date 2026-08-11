import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV, SITE } from "../../content";

function Navbar({ resumeUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = NAV.map((item) => item.id);
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav-links">
          {NAV.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${active === item.id ? "is-active" : ""}`}
              onClick={() => go(item.id)}
            >
              {active === item.id && <motion.span className="nav-pill" layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              <span>{item.label}</span>
            </button>
          ))}
          <a className="nav-link nav-cta" href={resumeUrl || SITE.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
        <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </header>
      {open && (
        <div className="drawer">
          {NAV.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
          <a href={resumeUrl || SITE.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
