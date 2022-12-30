import React, { useState, useEffect } from "react";
import axios from "axios";

const ListSolarLogs = ({ yearMonth }) => {
  const [solarLogs, setSolarLogs] = useState([]);

  useEffect(() => {
    getSolarLogs();
  }, [yearMonth]);

  const getSolarLogs = async () => {
    let uri = `http://mysolar.sn1316.com:3050/getsolarlogs/${yearMonth}`;
    const response = await axios.get(uri);
    setSolarLogs(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Date</th>
            <th>Energy Generated</th>
            <th>Efficiency</th>
            <th>Peak Power</th>
            <th>Peak Time</th>
            <th>Weather Condition</th>
          </tr>
        </thead>
        <tbody>
          {solarLogs.map((log, index) => (
            <tr key={log.id}>
              <td>{log.date}</td>
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
