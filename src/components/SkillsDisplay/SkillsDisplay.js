import React from "react";

import htmlImg from "../../assets/SkillsImages/html.png";
import cssImg from "../../assets/SkillsImages/css.png";
import jsImg from "../../assets/SkillsImages/js.png";
import reactjsImg from "../../assets/SkillsImages/reactjs.png";
import materialUIImg from "../../assets/SkillsImages/materialUI.png";
import reduxImg from "../../assets/SkillsImages/redux.png";
import javaImg from "../../assets/SkillsImages/java.png";
import hibernateImg from "../../assets/SkillsImages/Hibernate.png";
import extjsImg from "../../assets/SkillsImages/extjs.png";
import reduxSaga from "../../assets/SkillsImages/ReduxSaga.png";

const SkillsDisplay = () => {
  const SkillsData = [
    {
      img: htmlImg,
      alt: "html",
      height: "11rem",
    },
    {
      img: cssImg,
      alt: "css",
      height: "11rem",
      marginLeft: "45px",
    },
    {
      img: jsImg,
      alt: "js",
      height: "10rem",
      marginLeft: "60px",
    },
    {
      img: reactjsImg,
      alt: "reactjs",
      height: "9rem",
    },
    {
      img: materialUIImg,
      alt: "materialUI",
      height: "13.2rem",
    },
    {
      img: reduxImg,
      alt: "redux",
      height: "10rem",
    },
    {
      img: javaImg,
      alt: "Java",
      height: "11rem",
    },
    {
      img: hibernateImg,
      alt: "Hibernate",
      height: "8rem",
    },
    {
      img: extjsImg,
      alt: "ExtJS",
      height: "7rem",
    },
    {
      img: reduxSaga,
      alt: "Redux-Saga",
      height: "10rem",
    },
  ];

  return (
    <>
      <div className="SkillsContainer bg-white">
        <div className="SC-Slider">
          <div className="SC-Slide">
            {SkillsData.map((preImg, index) => {
              return (
                <span key={index}>
                  <img
                    src={preImg.img}
                    alt={preImg.alt}
                    style={{ height: preImg.height }}
                  />
                </span>
              );
            })}
          </div>
          <div className="SC-Slide">
            {SkillsData.map((preImg, index) => {
              return (
                <span key={index}>
                  <img
                    src={preImg.img}
                    alt={preImg.alt}
                    style={{ height: preImg.height }}
                  />
                </span>
              );
            })}
          </div>
          <div className="SC-Slide">
            {SkillsData.map((preImg, index) => {
              return (
                <span key={index}>
                  <img
                    src={preImg.img}
                    alt={preImg.alt}
                    style={{ height: preImg.height }}
                  />
                </span>
              );
            })}
          </div>
          <div className="SC-Slide">
            {SkillsData.map((preImg, index) => {
              return (
                <span key={index}>
                  <img
                    src={preImg.img}
                    alt={preImg.alt}
                    style={{ height: preImg.height }}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsDisplay;
