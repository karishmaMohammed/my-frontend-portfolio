import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "../../content";
import { Magnetic } from "./Motion";

const ease = [0.22, 1, 0.36, 1];

function Hero({ profile }) {
  const photo = profile?.photo || SITE.photo;
  const resume = profile?.resume || SITE.resume;
  const name = SITE.name;
  const letters = SITE.firstName.split("");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onPortraitMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <section className="wrap hero">
      <div>
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="pulse" />
          {SITE.availability}
        </motion.div>
        <h1 className="hero-title">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="hero-letter"
              initial={{ y: "110%", rotate: 8, opacity: 0 }}
              animate={{ y: "0%", rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.12 + index * 0.045, ease }}
            >
              {letter}
            </motion.span>
          ))}
          <span className="hero-letter-space" />
          <motion.em
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5, ease }}
          >
            {SITE.lastName}
          </motion.em>
        </h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
        >
          {SITE.role}. {SITE.tagline}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease }}
        >
          <Magnetic>
            <button className="btn btn-primary" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
              View selected work
            </button>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
          </Magnetic>
        </motion.div>
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span>{SITE.headline}</span>
        </motion.div>
      </div>
      <motion.div
        className="portrait"
        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 1.06 }}
        animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)", scale: 1 }}
        transition={{ duration: 1.15, delay: 0.2, ease }}
        onMouseMove={onPortraitMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div
          className="portrait-frame"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <img src={photo} alt={name} />
          <div className="portrait-cap">
            <strong>{name}</strong>
            <span>{SITE.role}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
