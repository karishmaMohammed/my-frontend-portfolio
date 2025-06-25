import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import { Helmet } from "react-helmet-async";
import Loading from "./Components/Loading/Loading";
import axios from "axios";
import { BASE_URL } from "./Constant";

// Lazy imports for code splitting
const PortifolioSecond = React.lazy(() => import("./Components/Portifolio-second/PortifolioSecond"));
const Profile = React.lazy(() => import("./Components/ProfileForms/Profile"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));
const ProjectsForms = React.lazy(() => import("./Components/ProfileForms/ProjectsForms"));
const Skills = React.lazy(() => import("./Components/ProfileForms/Skills"));
const WorkStatus = React.lazy(() => import("./Components/ProfileForms/WorkStatus"));
const Intro = React.lazy(() => import("./Components/Intoduction/Intro"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const GetInTouch = React.lazy(() => import("./Components/Contact/GetInTouch"));
const Education = React.lazy(() => import("./Components/Education/Education"));
const AboutSkills = React.lazy(() => import("./Components/Skills/AboutSkills"));
const Experience = React.lazy(() => import("./Components/Experience/Experience"));

function App() {
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      setLoading(true);
      const profileDetails = await axios.get(
        BASE_URL + "/user/get-person-details"
      );
      setProfileDetails(profileDetails.data.data.user_details);
      updateFavicon(profileDetails.data.data.user_details.photo);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFavicon = (photoUrl) => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = photoUrl; // Use the photo URL as the favicon
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="icon" href="/custom-favicon.ico" />
          <title>{`${
            profileDetails.fullName || "Your Website"
          } - My Portfolio`}</title>
          <meta
            name="keywords"
            content="portfolio, react, web development,karishma muhammed,karishma muhammed portifolio"
          />
          <meta name="author" content="Karishma" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph meta tags */}
          <meta
            property="og:title"
            content={`${
              profileDetails.fullName || "Your Website"
            } - My Portfolio`}
          />
          <meta
            property="og:description"
            content={`Check out the portfolio of ${profileDetails.fullName}.`}
          />
          <meta property="og:image" content={profileDetails.photo} />
          <meta property="og:url" content="https://www.yourportfolio.com" />
          <meta name="og:site_name" content="Your Portfolio Site" />
          <meta property="og:type" content="website" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${
              profileDetails.fullName || "Your Website"
            } - My Portfolio`}
          />
          <meta
            name="twitter:description"
            content={`Check out the portfolio of ${profileDetails.fullName}.`}
          />
          <meta name="twitter:image" content={profileDetails.photo} />
          <meta name="twitter:site" content="@yourtwitterhandle" />

          {/* Mobile-specific meta tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta
            name="apple-mobile-web-app-title"
            content={`${profileDetails.fullName || "Your Website"}`}
          />
          <link rel="apple-touch-icon" href={profileDetails.photo} />

          {/* Favicon */}
          <link rel="icon" href={profileDetails.photo} />

          {/* Manifest file for Progressive Web App (PWA) */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Helmet>
        <>
          {loading ? (
            <Loading />
          ) : (
            <Router>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route
                    path="/"
                    element={<PortifolioSecond profileDetails={profileDetails} />}
                  />
                  <Route
                    path="/intro"
                    element={<Intro profileDetails={profileDetails} />}
                  />
                  <Route path="/skills" element={<AboutSkills />} />
                  <Route
                    path="/education"
                    element={<Education profileDetails={profileDetails} />}
                  />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route
                    path="/contact"
                    element={<Contact profileDetails={profileDetails} />}
                  />
                  <Route
                    path="/get-in-touch"
                    element={<GetInTouch profileDetails={profileDetails} />}
                  />
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
              </Suspense>
            </Router>
          )}
        </>
      </div>
    </HelmetProvider>
  );
}

export default App;
