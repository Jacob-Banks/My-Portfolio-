import React, { useState } from "react";
import gitahub from "../../assets/images/Octocat.png";

function Home() {
  const [projects] = useState([
    {
      name: "Lettuce Plan This Thyme",
      link: "https://polar-mesa-03802.herokuapp.com/signup",
      gitLink: "https://github.com/adamgmcfadden/Lettuce-Plan-This-Thyme ",
    },
    {
      name: "Photos 4 Babi",
      link: "http://babi.rinalka.com/",
      gitLink: "https://github.com/Jacob-Banks/Babi-Photo-Site ",
    },
    {
      name: "Run-Buddy",
      link: "https://jacob-banks.github.io/run-buddy/",
      gitLink: "https://github.com/Jacob-Banks/run-buddy",
    },
    {
      name: "What 2 Watch",
      link: "https://jacob-banks.github.io/group-project-1/",
      gitLink: "https://github.com/Jacob-Banks/group-project-1 ",
    },
    {
      name: "Learn Your Letters",
      link: "http://harvey.rinalka.com",
      gitLink: "https://github.com/Jacob-Banks/learn-your-letters",
    },
    {
      name: "Weather App",
      link: "https://jacob-banks.github.io/Weather-App/",
      gitLink: "https://github.com/Jacob-Banks/Weather-App ",
    },
  ]);

  return (
    <div>
      <h1 className="pro-title">projects</h1>
      <div className="flex-row">
        {projects.map((image, i) => (
          <div className="test mx-2 " key={image.name}>
            <img
              src={require(`../../assets/images/projects/${i}.png`).default}
              alt={image.name}
              className="project img-thumbnail "
              key={image.name}
            />
            <div className="sub">
              <a href={image.link}>
                {" "}
                <span className="name  py-1 px-1">{image.name}</span>
              </a>
              <a href={image.gitLink}>
                <img
                  src={gitahub}
                  alt="link to git hub"
                  className="project-link "
                  key={image.gitLink}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
