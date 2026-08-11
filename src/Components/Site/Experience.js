import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, YEARS_EXPERIENCE } from "../../content";
import { Reveal } from "./Motion";

function Experience() {
  const yearsExperience = YEARS_EXPERIENCE;
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <p className="kicker">02 — Experience</p>
            <h2 className="section-title">Shipped in production, not just on slides.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-aside">
              Promoted from intern to senior at Marathon-OS. {yearsExperience}+ years owning enterprise SaaS used by hardware teams.
            </p>
          </Reveal>
        </div>
        <div className="exp-list">
          {EXPERIENCE.map((job, index) => (
            <motion.article
              className="exp-card"
              key={`${job.role}-${job.start}`}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <a className="exp-company" href={job.url} target="_blank" rel="noreferrer">
                    {job.company} · {job.location}
                  </a>
                  {job.current && <div className="badge">Current</div>}
                </div>
                <div className="exp-when">
                  {job.start} — {job.end}
                </div>
              </div>
              <p className="exp-summary">{job.summary}</p>
              <ul className="exp-points">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
