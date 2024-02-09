// import { useEffect, useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const [showModal, sethowModal] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("currentMode") ?? "dark"
//   );
//   useEffect(() => {
//     if (theme === "light") {
//       document.body.classList.remove("dark");
//       document.body.classList.add("light");
//     } else {
//       document.body.classList.remove("light");
//       document.body.classList.add("dark");
//     }
//   }, [theme]);
//   return (
//     <header className="flex">
//       <button
//         onClick={() => {
//           sethowModal(true);
//         }}
//         className="menu icon-menu flex"
//       />
//       <div />

//       <nav>
//         <ul className="flex">
//           <li>
//             <a href="#about">About</a>
//           </li>
//           {/* <li>
//             <a href="">Articles</a>
//           </li> */}
//           <li>
//             <a href="#main">Projects</a>
//           </li>
//           {/* <li>
//             <a href="">Speaking</a>
//           </li> */}
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={() => {
//           // send value to LS
//           localStorage.setItem(
//             "currentMode",
//             theme === "dark" ? "light" : "dark"
//           );
//           // get value from LS
//           setTheme(localStorage.getItem("currentMode"));
//         }}
//         className="mode flex"
//       >
//         {theme === "dark" ? (
//           <span className="icon-moon-o"></span>
//         ) : (
//           <span className="icon-sun"></span>
//         )}
//       </button>

//       {showModal && (
//         <div className="border fixed">
//           <ul className="modal">
//             <li>
//               <button
//                 className="icon-close"
//                 onClick={() => {
//                   sethowModal(false);
//                 }}
//               />
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             {/* <li>
//               <a href="">Article</a>
//             </li> */}
//             <li>
//               <a href="#main">Projects</a>
//             </li>
//             {/* <li>
//               <a href="">Speaking</a>
//             </li> */}
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="">Articles</a>
          </li> */}
          <li>
            <a href="#main">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="border fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="">Article</a>
            </li> */}
            <li>
              <a href="#main">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

