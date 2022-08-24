import React, { useEffect } from "react";

// IMPORTED SIDEBAR
import Sidebar from "./Sidebar";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR

// IMPORTING REACT SCROLL
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    // FOR NAVBAR SCROLLING EFFECT START
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".NavbarContainer");
      if (header !== null) {
        header.classList.toggle("sticky", window.scrollY > 100);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="NavbarContainer">
          <Link
            to="About"
            smooth={true}
            duration={1200}
            offset={5}
            delay={300}
            spy={true}
          >
          </Link>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
