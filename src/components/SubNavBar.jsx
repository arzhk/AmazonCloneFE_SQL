import React from "react";
import { Link } from "react-router-dom";

function SubNavBar() {
  const links = [
    "Morrisons",
    "Today's Deals",
    "New Releases",
    "Gift Cards & Top Up",
    "Best Sellers",
    "Customer Service",
    "Subscribe & Save",
    "Prime Video",
    "Prime",
    "Buy Again",
    "Gift Ideas",
  ];

  return (
    <div id="subnav-main">
      <ul>
        {links.map((link) => (
          <li>
            <Link>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubNavBar;
