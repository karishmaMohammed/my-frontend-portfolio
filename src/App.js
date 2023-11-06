
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortifolioFirst from './Components/Portifolio-first/PortifolioFirst';
import PortifolioSecond from './Components/Portifolio-second/PortifolioSecond';
import Education from './Components/ProfileForms/Education';
import Profile from './Components/ProfileForms/Profile';
import Projects from './Components/ProfileForms/Projects';
import Skills from './Components/ProfileForms/Skills';
import WorkStatus from './Components/ProfileForms/WorkStatus';
import Intro from './Components/Intoduction/Intro';
import Contact from './Components/Contact/Contact';
import GetInTouch from './Components/Contact/GetInTouch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PortifolioSecond />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/skills' element={<PortifolioSecond />} />
          <Route path='/education' element={<PortifolioSecond />} />
          <Route path='/projects' element={<PortifolioSecond />} />
          <Route path='/experience' element={<PortifolioSecond />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/get-in-touch' element={<GetInTouch />} />
          <Route path='/forms'
            element={<>
              <Profile />
              <Skills />
              <Projects />
              <Education />
              <WorkStatus />
            </>} />
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
