import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [yearMonth, setYearMonth] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Side yearMonth={yearMonth} setYearMonth={setYearMonth} />
        <Main yearMonth={yearMonth} />
      </BrowserRouter>
    </div>
  );
}

export default App;
