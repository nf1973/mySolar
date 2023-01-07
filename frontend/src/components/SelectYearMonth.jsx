import React, { useState, useEffect } from "react";
import axios from "axios";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}

const SelectYearMonth = ({ yearMonth, setYearMonth }) => {
  const [availableMonths, setAvailableMonths] = useState([]);

  useEffect(() => {
    getAvailableMonths();
  }, []);

  const getAvailableMonths = async () => {
    let uri = `${process.env.REACT_APP_API_SERVER_URL}/getavailablemonths`;
    const response = await axios.get(uri);
    const months = response.data.map(({ YEARMONTH }) => YEARMONTH);
    setAvailableMonths(months);
    setYearMonth(months[0].substring(0, 6)); //set the initial yearMonth value when the page loads
  };

  var months = availableMonths.map((month) => {
    return (
      <option key={month} value={month}>
        {month.substring(0, 4) + " " + getMonthName(month.substring(4, 6))}
      </option>
    );
  });

  const yearMonthHandler = (e) => {
    setYearMonth(e.target.value);
  };

  return (
    <div className="yearmonthselector">
      <label form="monthsyears">Choose a Month & Year:</label>

      <select name="monthsyears" id="monthsyears" onChange={yearMonthHandler}>
        {months}
      </select>
    </div>
  );
};

export default SelectYearMonth;
