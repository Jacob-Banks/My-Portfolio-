import React from "react";

const Blog = () => (
  <div className="resume">
    <h1 className="title">Resume </h1>
    <p>
      Click to download
      <a href="/logo192.png" download>
        : Resume
      </a>
    </p>
    <h2>Front-end Profeicencies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
    </ul>
    <h2>Back-end Profeicencies</h2>
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
