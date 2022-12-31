import React from "react";

function SelectYearMonth({ yearMonth, setYearMonth }) {
  const yearMonthHandler = (e) => {
    setYearMonth(e.target.value);
  };

  return (
    <div>
      <label form="monthsyears">Choose a Month & Year:</label>

      <select name="monthsyears" id="monthsyears" onChange={yearMonthHandler}>
        <option value="202212">2022-12</option>
        <option value="202211">2022-11</option>
        <option value="202210">2022-10</option>
        <option value="202209">2022-09</option>
        <option value="202208">2022-08</option>
        <option value="202207">2022-07</option>
        <option value="202206">2022-06</option>
        <option value="202205">2022-05</option>
        <option value="202204">2022-04</option>
        <option value="202203">2022-03</option>
        <option value="202202">2022-02</option>
        <option value="202201">2022-01</option>
        <option value="202112">2021-12</option>
        <option value="202111">2021-11</option>
        <option value="202110">2021-10</option>
        <option value="202109">2021-09</option>
        <option value="202108">2021-08</option>
        <option value="202107">2021-07</option>
        <option value="202106">2021-06</option>
        <option value="202105">2021-05</option>
        <option value="202104">2021-04</option>
        <option value="202103">2021-03</option>
        <option value="202102">2021-02</option>
        <option value="202101">2021-01</option>
        <option value="202012">2020-12</option>
        <option value="202011">2020-11</option>
        <option value="202010">2020-10</option>
        <option value="202009">2020-09</option>
        <option value="202008">2020-08</option>
        <option value="202007">2020-07</option>
        <option value="202006">2020-06</option>
        <option value="202005">2020-05</option>
        <option value="202004">2020-04</option>
        <option value="202003">2020-03</option>
        <option value="202002">2020-02</option>
        <option value="202001">2020-01</option>
        <option value="201912">2019-12</option>
        <option value="201911">2019-11</option>
        <option value="201910">2019-10</option>
        <option value="201909">2019-09</option>
        <option value="201908">2019-08</option>
        <option value="201907">2019-07</option>
        <option value="201906">2019-06</option>
        <option value="201905">2019-05</option>
        <option value="201904">2019-04</option>
        <option value="201903">2019-03</option>
        <option value="201902">2019-02</option>
        <option value="201901">2019-01</option>
      </select>
    </div>
  );
}

export default SelectYearMonth;
