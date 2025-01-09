import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Timeline from './components/Timeline/Timeline';
import Clients from './components/Clients/Clients';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Introduction />
        <Skills />
        <Timeline />
        <Works />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
