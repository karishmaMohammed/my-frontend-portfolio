import React from 'react'
import './PortifolioFirst.css'
import userLogo from '../../assets/user-profile.png'


function PortifolioFirst() {
  return (
    <div className='my-portifolio-page'>
      <div className='portifolio-topNav'>
        <div className='portifolio-name'>
          <img src={userLogo} alt='logo' />
          <span>Srinivas Muchu</span>
        </div>
        <div className='portifolio-links'>
          <a href='/'><span>Intro</span></a>
          <a href='/'><span>skills</span></a>
          <a href='/'><span>education</span></a>
          <a href='/'><span>projects</span></a>
          <a href='/'><span>work status</span></a>
          <a href='/'><span>contact me</span></a>

        </div>
      </div>
    </div>
  )
}

export default PortifolioFirst