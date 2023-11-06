import React, { useState } from 'react';
import FlipCard from 'reactjs-flip-card';
import userLogo from '../../assets/user-profile.png';
import './PortifolioSecond.css';
import introLogo from '../../assets/intrologo.png'
import skillsLogo from '../../assets/skillslogo.png'
import educationLogo from '../../assets/educationlogo.png'
import experienceLogo from '../../assets/worklogo.png'
import projectLogo from '../../assets/projectslogo.png'
import contactLogo from '../../assets/contactlogo.png'
import tapToView from '../../assets/taptoview.png'
import { useNavigate } from 'react-router-dom';

function PortifolioSecond() {
  const [isFlipped, setIsFlipped] = useState(false);

  const navigate = useNavigate()
  const cardData = [
    {
      front: 'Introduction',
      view: 'Introduction',
      frontColor: '#fff560',
      backColor: '#fff895',
      frontLogo: introLogo,
      backLogo: tapToView,
      navigateTo: '/intro'
    },
    {
      front: 'Skills',
      view: 'Skills',
      frontColor: '#ffac7f ',
      backColor: '#ffcfa3',
      frontLogo: skillsLogo,
      backLogo: tapToView,
      navigateTo: '/skills'
    },
    {
      front: 'Education',
      view: 'Education',
      frontColor: '#7ad7f0 ',
      backColor: '#b7e9f7',
      frontLogo: educationLogo,
      backLogo: tapToView,
      navigateTo: '/education'
    },
    {
      front: 'Projects',
      view: 'Projects',
      frontColor: '#ff3333',
      backColor: '#ff6666',
      frontLogo: projectLogo,
      backLogo: tapToView,
      navigateTo: '/projects'
    },
    {
      front: 'Experience',
      view: 'Experience',
      frontColor: '#af7fcd',
      backColor: '#c39fd9',
      frontLogo: experienceLogo,
      backLogo: tapToView,
      navigateTo: '/experience'
    },
    {
      front: 'Contact',
      view: 'Contact',
      frontColor: '#39e75f',
      backColor: '#83f28f',
      frontLogo: contactLogo,
      backLogo: tapToView,
      navigateTo: '/contact'
    },
    // Add more cards as needed
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNavigate = (item) => {
    navigate(item)
  }
  return (
    <div className='main-div'>
      <div className='profile-details'>
        <img src={userLogo} alt="logo" />
        <span className='firstname'>Srinivas <span className='lastName'>Muchu</span></span>
      </div>

      <div className='flipping-cards'>
        {cardData.map((item, index) => (
          <div key={index} className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ background: item.frontColor }}>
                <img src={item.frontLogo} style={{ width: '50px', height: '50px' }} />
                <h2>{item.front}</h2>
              </div>

              <div className="flip-card-back" style={{ background: item.backColor }} onClick={() => handleNavigate(item.navigateTo)}>

                <img src={item.backLogo} style={{ width: '50px', height: '50px' }} />
                <h2>Click to view my {item.view}</h2>

              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortifolioSecond;
