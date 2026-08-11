import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Constant";
import { SITE } from "../../content";

const toastStyle = {
  position: "top-right",
  autoClose: 2200,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
};

function Contact({ profile }) {
  const email = profile?.email || SITE.email;
  const linkedin = profile?.linkedin || SITE.linkedin;
  const github = profile?.github || SITE.github;

  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    clientPhoneNumber: "",
    clientMessage: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.clientName.trim()) return toast.error("Please enter your name", toastStyle);
    if (!emailPattern.test(form.clientEmail)) return toast.error("Please enter a valid email", toastStyle);
    if (!/^\d{10}$/.test(form.clientPhoneNumber)) {
      return toast.error("Please enter a valid 10-digit phone number", toastStyle);
    }
    if (!form.clientMessage.trim()) return toast.error("Please add a short message", toastStyle);

    try {
      setSending(true);
      await axios.post(`${BASE_URL}/client-contact/create-contact-details`, form);
      toast.success("Message received — I’ll get back to you shortly.", toastStyle);
      setSent(true);
      setForm({ clientName: "", clientEmail: "", clientPhoneNumber: "", clientMessage: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      toast.error("Could not send right now. Email me directly instead.", toastStyle);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="kicker">06 — Contact</p>
          <h2>Let’s build the next system together.</h2>
          <p>
            Open to senior full-stack, platform, and AI-product roles. If you have a messy workflow that needs software —
            or a product that needs to scale — write to me.
          </p>
          <div className="contact-ways">
            <a href={`mailto:${email}`}>
              <span>{email}</span>
              <small>Email</small>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <span>linkedin.com/in/karishma-mohammed</span>
              <small>LinkedIn</small>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <span>github.com/karishmaMohammed</span>
              <small>GitHub</small>
            </a>
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" value={form.clientName} onChange={onChange("clientName")} placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.clientEmail} onChange={onChange("clientEmail")} placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" value={form.clientPhoneNumber} onChange={onChange("clientPhoneNumber")} placeholder="10-digit number" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={form.clientMessage} onChange={onChange("clientMessage")} placeholder="What are you building?" />
          </div>
          {sent && <div className="form-success">Sent. Check your inbox for a confirmation.</div>}
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
