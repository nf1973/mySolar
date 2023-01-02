import React, { useState, useEffect } from "react";
import axios from "axios";
import MonthlyEnergyProduction from "../components/MonthlyEnergyProduction";

const ChartSolarLogs = ({ yearMonth }) => {
  const [solarLogs, setSolarLogs] = useState([]);

  useEffect(() => {
    const getLogs = async () => {
      let uri = `${process.env.REACT_APP_API_SERVER_URL}/getsolarlogs/${yearMonth}`;
      const response = await axios.get(uri);
      //add a displayDate property to each object in the array
      const transformedData = response.data.map((obj) => ({
        ...obj,
        displayDate:
          obj.date.substring(0, 4) +
          "-" +
          obj.date.substring(4, 6) +
          "-" +
          obj.date.substring(6, 8),
      }));
      setSolarLogs(transformedData);
    };

    getLogs();

    return () => {};
  }, [yearMonth]);

  return (
    <div>
      <div className="row row1">
        <div className="card card1">
          {solarLogs.length && (
            <MonthlyEnergyProduction solarLogs={solarLogs} />
          )}
        </div>
      </div>
      <div className="row row1">
        <div className="card card2">Chart 2 will appear soon!</div>
        <div className="card card3">Chart 3 will appear soon!</div>
        <div className="card card4">Chart 4 will appear soon!</div>
      </div>
    </div>
  );
};
export default ChartSolarLogs;
