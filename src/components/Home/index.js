import React from "react";

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import {
  SiFiverr,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
} from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Animate from "react-smooth/lib/Animate";
import Particles from "react-particles-js";
import particles from "../../const/particle.js";

const Home = () => {
  return (
    <>
      <Fade>
        <div id="About" className="HomeContainer">
          <Animate to="1" from="0" attributeName="opacity">
            <Particles params={particles} className="particle" />
          </Animate>
        </div>
      </Fade>
      <div className="AboutUS">
        <div className="text-center">
          <Fade delay={100} right cascade>
            <h1>
              <span style={{ fontWeight: 800, fontSize: "calc(3vh + 3vw)" }}>
                {" "}
                Anubhav{" "}
              </span>
            </h1>
          </Fade>
          <h3 style={{ fontWeight: 300, fontSize: "calc(1.5vh + 1.5vw)" }}>
            Software Engineer & Web Developer-Designer
          </h3>

          <div style={{ marginTop: "calc(3vh + 3vw)" }}>
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
            <a target="blank" href="https://www.fiverr.com/officialanubhav">
              <SiFiverr className="contactIcons ml-3" />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/anubhav_officia1/"
            >
              <SiInstagram className="contactIcons ml-3" />
            </a>
            <a href="mailto:anubhavpanfer@gmail.com">
              <FiMail className="contactIcons ml-3" />
            </a>
            <a href="tel:917888659886">
              <FiPhoneCall className="contactIcons ml-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
