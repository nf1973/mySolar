import ListSolarLogs from "./pages/Test";
import React, { useState } from "react";
import SelectYearMonth from "./components/SelectYearMonth";

function App() {
  const [yearMonth, setYearMonth] = useState("202212");

  return (
    <div className="App">
      <SelectYearMonth
        yearMonth={yearMonth}
        setYearMonth={setYearMonth}
      ></SelectYearMonth>
      <ListSolarLogs yearMonth={yearMonth} />
    </div>
  );
}

export default App;
