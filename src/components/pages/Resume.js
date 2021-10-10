import React from "react";

const Blog = () => (
  <div className="resume">
    <h2>Resume </h2>
    <p>
      Click to download
      <a href="/logo192.png" download>
        <span className="resumeLink">: Resume</span>
      </a>
    </p>
    <h3>Front-end Profeicencies</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
    </ul>
    <h3>Back-end Profeicencies</h3>
    <ul>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySql, Sequelize</li>
      <li>Mongo, Mongoose</li>
      <li>REST</li>
      <li>GraphQL</li>
    </ul>
  </div>
);

export default Blog;
