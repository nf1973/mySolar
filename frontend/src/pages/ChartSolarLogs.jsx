import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyEnergyProduction from "../components/DailyEnergyProduction";
import MonthlyWeather from "../components/MonthlyWeather";

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
            <DailyEnergyProduction
              solarLogs={solarLogs}
              yearMonth={yearMonth}
            />
          )}
        </div>
      </div>
      <div className="row row1">
        <div className="card card2">
          {solarLogs.length && (
            <MonthlyWeather solarLogs={solarLogs} yearMonth={yearMonth} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ChartSolarLogs;
