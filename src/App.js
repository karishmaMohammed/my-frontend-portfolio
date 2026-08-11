import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { BASE_URL } from "./Constant";
import { SITE, YEARS_EXPERIENCE } from "./content";
import Home from "./Components/Site/Home";
import Loading from "./Components/Loading/Loading";
import Profile from "./Components/ProfileForms/Profile";
import Skills from "./Components/ProfileForms/Skills";
import ProjectsForms from "./Components/ProfileForms/ProjectsForms";
import WorkStatus from "./Components/ProfileForms/WorkStatus";
import "./App.css";

function App() {
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/get-person-details`);
        if (!cancelled) {
          setProfileDetails(response.data?.data?.user_details || {});
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    const timeout = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 2200);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  const name = SITE.name;
  const photo = profileDetails.photo || SITE.photo;
  const description = SITE.summary;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${name} — Senior Full-Stack Developer`}</title>
        <meta
          name="description"
          content={`Senior Full-Stack Engineer building MERN SaaS, CAD infrastructure, and AI automation. ${YEARS_EXPERIENCE}+ years shipping production systems.`}
        />
        <meta
          name="keywords"
          content="Karishma Mohammed, senior full stack developer, MERN, Next.js, AI automation, portfolio"
        />
        <meta name="author" content={name} />
        <meta name="theme-color" content="#f7f1e8" />
        <meta property="og:title" content={`${name} — Senior Full-Stack Developer`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={photo} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${name} — Senior Full-Stack Developer`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={photo} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home profile={profileDetails} />} />
            <Route path="/intro" element={<Navigate to="/#about" replace />} />
            <Route path="/skills" element={<Navigate to="/#skills" replace />} />
            <Route path="/education" element={<Navigate to="/#education" replace />} />
            <Route path="/projects" element={<Navigate to="/#work" replace />} />
            <Route path="/experience" element={<Navigate to="/#experience" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="/get-in-touch" element={<Navigate to="/#contact" replace />} />
            <Route
              path="/forms"
              element={
                <>
                  <Profile />
                  <Skills />
                  <ProjectsForms />
                  <WorkStatus />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;
