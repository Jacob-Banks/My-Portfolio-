import React from "react";

function NavTabs(props) {
  const tabs = ["Resume", "About", "Portfolio", "Contact"];
  return (
    <ul className="  flex-row nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item mx-2" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
