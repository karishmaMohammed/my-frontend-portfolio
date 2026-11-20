import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../content";
import { Reveal } from "./Motion";

function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <p className="kicker">03 — Selected work</p>
            <h2 className="section-title">Products with numbers behind them.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-aside">
              A live CAD platform, an enterprise PLM, and a production WhatsApp AI system, all in real use.
            </p>
          </Reveal>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <motion.article
              className={`project ${project.accent}`}
              key={project.name}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="project-index">0{index + 1}</div>
                <span className="project-cat">
                  {project.category} · {project.year}
                </span>
              </div>
              <div>
                <h3>{project.name}</h3>
                <p className="project-blurb">{project.blurb}</p>
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live product ↗
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
