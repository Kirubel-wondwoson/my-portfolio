import React from 'react';
import './Skills.scss'
import { FaPython, FaJsSquare, FaDatabase } from 'react-icons/fa';
import {SiDjango, SiScrapy, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skillsLeft = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJsSquare />, name: 'JavaScript | Node.js' },
    { icon: <SiNodedotjs />, name: 'Machine Learning App' },
  ];

  const skillsRight = [
    { icon: <SiDjango />, name: 'Django' },
    { icon: <FaDatabase />, name: 'Database (MySql, MongoDb)' },
    { icon: <SiMongodb />, name: 'Automation' },
  ];

  return (
    <div className="skills-section">
      <h3>My Skills</h3>
      <div className="skills-container">
        <div className="skills-column">
          {skillsLeft.map((skill, index) => (
            <div key={index} className="skill">
              {skill.icon}
              <span>{skill.name}</span> 
            </div>
          ))}
        </div>
        <div className="skills-column">
          {skillsRight.map((skill, index) => (
            <div key={index} className="skill">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
