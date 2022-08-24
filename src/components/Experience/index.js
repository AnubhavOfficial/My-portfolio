import React from "react";

import htmlIMG from "../../assets/SkillsImages/html.png";
import cssIMG from "../../assets/SkillsImages/css.png";
import jsIMG from "../../assets/SkillsImages/js.png";
import reactjsIMG from "../../assets/SkillsImages/reactjs.png";
import materialUI from "../../assets/SkillsImages/materialUI.png";
import javaImg from "../../assets/SkillsImages/java.png";
import reduxImg from "../../assets/SkillsImages/redux.png";
import sagaImg from "../../assets/SkillsImages/ReduxSaga.png";

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

function Experience() {
  let percentage = [90, 95, 80, 90, 85, 80, 85, 80];
  let [html, css, js, reactjs, materialui, redux, java, Sagas] = percentage;

  return (
    <div id="Experience" className="ExpContainer bg-white">
      <div className="container">
        <div class="section-title">
          <h2>
            <b>Experience</b>
          </h2>
        </div>
        <div className="row justify-content-center">
          <SingleExperience
            Title="HTML"
            Img={htmlIMG}
            Percentage={html}
            GradientC_1="#ff4100"
            GradientC_2="#ff9a78"
            TextColor="#ff6935"
          />
          <SingleExperience
            Title="CSS"
            Img={cssIMG}
            Percentage={css}
            GradientC_1="#008cfc"
            GradientC_2="#9bd2fe"
            TextColor="#008cfc"
          />
          <SingleExperience
            Title="JavaScript"
            Img={jsIMG}
            Percentage={js}
            GradientC_1="#fddb22"
            GradientC_2="#ffef96"
            TextColor="#fee03e"
          />

          <SingleExperience
            Title="Java"
            Img={javaImg}
            Percentage={java}
            GradientC_1="#8834B3"
            GradientC_2="#C15EF2"
            TextColor="#84bee3"
          />

          <SingleExperience
            Title="Material UI"
            Img={materialUI}
            Percentage={materialui}
            GradientC_1="#005387"
            GradientC_2="#addfff"
            TextColor="#84bee3"
          />
          <SingleExperience
            className="mongoExpImage"
            Title="Redux"
            Img={reduxImg}
            Percentage={redux}
            GradientC_1="#27AE60"
            GradientC_2="#52BE80"
            TextColor="#84bee3"
          />
          <SingleExperience
            Title="React JS"
            Img={reactjsIMG}
            Percentage={reactjs}
            GradientC_1="#4da5bd"
            GradientC_2="#dbf7ff"
            TextColor="#c4e6f0"
          />

          <SingleExperience
            Title="Redux-Sagas"
            Img={sagaImg}
            Percentage={Sagas}
            GradientC_1="#BF0060"
            GradientC_2="#FF198C"
            TextColor="#84bee3"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
