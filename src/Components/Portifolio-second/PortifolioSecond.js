import React from 'react';
import { ASSETS_URL } from '../../Constant';
import './PortifolioSecond.css';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';

function PortifolioSecond({ profileDetails }) {
  const navigate = useNavigate();

  const arrayOfList = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Web Developer',
    'Reactjs Developer',
    'MERN Stack Developer'
  ];

  const cardData = [
    {
      icon: '💡',
      title: 'Introduction',
      navigateTo: '/intro',
    },
    {
      icon: '🛠️',
      title: 'Skills',
      navigateTo: '/skills',
    },
    {
      icon: '🎓',
      title: 'Education',
      navigateTo: '/education',
    },
    {
      icon: '💻',
      title: 'Projects',
      navigateTo: '/projects',
    },
    {
      icon: '📈',
      title: 'Experience',
      navigateTo: '/experience',
    },
    {
      icon: '📞',
      title: 'Contact',
      navigateTo: '/contact',
    },
  ];

  const handleNavigate = (item) => {
    navigate(item);
  };

  return (
    <div className='main-div portfolio-bg'>
      <div className='portfolio-header'>
        <div className='portfolio-header-left'>
          <div className='portfolio-greeting'>
            <span role="img" aria-label="wave">👋</span> Hai! I'm
          </div>
          <div className='portfolio-name'>
            {profileDetails.fullName}
          </div>
          <div className='portfolio-typed'>
            <Typed
              strings={arrayOfList}
              typeSpeed={140}
              backSpeed={50}
              loop
            />
          </div>
          {/* <div className='portfolio-title'>
            Frontend Developer <span className='divider'>|</span> UI Enthusiast
          </div> */}
          <div className='portfolio-tagline'>
            <span role="img" aria-label="rocket">💻</span> I build full-stack web applications using the MERN stack, combining clean frontend interfaces
            with robust backend logic.I'm always eager to learn new technologies and grow as a developer.
          </div>
          <div className='portfolio-buttons'>
            <a href={profileDetails.resume} className='btn btn-primary' download>Download Resume</a>
            <button className='btn btn-outline' onClick={() => navigate('/contact')}>Contact Me</button>
          </div>
        </div>
        <div className='portfolio-header-right'>
          <div className='profile-image-wrapper'>
            <img src={profileDetails.photo} alt="Profile" className='profile-image' />
          </div>
        </div>
      </div>
      <div className='portfolio-cards-grid'>
        {cardData.map((item, index) => (
          <div key={index} className='portfolio-card' onClick={() => handleNavigate(item.navigateTo)}>
            <div className='portfolio-card-icon'>{item.icon}</div>
            <div className='portfolio-card-title'>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortifolioSecond;