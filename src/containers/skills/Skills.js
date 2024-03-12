import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import cicd from "../../assets/lottie/cicd";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-header-dev">{skillsSection.title}</div>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
            {illustration.animated ? (
              <DisplayLottie animationData={cicd} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            {skillsSection.sections.map((section, index) => (
              <div key={index}>
                <h2
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text-subtitle"
                      : "subTitle skills-text-subtitle"
                  }
                >
                  {/* {section.subTitle} */}
                </h2>
                <SoftwareSkill section={section} />
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
