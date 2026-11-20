import React from "react";
import { PRINCIPLES, SITE } from "../../content";
import { Reveal } from "./Motion";

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <p className="kicker">01 — About</p>
            <h2 className="section-title">The engineer behind the systems.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-aside">
              One of two engineers owning products end to end: architecture, backend, frontend, DevOps, and payments.
            </p>
          </Reveal>
        </div>
        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              I turn hard engineering workflows, like CAD conversion and technical drawings, into products people pay for.
            </p>
            <p className="about-body">{SITE.summary}</p>
            <p className="about-body">
              I've built CAD processing pipelines that have handled 20,000+ files, and PLM/PDM platforms serving
              100–500 enterprise hardware clients.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <aside className="about-panel">
              <h3>At a glance</h3>
              <ul className="about-list">
                <li>
                  <b>Focus</b>
                  <span>SaaS products, CAD pipelines, applied AI</span>
                </li>
                <li>
                  <b>Stack</b>
                  <span>React, Next.js, Node, MongoDB, Kafka, Docker</span>
                </li>
                <li>
                  <b>AI</b>
                  <span>Anthropic, OpenAI, vision models, RAG, n8n</span>
                </li>
                <li>
                  <b>CAD</b>
                  <span>FreeCAD, Open CASCADE, STEP/mesh processing</span>
                </li>
                <li>
                  <b>Based</b>
                  <span>{SITE.location}</span>
                </li>
                <li>
                  <b>Now</b>
                  <span>Senior Full-Stack Developer at Marathon-OS</span>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
        <div className="principles">
          {PRINCIPLES.map((item, index) => (
            <Reveal className="principle" delay={index * 0.08} y={24} key={item.title}>
              <span className="principle-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
