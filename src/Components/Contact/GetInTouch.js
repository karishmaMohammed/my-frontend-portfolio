import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import axios from "axios";
import { ASSETS_URL,BASE_URL } from '../../Constant';
import { useNavigate } from "react-router-dom";


function GetInTouch({profileGetDetails}) {
  const [profileDetails, setProfileDetails] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      const profileDetails = await axios.get(
        BASE_URL + "/user/get-person-details"
      );
      
      setProfileDetails(profileDetails.data.data.user_details.designations);
      setProfilePhoto(profileDetails.data.data.user_details.photo)
      setFullName(profileDetails.data.data.user_details.fullName)
    } catch (error) {
      console.log(error);
    }
  };
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };
 

  return (
    <div className="get-in-touch">
      <div className="contact-profile">
        <div className="back-icon-btn" onClick={handleBack}>
          <img
            src={`${ASSETS_URL}leftArrow.png`}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <span>Back</span>
        </div>
        <img src={profilePhoto} alt="" className="profile-logo-contact" />
        <br />
        <span className="userName">{fullName}</span>

        <span className="input-typing">
          <Typed strings={profileDetails} typeSpeed={150} backSpeed={40} loop />
        </span>
      </div>
      <div className="form-page">
        <div className="heading-get-touch">
          <span>Get In Touch</span>
        </div>
        <div className="form">
          <form className="form-box">
            <div className="individual-input">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div className="individual-input">
              <label>Email:</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="individual-input">
              <label>Phone Number:</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="individual-input">
              <label>Message:</label>
              <textarea placeholder="Enter your Message...." />
            </div>
            <div className="individual-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
