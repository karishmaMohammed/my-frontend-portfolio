import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { BASE_URL } from '../../Constant';
import { toast } from 'react-toastify';
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";

function GetInTouch({ profileDetails }) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const jobRoles = [
    'Frontend Developer',
    'Backend Developer',
    'FullStack Web Developer',
    'Reactjs Developer',
    'MERN Stack Developer'
  ];

  const toastStyle = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
  };

  const handleProjectDetails = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberPattern = /^\d{10}$/;
    if (!clientName) {
      toast.error("Please enter a valid name", toastStyle);
      return;
    }
    if (!emailPattern.test(clientEmail) || !clientEmail) {
      toast.error("Please enter a valid email address", toastStyle);
      return;
    }
    if (!phoneNumberPattern.test(clientPhoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number", toastStyle);
      return;
    }
    if (!clientMessage) {
      toast.error("Please fill message", toastStyle);
      return;
    }
    try {
      await axios.post(
        BASE_URL + "/client-contact/create-contact-details",
        {
          clientName,
          clientEmail,
          clientPhoneNumber,
          clientMessage
        }
      );
      toast.success("Thanks for reviewing my portfolio , I got your response", toastStyle);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      setClientEmail('');
      setClientMessage('');
      setClientName('');
      setClientPhoneNumber('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="get-in-touch-bg">
      <div className="get-in-touch-card">
        <button className="get-in-touch-back" onClick={handleBack} aria-label="Go back">
          {/* SVG Back Arrow */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e91e82" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="get-in-touch-title">{profileDetails.fullName || 'Your Name'}</h1>
        <div className="get-in-touch-typed">
          <Typed
            strings={jobRoles}
            typeSpeed={120}
            backSpeed={50}
            loop
          />
        </div>
        <div className="get-in-touch-info-bar">👁 Grateful you’re here to explore my portfolio. I craft fast, elegant, and user-friendly web interfaces.</div>
        <div className="get-in-touch-heading">Get In Touch</div>
        <form className="get-in-touch-form" onSubmit={e => { e.preventDefault(); handleProjectDetails(); }}>
          <div className="get-in-touch-field">
            <label>Name:</label>
            <input type="text" placeholder="Enter your Name" value={clientName} onChange={e => setClientName(e.target.value)} />
          </div>
          <div className="get-in-touch-field">
            <label>Email:</label>
            <input type="email" placeholder="Enter your Email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
          </div>
          <div className="get-in-touch-field">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" value={clientPhoneNumber} onChange={e => setClientPhoneNumber(e.target.value)} />
          </div>
          <div className="get-in-touch-field">
            <label>Message:</label>
            <textarea placeholder="Enter your Message...." value={clientMessage} onChange={e => setClientMessage(e.target.value)} />
          </div>
          {showMessage && (
            <div className="get-in-touch-success">Mail sent successfully! Please check your inbox.</div>
          )}
          <div className="get-in-touch-submit-row">
            <button className="get-in-touch-submit small" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;