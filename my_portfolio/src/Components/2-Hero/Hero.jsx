import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../Animations/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  const lottieRef = useRef();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/CV.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero flex" id="about">
      <div className="lef-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", staggerDirection: 100 }}
            src="./images/me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Web Developper
        </motion.h1>
        <p className="sub-title">
          I am Abdelilah Elgallati, a student in the professional license
          program of Computer Systems and Software Engineering at the Higher
          School of Technology in Essaouira. I have experience in web
          development through internships and advanced skills in coding
          languages, databases, operating systems, and designing and using
          various software. My proficiency in Arabic, French, and English
          facilitates communication, while my passions for football, swimming,
          and coding drive my interests.
        </p>

        <div className="all-icons flex">
          {/* <Link className="icon " to=""><div className="icon icon-twitter"></div></Link> */}

          <Link
            className="link"
            target="_blank"
            to="https://www.instagram.com/elgallatiabdelilah/"
          >
            <div className="icon icon-instagram"></div>
          </Link>

          <Link className="link" target="_blank" to="https://github.com/AbdelilahElgallati">
            <div className="icon icon-github"></div>
          </Link>

          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/abdelilah-elgallati/"
          >
            <div className="icon icon-linkedin"></div>
          </Link>
        </div>
        <button onClick={handleDownload} style={{ marginTop: "20px" }}>
          download my CV
        </button>
      </div>
      <div className="right-hero animation" style={{ width: "200%" }}>
        <Lottie
          lottieRef={lottieRef}
          className="dev-animation"
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
