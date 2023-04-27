import React from 'react';

function AboutMe() {
  const name = "Oluwaseyi Salako";
  const aboutMe = "I'm a web developer based in Ondo State, with experience in React and Node.js";
  const education = "I have a degree in Computer Science from the University of Lagos.";
  const skillsHeading = "Skills:";
  const projects = [
    {
      title: "Robotics",
      description: "A simple machine language that gives access to robots",
      link: "https://perizel.com/Oluwaseyi-Salako/perizel-app"
    },
    {
      title: "javascript",
      description: "A secure learning pace to light your day",
      link: "https://perizel.com/Oluwaseyi-Salako/perizel-app"
    }
  ];

  return (
    <div>
      <h1>{name}</h1>
      <p>{aboutMe}</p>
      <p>{education}</p>
      <h2>{skillsHeading}</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
      <h2>Projects:</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link}>{project.title}</a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
