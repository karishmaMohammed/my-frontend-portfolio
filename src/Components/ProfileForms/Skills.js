import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant";
import "./ProfileForms.css";
import Select from "react-select";

function Skills() {
  const [skillPhoto, setSkillsPhoto] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillDescription, setSkillDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedSkillType, setSelectedSkillType] = useState(null);
  const [skillType, setSkillType] = useState('');

  const options = [
    { value: "frontend", label: "frontend" },
    { value: "backend", label: "backend" },
    { value: "hoisting", label: "hoisting" },
  ];

  const handleChange = (selectedSkillType) => {
    setSelectedSkillType(selectedSkillType);
    setSkillType(selectedSkillType.value)
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
    // You can perform additional actions with the form data here
//   };

  const handleSkillsDetails = async () => {
    try {
      const skills = await axios.post(BASE_URL + "/skills/skills-details", {
        skillPhoto,
        skillName,
        skillDescription,
        projectDescription,
        skillType,
      });
      console.log(skills.data.data);
    } catch (error) {
      console.log(error);
    }
  };


//   console.log("Skills Photo:", skillPhoto);
//   console.log("Skill Name:", skillName);
// //   console.log("Skill Name:", skillType.value);
//   console.log("Skill Name:", skillDescription);
//   console.log("Skill Name:", projectDescription);

  return (
    <div className="profile-forms">
      <div className="profile-title">Skills</div>
      <br />
      <div className="profile-inputs">
        <div className="profile-span-input">
          <span>Skills Photo</span>
          <input
            type="text"
            value={skillPhoto}
            onChange={(e) => setSkillsPhoto(e.target.value)}
          />
        </div>
        <div className="profile-span-input">
          <span>Skill Name</span>
          <input
            type="text"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </div>
        <div className="profile-span-input">
          <span>Skill type</span>
          <Select
            className="react-select"
            value={selectedSkillType}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className="profile-span-input">
          <span>skill description</span>
          <textarea
            value={skillDescription}
            onChange={(e) => setSkillDescription(e.target.value)}
          />
        </div>
        <div className="profile-span-input">
          <span>project description</span>
          <textarea
            type="text"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <button onClick={handleSkillsDetails} className="profile-buttons">
          Submit Skills
        </button>
      </div>
    </div>
  );
}

export default Skills;
