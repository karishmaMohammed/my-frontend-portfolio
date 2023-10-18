import React, { useState } from 'react';
import FlipCard from 'reactjs-flip-card';
import userLogo from '../../assets/user-profile.png';
import './PortifolioSecond.css';

function PortifolioSecond() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardData = [
    {
      front: 'Intro',
      view: 'Intro',
    },
    {
      front: 'Skills',
      view: 'Skills',
    },
    {
      front: 'Education',
      view: 'Education',
    },
    {
      front: 'Projects',
      view: 'Projects',
    },
    {
      front: 'Work Status',
      view: 'Work Status',
    },
    {
      front: 'Contact Me',
      view: 'Contact Me',
    },
    // Add more cards as needed
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className='profile-details'>
        <img src={userLogo} alt="logo" />
        <span>Srinivas Muchu</span>
      </div>
      <div className='flipping-cards'>
        {cardData.map((item, index) => (
          <div key={index} className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{item.front}</h2>
              </div>
              <div className="flip-card-back">
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
