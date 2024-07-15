import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./About.css"; // Make sure to import the CSS file
import History from "./History";
import Team from "./Team";
import Values from "./Values";
import Mission from "./Mission";

const About = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("fade-in");
  }, []);

  return (
    <div className={`about-container ${animationClass}`}>
      <nav>
        <NavLink to="/about/history">History</NavLink>
        <NavLink to="/about/mission">Mission</NavLink>
        <NavLink to="/about/team">Team</NavLink>
        <NavLink to="/about/values">Values</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="history" element={<History />} />
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="values" element={<Values />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
