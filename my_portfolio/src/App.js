import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Experience from "./Components/4-Experience/Experience";
import Contact from "./Components/5-Contact/Contact";
import Footer from "./Components/6-Footer/Footer";

function App() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div id="up" className="container">
        <Header />
        <div className="divider" />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
        <a style={{ opacity: scrollUp ? 1 : 0, transition: "1s" }} href="#up">
          <button className="scroll2Top icon-keyboard_arrow_up"></button>
        </a>
      </div>
    </Router>
  );
}

export default App;
