import React, { useState, useEffect } from "react";
import "./AboutSkills.css";
import { ASSETS_URL, BASE_URL } from "../../Constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Tilt } from 'react-parallax-tilt';
import Tilt from "react-parallax-tilt";
import BottomRoute from "../BottomRoute";

const data = [
  {
    id: 1,
    name: "React.js",
    description: "Description 1",
    photo: `${ASSETS_URL}react-logo.png`,
    type: "front",
  },
  {
    id: 2,
    name: "CSS",
    description: "Description 2",
    photo: `${ASSETS_URL}css-logo.png`,
    type: "front",
  },
  {
    id: 3,
    name: "HTML",
    description: "Description 3",
    photo: `${ASSETS_URL}html-logo.png`,
    type: "front",
  },
  {
    id: 4,
    name: "JavaScript",
    description: "Description 4",
    photo: `${ASSETS_URL}js-logo.png`,
    type: "front",
  },
  {
    id: 5,
    name: "Bootstrap",
    description: "Description 5",
    photo: `${ASSETS_URL}bootstrap-logo.png`,
    type: "front",
  },
  {
    id: 6,
    name: "MUI",
    description: "Description 6",
    photo: `${ASSETS_URL}mui-logo.png`,
    type: "front",
  },
  {
    id: 7,
    name: "Redux",
    description: "Description 7",
    photo: `${ASSETS_URL}redux-logo.png`,
    type: "front",
  },
  {
    id: 8,
    name: "React-D3-tree",
    description: "Description 8",
    photo: `${ASSETS_URL}d3-icon.jpeg`,
    type: "front",
  },
  {
    id: 9,
    name: "Node.js",
    description: "Description 9",
    photo: `${ASSETS_URL}node-js-logo.png`,
    type: "back",
  },
  {
    id: 10,
    name: "Express.js",
    description: "Description 10",
    photo: `${ASSETS_URL}express-js.png`,
    type: "back",
  },
  {
    id: 11,
    name: "Reast API",
    description: "Description 11",
    photo: `${ASSETS_URL}rest-api-logo.png`,
    type: "back",
  },
  {
    id: 12,
    name: "MongoDb",
    description: "Description 12",
    photo: `${ASSETS_URL}mongodb-logo.png`,
    type: "back",
  },
  {
    id: 13,
    name: "DSA",
    description: "Description 13",
    photo: `${ASSETS_URL}dsa-logo.jpeg`,
    type: "front",
  },
  {
    id: 14,
    name: "Github",
    description: "Description 14",
    photo: `${ASSETS_URL}github-logo.png`,
    type: "host",
  },
  {
    id: 15,
    name: "Vercel",
    description: "Description 15",
    photo: `${ASSETS_URL}vercelLogo.png`,
    type: "host",
  },
  {
    id: 16,
    name: "Netlify",
    description: "Description 16",
    photo: `${ASSETS_URL}netlifyLogo.png`,
    type: "host",
  },

  // Add more items as needed
];

function AboutSkills() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState(null);
  const [skills, setSkills] = useState([]);

  const handleDragStart = (item) => {
    setDraggedItem(item);
    console.log(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    setDroppedItem(draggedItem);
    setDraggedItem(null);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(item);
  };

  const cardData = [
    {
      front: "intro",
      view: "intro",
      frontColor: "#ffac7f ",
      backColor: "#ffcfa3",
      frontLogo: `${ASSETS_URL}intrologo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/intro",
    },
    {
      front: "Education",
      view: "Education",
      frontColor: "#7ad7f0 ",
      backColor: "#b7e9f7",
      frontLogo: `${ASSETS_URL}educationlogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/education",
    },
    {
      front: "Projects",
      view: "Projects",
      frontColor: "#ff3333",
      backColor: "#ff6666",
      frontLogo: `${ASSETS_URL}projectslogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/projects",
    },
    {
      front: "Experience",
      view: "Experience",
      frontColor: "#af7fcd",
      backColor: "#c39fd9",
      frontLogo: `${ASSETS_URL}worklogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/experience",
    },
    {
      front: "Contact",
      view: "Contact",
      frontColor: "#39e75f",
      backColor: "#83f28f",
      frontLogo: `${ASSETS_URL}contactlogo.png`,
      backLogo: `${ASSETS_URL}taptoview.png`,
      navigateTo: "/contact",
    },
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    getSkillsDetails();
  }, []);

  const getSkillsDetails = async () => {
    try {
      const allSkills = await axios.get(BASE_URL + "/skills/get-skills");
      // setExperiance(allExperianceDetails.data.data.all_experiance);
      setSkills(allSkills.data.data.skills_details);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="skills-page">
        <div
          // style={{
          //   display: 'flex',
          //   justifyContent: 'space-around',
          // }}
          className="skills-items"
        >
          {/* <span>Front end skills</span><br/> */}
          <div className="vertical-align">
            <span className="skill-heading">FrontEnd Skills</span>
            <div className="dragging-items">
              {skills
                .filter((item) => item.skillType === "frontend")
                .map((item, id) => (
                  <>
                    <Tilt
                      tiltReverse={true} // Set this to true if you want the tilt effect to be reversed
                      tiltMaxAngleX={30}
                      tiltMaxAngleY={30}
                      glareEnable={true}
                    >
                      <div
                        key={id}
                        draggable
                        className="items-dragging"
                        onDragStart={() => handleDragStart(item)}
                      >
                        <img src={item.skillPhoto} alt="" />
                        <span>{item.skillName}</span>
                      </div>
                    </Tilt>
                  </>
                ))}
            </div>
            <span className="skill-heading">BackEnd Skills</span>
            <div className="dragging-items">
              {skills
                .filter((item) => item.skillType === "backend")
                .map((item) => (
                  <>
                    <Tilt
                      tiltReverse={true} // Set this to true if you want the tilt effect to be reversed
                      tiltMaxAngleX={30}
                      tiltMaxAngleY={30}
                      glareEnable={true}
                    >
                      <div
                        key={item.id}
                        draggable
                        className="items-dragging"
                        onDragStart={() => handleDragStart(item)}
                      >
                        <img src={item.skillPhoto} alt="" />
                        <span>{item.skillName}</span>
                      </div>
                    </Tilt>
                  </>
                ))}
            </div>
            <span className="skill-heading">Hoisting Websites</span>
            <div className="dragging-items">
              {skills
                .filter((item) => item.skillType === "hoisting")
                .map((item) => (
                  <>
                    <Tilt
                      tiltReverse={true} // Set this to true if you want the tilt effect to be reversed
                      tiltMaxAngleX={30}
                      tiltMaxAngleY={30}
                      glareEnable={true}
                    >
                      <div
                        key={item.id}
                        draggable
                        className="items-dragging"
                        onDragStart={() => handleDragStart(item)}
                      >
                        <img src={item.skillPhoto} alt="" />
                        <span>{item.skillName}</span>
                      </div>
                    </Tilt>
                  </>
                ))}
            </div>
          </div>
          <div className="drag-img">
            <img src={`${ASSETS_URL}draganddropgif.gif`} alt="" />
          </div>

          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="dropping-items"
          >
            <div className="dropped-head">
              <h2>Drag and Drop skill to view more.</h2>
            </div>
            <div className="dropping-div">
              {droppedItem ? (
                <div className="dropped-desc">
                  <h3>Dropped Item:{droppedItem.skillName}</h3>
                  {/* <p>Name: {droppeditem.skillName}</p> */}
                  <div className="dropped-img-span">
                    <img
                      src={droppedItem.skillPhoto}
                      width="40px"
                      height="40px"
                    />
                    {/* <span>{droppedItem.name}</span> */}
                  </div>

                  <p>
                    Description:{" "}
                    {droppedItem.skillDescription.map((item, id) => (
                      <ul key={id}>
                        <li>{item}</li>
                      </ul>
                    ))}
                    <li>
                      <span>
                        drag and drop the skill to know more about my knowledge
                      </span>
                    </li>
                    <li>
                      <span>
                        drag and drop the skill to know more about my knowledge
                      </span>
                    </li>
                    <li>
                      <span>
                        drag and drop the skill to know more about my knowledge
                      </span>
                    </li>
                  </p>
                </div>
              ) : (
                <div className="drop-content">
                  <span>
                    drag and drop the skill to know more about my knowledge.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="horizonLine"> </div>

      <BottomRoute data={cardData} />
    </div>
  );
}

export default AboutSkills;
