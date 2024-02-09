// import { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { myProjects } from "./myProjets";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {

  return (
    <main className="" id="main">
      <section className="right-section flex">
        <AnimatePresence>
          {myProjects.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident doloremque pariatur quaerat quia laboriosam ipsam,
                  molestias itaque eaque corporis nihil, molestiae ducimus
                  suscipit natus fuga! Quos beatae eaque esse modi?
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <Link to={item.linkGithub} target="_blank">
                      <div className="icon-github"></div>
                    </Link>
                  </div>
                  <a className="link flex" href="#more">
                    more<span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

