import React, { useState, useEffect } from "react";
import axios from "axios";

const ListSolarLogs = ({ yearMonth }) => {
  const [solarLogs, setSolarLogs] = useState([]);

  useEffect(() => {
    getSolarLogs();
  }, [yearMonth]);

  const getSolarLogs = async () => {
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

  return (
    <div className="columns mt-5 is-centered">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Date</th>
            <th>Energy Generated (Wh)</th>
            <th>Efficiency (kWh/kWp)</th>
            <th>Peak Power (Wh)</th>
            <th>Peak Time (CET)</th>
            <th>Weather Condition</th>
          </tr>
        </thead>
        <tbody>
          {solarLogs.map((log, index) => (
            <tr key={log.id}>
              <td>{log.displayDate}</td>
              <td>{log.energyGenerated}</td>
              <td>{log.efficiency}</td>
              <td>{log.peakPower}</td>
              <td>{log.peakTime}</td>
              <td>{log.weatherCondition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSolarLogs;
