import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ListSolarLogs from "./ListSolarLogs";
import ListSolarLogsOld from "./ListSolarLogsOld";
import ChartSolarLogs from "./ChartSolarLogs";

function Pages({ yearMonth }) {
  const location = useLocation();
  return (
    <div className="content">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={yearMonth.length && <ChartSolarLogs yearMonth={yearMonth} />}
        />
        <Route
          path="/data"
          element={yearMonth.length && <ListSolarLogs yearMonth={yearMonth} />}
        />
        <Route
          path="/dataold"
          element={
            yearMonth.length && <ListSolarLogsOld yearMonth={yearMonth} />
          }
        />
      </Routes>
    </div>
  );
}

export default Pages;
