import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyEnergyProduction from "../components/DailyEnergyProduction";
import MonthlyWeather from "../components/MonthlyWeather";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}

function displayYearMonth(yearMonth) {
  //return yearMonth.substring(0, 4) + "-" + yearMonth.substring(4, 6);
  return (
    getMonthName(yearMonth.substring(4, 6)) + " " + yearMonth.substring(0, 4)
  );
}

const ChartSolarLogs = ({ yearMonth }) => {
  const [solarLogs, setSolarLogs] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState("");

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

      //Calculate the total energy production
      const totalEnergyGenerated = transformedData.reduce(
        (total, transformedData) => transformedData.energyGenerated + total,
        0
      );
      setTotalEnergy(Math.floor(totalEnergyGenerated / 1000));
    };

    getLogs();

    return () => {};
  }, [yearMonth]);

  return (
    <div>
      <div className="row row0">
        <div className="card card0">
          Total Energy Generated in {displayYearMonth(yearMonth)}: {totalEnergy}{" "}
          kWh
        </div>
      </div>
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
