import React from 'react'
import './Contact.css'
import userLogo from '../../assets/user-profile.png';

function GetInTouch() {
  return (
    <div className='get-in-touch'>
        <div className='contact-profile'>
            <img src={userLogo} alt=''className='profile-logo-contact'/><br/>
            <span className='userName'>Srinivas</span>
            <span>developer</span>
        </div>
        <div className='form-page'>
            <div className='heading-get-touch'>
                <span>Get In Touch</span>
            </div>
            <div className='form'>
            <form className='form-box'>
                <div className='individual-input'>
                <label>Name</label>
                <input type='text' placeholder='Enter your Name'/>
                </div>
                <div className='individual-input'>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter your Email'/>
                </div>
                <div className='individual-input'>
                    <label>Phone Number:</label>
                    <input type='tel' placeholder='Enter your phone number'/>
                </div>
                <div className='individual-input'>
                    <label>Message:</label>
                    <textarea placeholder='Enter your Message....'/>
                </div>
                <div className='individual-btn'>
                <button>Submit</button>
                </div>
            </form>
            </div>
           
        </div>
    </div>
  )
}

export default GetInTouch