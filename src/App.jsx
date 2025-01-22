import { Fragment, useReducer, useState, createContext } from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import ModalforResume from "./Component/ModalforResume";

export const userContext = createContext();
function App() {
  const initState = {
    email: "samvicky650@gmail.com",
    name: "Vigneshwaran",
    address: "Espenweg 9, Janisstadt, NW 65866",
    aboutusContent:
      "Best Project you will ever on is yourself. Life isn't about find yourself. Life is about creating yourself.",
  };
  const educationDetails = [
    {
      title: "Graduation Details",
      year: "2023",
      degree: "B. Sc Computer Science",
      university: "University of Madras",
    },
    {
      title: "HSC",
      year: "2020",
      degree: `12`,
      degPost: "th",
      university: "State Board Education",
    },
    {
      title: "SSLC",
      year: "2018",
      degree: `10`,
      degPost: "th",
      university: "State Board Education",
    },
  ];
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <userContext.Provider value={{ initState, educationDetails }}>
        <Router basename={window.location.pathname || ""}>
          <ModalforResume />
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="education" element={<Education />} />
            </Route>
          </Routes>
        </Router>
      </userContext.Provider>
    </HelmetProvider>
  );
}

export default App;
