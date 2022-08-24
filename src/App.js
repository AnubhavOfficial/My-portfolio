import React, { useState, useEffect } from "react";
import "./App.css";

// IMPORTING COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SkillsDisplay from "./components/SkillsDisplay/SkillsDisplay";
import Features from "./components/Features";
import Experience from "./components/Experience";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollBar from "./components/scrollBar";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading((prev) => !prev);
    setTimeout(() => {
      setLoading((prev) => !prev);
    }, 3000);
  }, []);

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ScrollBar />
          <Navbar />
          <Home />
          <SkillsDisplay />
          <Features />
          <Experience />
          <MyProjects />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
