// import { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { myProjects } from "./myProjets";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  return (
    <main className="main-section" id="main">
      <h1 className="title" style={{fontSize: "2.1rem"}}>Projects</h1>
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
              <div style={{ width: "266px" , height:"230px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="flex icons">
                  <Link
                    to={item.linkGithub}
                    className="link flex"
                    target="_blank"
                  >
                    <div className="icon-github"> The source code </div>
                  </Link>
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
