import React, { useState } from "react";
import NavTabs from "./NavTabs";

import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function Header() {
  const [currentPage, handlePageChange] = useState("About");
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
      <div>
        <header className=" header">
          <h1> Jacob Banks</h1>

          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </div>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        //
        renderPage(currentPage)
      }
    </div>
  );
}
export default Header;
