import React from 'react';
import emailIcon from '../../assets/email-icon.png';
import linkedIn from '../../assets/linkedin_icon.png';
import gitHubLogo from '../../assets/github-icon.png';
import phoneNumber from '../../assets/phone-icon.png';
import linkIcon from '../../assets/Link-logo.png'
import backArrow from '../../assets/leftArrow.png'
import homeLogo from '../../assets/homeLogo.png'
import rightArrow from '../../assets/rightArrow.png'
import './Contact.css'


function Contact() {
  const cardData = [
    {
      name: 'Email',
      logo: emailIcon,
      color: '#d44638',
      link: 'srinivasmuchu14@gmail.com',
      userName:'srinivasmuchu14@gmail.com',
      view: 'mail'
    },
    {
      name: 'Linkedin',
      logo: linkedIn,
      color: '#3c94e4',
      link: 'https://www.linkedin.com/in/srinivas-muchu-7475b215b/',
      userName:'srinivas-muchu-7475b215b',
      view: 'view'
    },
    {
      name: 'Github',
      logo: gitHubLogo,
      color: '#999999',
      link: 'https://github.com/SrinivasMuchu',
      userName:'SrinivasMuchu',
      view: 'view'
    },
    {
      name: 'PhoneNumber',
      logo: phoneNumber,
      color: '#73c3f3',
      link: '9390333636',
      userName:'9390333636',
      view: 'call'
    },
    {
      name: 'Whatsapp',
      logo: phoneNumber,
      color: '#25d366',
      userName:'srinivasmuchu',
      link: "https://wa.me/9390333636?text=Hi%20I'm%20messaging%20you%20by%20seeing%20your%20portfolio",
      view: 'chat'
    },
  ];

  return (
    <div className='contact-page'>
      <div className='nav-to-home'>
        <a href='/'>
        <img src={backArrow} alt=''/>&nbsp;&nbsp;
        <img src={homeLogo} alt=''/>
        </a>      
      </div>
      <div className='contact-me'>
        <span >Contact Me</span>
      </div>
      <div className='contact-desc'>
        <span>Below are my contact details you can reach out to me</span>
      </div>
      <div className='flex-links'>
        {cardData.map((item, index) => (
          <div key={index} >

            <div className='logo-circle' style={{ background: item.color }} title={item.userName}>
              <img src={item.logo} alt={item.name} className='logo' />
              <span>{item.name}</span>
              {
                item.view === 'mail' ? (
                  <a href={`mailto:${item.link}`} target='_blank' className='link-style'>
                    <span >{item.view}</span>
                    <img src={linkIcon} alt='' className='link-logo' />
                  </a>
                ) : item.view === 'call' ? (
                  <a href={`tel:${item.link}`} target='_blank' className='link-style'>
                    <span >{item.view}</span>
                    <img src={linkIcon} alt='' className='link-logo' />
                  </a>
                ) : (
                  <a href={item.link} target='_blank' className='link-style'>
                    <span>{item.view}</span>
                    <img src={linkIcon} alt='' className='link-logo' />
                  </a>
                )
              }


            </div>
          </div>
        ))}
      </div>
      <div className='get-touch'>
        <a href='/get-in-touch' className='get-touch-link'>
        <span>Get in touch with me</span>
        <img src={rightArrow} alt=''/>
        </a>
       
      </div>
    </div>
  );
}

export default Contact;
