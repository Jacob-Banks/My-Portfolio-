import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import jacob from "../assets/images/jacob.jpg";
function PortfolioCont() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <header className="flex-row px-1">
        <h1> jacob banks</h1>
        <img src={jacob} alt="jacob with mask" />
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <div>
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          //
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default PortfolioCont;
