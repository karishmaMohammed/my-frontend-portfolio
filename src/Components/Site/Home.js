import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SITE, STATS } from "../../content";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { CountUp, CursorFX, Reveal } from "./Motion";
import "./Site.css";

function Home({ profile }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
      return () => {
        window.removeEventListener("scroll", onScroll);
        clearTimeout(timer);
      };
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resume = SITE.resume;

  return (
    <>
      <CursorFX />
      <div className="site-atmosphere" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="spotlight" />
        <div className="grain" />
      </div>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Navbar resumeUrl={resume} />
      <Hero profile={profile} />
      <section className="wrap">
        <div className="stats">
          {STATS.map((stat, index) => (
            <Reveal className="stat" delay={index * 0.08} y={24} key={stat.label}>
              <CountUp to={stat.to} suffix={stat.suffix || ""} prefix={stat.prefix || ""} from={stat.from || 0} />
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact profile={profile} />
      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <span>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href={SITE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={`mailto:${profile?.email || SITE.email}`}>Email</a>
        </span>
      </footer>
    </>
  );
}

export default Home;
