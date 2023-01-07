import { Chart } from "react-google-charts";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}

function displayYearMonth(yearMonth) {
  return (
    getMonthName(yearMonth.substring(4, 6)) + " " + yearMonth.substring(0, 4)
  );
}

const chart = ({ solarLogs, yearMonth }) => {
  //const chartDate = yearMonth.substring(0, 4) + "-" + yearMonth.substring(4, 6);
  const chartDate = displayYearMonth(yearMonth);

  const options = {
    title: "Weather for " + chartDate,
    titleTextStyle: {
      color: "#4f9282",
      fontSize: 14,
      fontName: "sans-serif",
    },
    width: "100%",
    height: "100%",
    legend: { position: "right" },
    isStacked: true,
    colors: ["#afd4cc", "#75B4A5", "#4F9282", "#40776A", "#325D53"],
    chartArea: {
      left: "5%",
      right: "5%",
      top: "15%",
      bottom: "5%",
      height: "100%",
      width: "100%",
    },
    is3D: true,
    hAxis: {
      textStyle: { color: "#4f9282", fontSize: 12 },
      gridlineColor: "#4f9282",
    },
    vAxis: {
      textStyle: { color: "#4f9282", fontSize: 12 },
    },
    pieHole: 0.4,
  };

  const fine = solarLogs.filter(
    (obj) => obj.weatherCondition === "Fine"
  ).length;

  const partlyCloudy = solarLogs.filter(
    (obj) => obj.weatherCondition === "Partly Cloudy"
  ).length;

  const mostlyCloudy = solarLogs.filter(
    (obj) => obj.weatherCondition === "Mostly Cloudy"
  ).length;

  const cloudy = solarLogs.filter(
    (obj) => obj.weatherCondition === "Cloudy"
  ).length;

  const showers = solarLogs.filter(
    (obj) => obj.weatherCondition === "Showers"
  ).length;

  const data = [
    ["Weather", "Num Days"],
    ["Fine", fine],
    ["Partly Cloudy", partlyCloudy],
    ["Mostly Cloudy", mostlyCloudy],
    ["Cloudy", cloudy],
    ["Showers", showers],
  ];

  return (
    <Chart
      chartType={"PieChart"}
      data={data}
      options={options}
      width={"100%"}
      height={"97%"}
    />
  );
};
export default chart;
