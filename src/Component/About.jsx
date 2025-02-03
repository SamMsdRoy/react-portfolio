import React, { useContext } from "react";
import { userContext } from "../App";
import { Helmet } from "react-helmet-async";
import "./About.css";

export default function About() {
  const { initState } = useContext(userContext);

  return (
    <div className="about-container">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Learn more about my journey as a web designer." />
      </Helmet>

      <div className="about-content">
        <div className="about-text">
          <h1 className="text-primary">About Me</h1>
          <p className="lead">
            Hi, I'm <strong>{initState.name}</strong>, a passionate web designer with a keen eye for modern UI/UX design.
            I love crafting visually appealing and user-friendly websites that enhance digital experiences.
          </p>
        </div>

        <div className="about-image">
          <img
            src="../assets/IMG_20240621_212557copy-removebg-preview.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>(React)</li>
         
          <li> (Python, MySQL)</li>
          <li>Knowledge in (Excel)</li>
        </ul>
      </div>

      <div className="social-links">
        <h3>Connect with Me</h3>
        <a href="https://www.instagram.com/samvicky650/" target="_blank" rel="noopener noreferrer">
          <span className="bi bi-instagram" style={{ color: "#DE3163", fontSize: "25px" }}></span>
        </a>
        <a href="http://www.github.com/samvicky650/" target="_blank" rel="noopener noreferrer">
          <span className="bi bi-github" style={{ fontSize: "25px" }}></span>
        </a>
      </div>
    </div>
  );
}
