import React, { useState, useEffect } from "react";
import axios from "axios";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}

const ListSolarLogs = ({ yearMonth }) => {
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
    <div className="row row1">
      <div className="card card1">
        <div className="columns mt-5 is-centered">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th className="has-text-left">Date</th>
                <th className="has-text-right">Energy Generated (Wh)</th>
                <th className="has-text-right">Efficiency (kWh/kWp)</th>
                <th className="has-text-right">Peak Power (Wh)</th>
                <th className="has-text-right">Peak Time (CET)</th>
                <th className="has-text-right">Weather Condition</th>
              </tr>
            </thead>
            <tbody>
              {solarLogs.map((log, index) => (
                <tr key={log.id}>
                  <td className="has-text-left">
                    {" "}
                    {log.day + " " + getMonthName(log.month) + " " + log.year}
                  </td>
                  <td className="has-text-right">{log.energyGenerated}</td>
                  <td className="has-text-right">{log.efficiency}</td>
                  <td className="has-text-right">{log.peakPower}</td>
                  <td className="has-text-right">{log.peakTime}</td>
                  <td className="has-text-right">{log.weatherCondition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListSolarLogs;
