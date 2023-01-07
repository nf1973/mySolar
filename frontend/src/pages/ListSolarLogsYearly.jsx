import React, { useState, useEffect } from "react";
import axios from "axios";

const ListSolarLogsYearly = () => {
  const [solarLogs, setSolarLogs] = useState([]);

  useEffect(() => {
    const getLogs = async () => {
      let uri = `${process.env.REACT_APP_API_SERVER_URL}/getyearlyenergy`;
      const response = await axios.get(uri);

      setSolarLogs(response.data);
    };

    getLogs();

    return () => {};
  }, []);

  return (
    <div className="row row1">
      <div className="card card1">
        <div className="columns mt-5 is-centered">
          <table className="table is-striped">
            <thead>
              <tr>
                <th className="has-text-left">Year</th>
                <th className="has-text-left">Energy Generated (kWh)</th>
              </tr>
            </thead>
            <tbody>
              {solarLogs.map((log) => (
                <tr key={log.year}>
                  <td className="has-text-left">{log.year}</td>
                  <td className="has-text-left  ">
                    {Math.floor(log.energyGenerated / 1000)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListSolarLogsYearly;
