import React,{useState} from 'react'
import './Intro.css'
import userLogo from '../../assets/user-profile.png';
import introLogo from '../../assets/intrologo.png'
import skillsLogo from '../../assets/skillslogo.png'
import educationLogo from '../../assets/educationlogo.png'
import experienceLogo from '../../assets/worklogo.png'
import projectLogo from '../../assets/projectslogo.png'
import contactLogo from '../../assets/contactlogo.png'
import tapToView from '../../assets/taptoview.png'
import download from '../../assets/download-resume.png'
import { useNavigate } from 'react-router-dom';

function Intro() {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate()
    const handleNavigate = (item) => {
       navigate(item)
     }
    const cardData = [
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
        
      ];

      const handleFlip = () => {
        setIsFlipped(!isFlipped);
      };
      
    return (
        <div className='intro-page'>
            <div className='intro-hello'>
                <span>Hey! I'm Srinivas </span>
            </div>
            <div className='intro-matter'>
                <span>Tell them your name, what your job is, and other important information about yourself, like the city you're based in.
                    You might be writing an introduction for a portfolio that shows off your marketing, writing, teaching, or construction skills.</span>
            </div>
            <div className='download-resume'>

                <button><img src={download}/>Resume</button>
            </div>
            <div className='intro-profile'>
                <img src={userLogo} alt=''/>
            </div>
            <div className='intro-flipping-cards'>
                {cardData.map((item, index) => (
                    <div key={index} className={`intro-flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                        <div className="intro-flip-card-inner">
                            <div className="intro-flip-card-front" style={{ background: item.frontColor }}>
                                <img src={item.frontLogo} style={{ width: '50px', height: '50px' }} />
                                <h2>{item.front}</h2>
                            </div>

                            <div className="intro-flip-card-back" style={{ background: item.backColor }} onClick={() => handleNavigate(item.navigateTo)}>

                                <img src={item.backLogo} style={{ width: '50px', height: '50px' }} />
                                <h2>click to view</h2>

                            </div>


                        </div>
                    </div>
                ))}
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Intro