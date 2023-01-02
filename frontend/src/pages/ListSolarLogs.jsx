import React, { useState, useEffect } from "react";
import axios from "axios";

const ListSolarLogs = ({ yearMonth }) => {
  const [solarLogs, setSolarLogs] = useState([]);

  useEffect(() => {
    getSolarLogs();
  }, [yearMonth]);

  const getSolarLogs = async () => {
    if (!yearMonth == "") {
      //Prevent making API call before yearMonth has even been set
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
    }
  };

  return (
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
              <td className="has-text-laft">{log.displayDate}</td>
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
  );
};

export default ListSolarLogs;
