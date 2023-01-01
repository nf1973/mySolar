import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [yearMonth, setYearMonth] = useState("202212");

  return (
    <div className="App">
      <Side yearMonth={yearMonth} setYearMonth={setYearMonth} />
      <Main yearMonth={yearMonth} />
    </div>
  );
}

export default App;
