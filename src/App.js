import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.getElementById(hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, []);

  return (
    <Router>
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/" element={<Skills />} />
          <Route path="/" element={<Works />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </Router> */}
      <NavBar />
      <Introduction />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
    </Router>
  );
}

export default App;