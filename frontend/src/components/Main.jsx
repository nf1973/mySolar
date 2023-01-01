import Dashboard from "./Dashboard";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
//import React, { useState } from "react";

function Main({ yearMonth }) {
  return (
    <main className="right">
      <div className="topbar">
        <div className="links">
          <img src={github} alt="github icon" />
          <img src={mail} alt="mail icon" />
        </div>
      </div>
      <Dashboard yearMonth={yearMonth} />
    </main>
  );
}
export default Main;
