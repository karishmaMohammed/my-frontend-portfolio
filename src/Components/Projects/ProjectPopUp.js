import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import { ASSETS_URL } from "../../Constant";
import ReactPlayer from "react-player";

function ProjectPopUp({ projectName, onclose }) {
  const nav = useNavigate();

  // Function to format the date to MM-DD-YYYY
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const handleGithubLink = () => {
    nav(projectName.repoLink);
  };

  return (
    <div className="proj-pop-up" onClick={onclose}>
      <div className="proj-pop-div" onClick={(e) => e.stopPropagation()}>
        <div className="project-close-div">
          <span>Project Description</span>
          <img src={`${ASSETS_URL}close_icon.png`} alt="" onClick={onclose} />
        </div>
        <div className="project-vide">
          <img src={projectName.projectPhoto} alt="" />
          <div className="horizontallone"></div>
          <div className="video-div">
            <ReactPlayer
              url={projectName.projectVideo}
              playing={false}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="project-name-span">
          <span className="heading-styles">{projectName.projectName}</span>
        </div>
        <div className="proj-dates">
          <div className="proj-start">
            <span className="proj-start-text">Start :</span>
            <span>{formatDate(projectName.startDate)}</span>
          </div>
          &nbsp; &nbsp; - &nbsp; &nbsp;
          <div className="proj-end">
            <span className="proj-start-text">End :</span>
            {projectName.present === true ? (
              <span>Present</span>
            ) : (
              <span>{formatDate(projectName.endDate)}</span>
            )}
          </div>
        </div>

        <div className="project-skills">
          <span className="heading-styles">Tech Stack :</span>
          <span>{projectName.techStack.join(', ')}</span>
        </div>
        <div className="project-desc-span">
          <span className="heading-styles">description</span>
          {projectName.projectDescription.map((item, id) => (
            <div key={id}>
              <li>{item}</li>
            </div>
          ))}
        </div>
        <div className="project-links">
          <a href={projectName.repoLink} target="_blank" className="anchor">
            repo Link
            <img src={`${ASSETS_URL}github-link.png`} alt="" />
          </a>
          <a href={projectName.demoLink} target="_blank" className="anchor">
            live Link
            <img src={`${ASSETS_URL}live_link.png`} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopUp;
