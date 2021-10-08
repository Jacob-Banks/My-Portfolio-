import React from "react";
//import phone from "../assets/images/phone.png";

//import whatsApp_Logo_7 from "../assets/images/WhatsApp_Logo_7.png";

import gmail from "../assets/images/gmail.png";

import link from "../assets/images/LI-In-Bug.png";

import gitahub from "../assets/images/Octocat.png";
function Footer() {
  return (
    <footer id="contact">
      <a href="mailto:kobybanks@gmail.com">
        <img src={gmail} alt="gmail logo" />
      </a>
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <img src={link} alt="linkedin logo" />
      </a>
      <a href="https://github.com/Jacob-Banks" rel="noreferrer" target="_blank">
        <img src={gitahub} alt="github logo" />
      </a>
    </footer>
  );
}
export default Footer;
