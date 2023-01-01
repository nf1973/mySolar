import Logo from "../images/mysolar.png";
import SelectYearMonth from "./SelectYearMonth";
//import React, { useState } from "react";

function Side({ yearMonth, setYearMonth }) {
  return (
    <aside className="left">
      <img src={Logo} alt="logo" width="200" height="53" />
      <div className="navigation">
        <SelectYearMonth yearMonth={yearMonth} setYearMonth={setYearMonth} />
        <ul>
          <li>Dashboard</li>
          <li>Data</li>
        </ul>
      </div>
    </aside>
  );
}
export default Side;
