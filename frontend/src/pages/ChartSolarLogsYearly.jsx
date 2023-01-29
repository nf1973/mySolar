import React, { useState, useEffect } from "react";
import axios from "axios";
import YearlyEnergyProduction from "../components/YearlyEnergyProduction";

const ChartSolarLogsYearly = () => {
  const [solarLogs, setSolarLogs] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState("");

  useEffect(() => {
    const getLogs = async () => {
      let uri = `${process.env.REACT_APP_API_SERVER_URL}/getYearlyEnergy`;
      const response = await axios.get(uri);

      //Filter response only for the relevant year
      const allYearsData = response.data;
      setSolarLogs(allYearsData);

      //Calculate the total energy production for the year
      const totalEnergyGenerated = allYearsData.reduce(
        (total, allYearsData) =>
          parseFloat(allYearsData.energyGenerated) + total,
        0
      );
      const displayTotalEnergyGenerated = totalEnergyGenerated / 1000 / 1000;
      setTotalEnergy(displayTotalEnergyGenerated.toFixed(1));
    };

    getLogs();

    return () => {};
  }, []);

  return (
    <div>
      <div className="row row0">
        <div className="card card0">
          Total Energy Generated (all years): {totalEnergy} mWh
        </div>
      </div>
      <div className="row row1">
        <div className="card card1">
          {solarLogs.length && <YearlyEnergyProduction solarLogs={solarLogs} />}
        </div>
      </div>
    </div>
  );
};
export default ChartSolarLogsYearly;
