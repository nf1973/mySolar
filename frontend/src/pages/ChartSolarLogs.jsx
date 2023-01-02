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
    <div>
      <div className="row row1">
        <div className="card card1">Chart 1 will appear soon!</div>
      </div>
      <div className="row row1">
        <div className="card card2">Chart 2 will appear soon!</div>
        <div className="card card3">Chart 3 will appear soon!</div>
        <div className="card card4">Chart 4 will appear soon!</div>
      </div>
    </div>
  );
};

export default ListSolarLogs;
