import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ListSolarLogs from "./ListSolarLogs";
import ChartSolarLogs from "./ChartSolarLogs";

function Pages({ yearMonth }) {
  const location = useLocation();
  return (
    <div className="content">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ChartSolarLogs yearMonth={yearMonth} />} />
        <Route path="/data" element={<ListSolarLogs yearMonth={yearMonth} />} />
      </Routes>
    </div>
  );
}

export default Pages;
