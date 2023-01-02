import React from "react";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
function TopBar() {
  return (
    <div className="topbar">
      <div className="links">
        <a
          href="https://github.com/nf1973/mySolar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github icon" />
        </a>
        <a
          href="https://github.com/nf1973/mySolar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mail} alt="github icon" />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
