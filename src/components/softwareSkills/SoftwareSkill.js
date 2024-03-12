import React, {useState} from "react";
import "./SoftwareSkill.scss";
import {Icon} from "@iconify/react";

export default function SoftwareSkill({section}) {
  const [hoverName, setHoverName] = useState("");

  const handleMouseEnter = name => {
    setHoverName(name);
  };

  const handleMouseLeave = () => {
    setHoverName("");
  };
  return (
    <div>
      <div className="software-skills-main-div">
        <div key={section.subTitle}>
          {section.skills && section.softwareSkills.length > 0 && (
            <>
              <div className="software-skill-text-container">
                <h2>{section.subTitle}</h2>
                {section.skills.map((skill, i) => (
                  <p key={i} className="software-skill-text">
                    {skill}
                  </p>
                ))}
              </div>
              <ul className="dev-icons">
                {section.softwareSkills.map((skill, i) => (
                  <li
                    key={i}
                    className="software-skill-inline"
                    name={skill.skillName}
                    onMouseEnter={() => handleMouseEnter(skill.hoverName)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {skill.skillType === "devicon" ? (
                      <Icon icon={`devicon:${skill.skillName}`} />
                    ) : (
                      <Icon icon={`logos:${skill.skillName}`} />
                    )}
                    <p className="icon-name">{hoverName || skill.skillName}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
