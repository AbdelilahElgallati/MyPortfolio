import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { myProjects } from "./myProjets";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {

  // const [active, setActive] = useState("all");
  // const [project, setProject] = useState(myProjects);
  // const filtrage = async (filtre_categorie) => {
  //   setActive(filtre_categorie === active ? "all" : filtre_categorie);
  //   const filteredProjects = await 
  //     filtre_categorie === "all"
  //       ? myProjects
  //       : myProjects.filter((item) =>
  //           item.category.includes(filtre_categorie)
  //         );
  //   setProject(filteredProjects);
  // };

  const [active, setActive] = useState("all");
  const [project, setProject] = useState(myProjects);

  const filtrage = (filtre_categorie) => {
    setActive(filtre_categorie === active ? "all" : filtre_categorie);
    const filteredProjects =
      filtre_categorie === "all"
        ? myProjects
        : myProjects.filter((item) => item.category.includes(filtre_categorie));
    setProject(filteredProjects);
  };

  return (
    <main className="flex main-section" id="main">
      {/* <h1 className="title" style={{fontSize: "2.1rem"}}>Projects</h1> */}
      <section className="flex left-section">
        <button
          className={active === "all" ? "active" : null}
          onClick={() => {
            setActive("all");
            setProject(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={active === "html_css" ? "active" : null}
          onClick={() => {
            filtrage("html_css");
          }}
        >
          Html & Css
        </button>
        <button
          className={active === "javascript" ? "active" : null}
          onClick={() => {
            filtrage("javascript");
          }}
        >
          JavaScript
        </button>
        <button
          className={active === "java" ? "active" : null}
          onClick={() => {
            filtrage("java");
          }}
        >
          Java
        </button>
        <button
          className={active === "laravel_9" ? "active" : null}
          onClick={() => {
            filtrage("laravel_9");
          }}
        >
          Laravel 9
        </button>
        <button
          className={active === "react" ? "active" : null}
          onClick={() => {
            filtrage("react");
          }}
        >
          React Js
        </button>
        <button
          className={active === "nodejs" ? "active" : null}
          onClick={() => {
            filtrage("nodejs");
          }}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {project.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.id}
              className="card"
            >
              {/* <img width={266} height={150} src={item.imgPath} alt="" /> */}
              <div style={{ width: "266px" , height:"230px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="icons">
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
