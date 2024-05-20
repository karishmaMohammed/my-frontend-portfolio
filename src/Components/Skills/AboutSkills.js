import React, { useState, useEffect } from "react";
import "./AboutSkills.css";
import { ASSETS_URL, BASE_URL } from "../../Constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Tilt } from 'react-parallax-tilt';
import Tilt from "react-parallax-tilt";
import BottomRoute from "../BottomRoute";


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
            <span className="skill-heading">Learning Skills</span>
            <div className="dragging-items">
              {skills
                .filter((item) => item.skillType === "learning skills")
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
                  <h3>Dropped Item: {droppedItem.skillName}</h3>
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
                      <div key={id}>
                        <li>{item}</li>
                      </div>
                    ))}
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
