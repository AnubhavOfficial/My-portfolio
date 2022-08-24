import React from "react";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT ICONS
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiFiverr,
  SiInstagram,
} from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1 style={{ textDecoration: "none" }}> ANUBHAV</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: "1.5rem",
                      height: "2.5rem",
                      marginTop: ".2rem",
                    }}
                    label="SOFTWARE ENGINEER & WEB DEVELOPER"
                  />
                </div>
                <div style={{ marginTop: "calc(1.5vh + 1.5vw)" }}>
                  <a target="blank" href="https://github.com/AnubhavOfficial">
                    <SiGithub className="contactIcons " />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/anubhavofficial"
                  >
                    <SiLinkedin className="contactIcons ml-3" />
                  </a>

                  <a target="blank" href="https://twitter.com/Officia1Anubhav">
                    <SiTwitter className="contactIcons ml-3" />
                  </a>
                  <a
                    target="blank"
                    href="https://www.fiverr.com/officialanubhav"
                  >
                    <SiFiverr className="contactIcons ml-3" />
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/official_anubhavpanfer/"
                  >
                    <SiInstagram className="contactIcons ml-3" />
                  </a>
                  <a href="mailto:anubhavpanfer@gmail.com">
                    <FiMail className="contactIcons ml-3" />
                  </a>
                  <a href="tel:9478895037">
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h5 text-center text-white m-5">
            ©2022 All Rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
    </>
  );
};

export default Footer;
