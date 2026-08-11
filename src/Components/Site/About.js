import React from "react";
import { SITE } from "../../content";
import { Reveal } from "./Motion";

function About() {
  const about = SITE.summary;

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
              End-to-end product ownership — from architecture and APIs to 3D visualisation and AI workflows.
            </p>
          </Reveal>
        </div>
        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              I build products that turn complex engineering workflows into software people actually ship with.
            </p>
            <p className="about-body">{about}</p>
            <p className="about-body">
              Lately that means event-driven CAD pipelines, PLM platforms, payment and storage integrations, and AI systems that sit inside real operations — not demos.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
          <aside className="about-panel">
            <h3>At a glance</h3>
            <ul className="about-list">
              <li>
                <b>Focus</b>
                <span>SaaS platforms, CAD infra, AI automation</span>
              </li>
              <li>
                <b>Stack</b>
                <span>React, Next.js, Node, MongoDB, Kafka, Docker</span>
              </li>
              <li>
                <b>AI</b>
                <span>OpenAI, Anthropic, RAG, WhatsApp bots, n8n</span>
              </li>
              <li>
                <b>Based</b>
                <span>{SITE.location}</span>
              </li>
              <li>
                <b>Now</b>
                <span>Senior MERN at Marathon-OS</span>
              </li>
            </ul>
          </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
