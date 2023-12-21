import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortifolioFirst from "./Components/Portifolio-first/PortifolioFirst";
import PortifolioSecond from "./Components/Portifolio-second/PortifolioSecond";
import Profile from "./Components/ProfileForms/Profile";
import Projects from "./Components/Projects/Projects";
import ProjectsForms from "./Components/ProfileForms/ProjectsForms";
import Skills from "./Components/ProfileForms/Skills";
import WorkStatus from "./Components/ProfileForms/WorkStatus";
import Intro from "./Components/Intoduction/Intro";
import Contact from "./Components/Contact/Contact";
import GetInTouch from "./Components/Contact/GetInTouch";
import Education from "./Components/Education/Education";
import AboutSkills from "./Components/Skills/AboutSkills";
import Experience from "./Components/Experience/Experience";
import axios from "axios";
import { BASE_URL } from "./Constant";

function App() {
  const [profileDetails, setProfileDetails] = useState({});
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      const profileDetails = await axios.get(
        BASE_URL + "/user/get-person-details"
      );
      setProfileDetails(profileDetails.data.data.user_details);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PortifolioSecond profileDetails={profileDetails}/>} />
          <Route path="/intro" element={<Intro profileDetails={profileDetails}/>} />
          <Route path="/skills" element={<AboutSkills />} />
          <Route path="/education" element={<Education profileDetails={profileDetails}/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact profileDetails={profileDetails}/>} />
          <Route path="/get-in-touch" element={<GetInTouch profileGetDetails={profileDetails}/>} />
          <Route
            path="/forms"
            element={
              <>
                <Profile />
                <Skills />
                <ProjectsForms />
                {/* <Projects />
              <Education /> */}
                <WorkStatus />
              </>
            }
          />
        </Routes>
      </Router>
      {/* <PortifolioFirst/> */}
      {/* <PortifolioSecond /> */}
      {/* <Profile/>
    <Skills/>
    <Projects/>
    <Education/>
    <WorkStatus/> */}
    </div>
  );
}

export default App;
