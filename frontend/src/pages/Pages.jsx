import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ListSolarLogs from "./ListSolarLogs";
import ListSolarLogsMonthly from "./ListSolarLogsMonthly";
import ListSolarLogsYearly from "./ListSolarLogsYearly";
import ChartSolarLogs from "./ChartSolarLogs";
import ChartSolarLogsMonthly from "./ChartSolarLogsMonthly";
import ChartSolarLogsYearly from "./ChartSolarLogsYearly";

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
          path="/monthly"
          element={
            yearMonth.length && (
              <ChartSolarLogsMonthly year={yearMonth.substring(0, 4)} />
            )
          }
        />
        <Route
          path="/yearly"
          element={yearMonth.length && <ChartSolarLogsYearly />}
        />
        <Route
          path="/dailydata"
          element={yearMonth.length && <ListSolarLogs yearMonth={yearMonth} />}
        />
        <Route
          path="/monthlydata"
          element={yearMonth.length && <ListSolarLogsMonthly />}
        />
        <Route
          path="/yearlydata"
          element={yearMonth.length && <ListSolarLogsYearly />}
        />
      </Routes>
    </div>
  );
}

export default Pages;
