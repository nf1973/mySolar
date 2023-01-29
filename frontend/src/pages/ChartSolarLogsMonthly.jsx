import React, { useState, useEffect } from "react";
import axios from "axios";
import MonthlyEnergyProduction from "../components/MonthlyEnergyProduction";

const ChartSolarLogsMonthly = ({ year }) => {
  const [solarLogs, setSolarLogs] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState("");

  useEffect(() => {
    const getLogs = async () => {
      let uri = `${process.env.REACT_APP_API_SERVER_URL}/getMonthlyEnergy`;
      const response = await axios.get(uri);

      //Filter response only for the relevant year
      const filteredData = response.data.filter(
        (x) => x.year.toString() === year
      );
      setSolarLogs(filteredData);

      //Calculate the total energy production for the year
      const totalEnergyGenerated = filteredData.reduce(
        (total, filteredData) =>
          parseFloat(filteredData.energyGenerated) + total,
        0
      );
      const displayTotalEnergyGenerated = totalEnergyGenerated / 1000;
      setTotalEnergy(displayTotalEnergyGenerated.toFixed(0));
    };

    getLogs();

    return () => {};
  }, [year]);

  return (
    <div>
      <div className="row row0">
        <div className="card card0">
          Total Energy Generated in {year}: {totalEnergy} kWh
        </div>
      </div>
      <div className="row row1">
        <div className="card card1">
          {solarLogs.length && (
            <MonthlyEnergyProduction solarLogs={solarLogs} year={year} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ChartSolarLogsMonthly;
