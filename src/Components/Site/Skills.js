import React from "react";
import { motion } from "framer-motion";
import { SKILL_GROUPS, EDUCATION } from "../../content";
import { Reveal } from "./Motion";

function Skills() {
  return (
    <>
      <section className="section" id="skills">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="kicker">04 — Capabilities</p>
              <h2 className="section-title">A stack built for shipping systems.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-aside">
                Frontend craft, backend scale, cloud pipelines, and applied AI — used together, not collected as logos.
              </p>
            </Reveal>
          </div>
          <div className="skill-board">
            {SKILL_GROUPS.map((group, index) => (
              <motion.div
                className={`skill-group ${index === SKILL_GROUPS.length - 1 ? "skill-wide" : ""}`}
                key={group.title}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="education" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="kicker">05 — Education</p>
              <h2 className="section-title">Foundations.</h2>
            </Reveal>
          </div>
          <div className="edu-row">
            {EDUCATION.map((item, index) => (
              <motion.article
                className="edu-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                <p>{item.dates}</p>
                <span>{item.score}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
