import React, { useState } from "react";

function Home() {
  const [projects] = useState([
    {
      name: "Lettuce Plan This Thyme",
      link: "https://polar-mesa-03802.herokuapp.com/signup",
      gitLink: " ",
    },
    {
      name: "Photos 4 Babi",
      link: "http://babi.rinalka.com/",
      gitLink: " ",
    },
    {
      name: "Run-Buddy",
      link: "https://jacob-banks.github.io/run-buddy/",
      gitLink: " ",
    },
    {
      name: "What 2 Watch",
      link: "https://jacob-banks.github.io/group-project-1/",
      gitLink: " ",
    },
    {
      name: "Learn Your Letters",
      link: "http://harvey.rinalka.com",
      gitLink: " ",
    },
    {
      name: "Weather App",
      link: "https://jacob-banks.github.io/Weather-App/",
      gitLink: "https://github.com/Jacob-Banks/Weather-App ",
    },
  ]);

  return (
    <div className="flex-row">
      {projects.map((image, i) => (
        <div className="test" key={image.name}>
          <img
            src={require(`../../assets/images/projects/${i}.png`).default}
            alt={image.name}
            className="project img-thumbnail mx-2 "
            key={image.name}
          />
          <span className="name">{image.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Home;
