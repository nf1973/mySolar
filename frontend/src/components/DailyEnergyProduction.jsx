import { Chart } from "react-google-charts";

const chart = ({ solarLogs, yearMonth }) => {
  const chartDate = yearMonth.substring(0, 4) + "-" + yearMonth.substring(4, 6);

  const options = {
    title: "Energy Generated in Wh per day for " + chartDate,
    titleTextStyle: {
      color: "#4f9282",
      fontSize: 14,
      fontName: "sans-serif",
    },
    width: "100%",
    height: "100%",
    legend: { position: "none" },
    isStacked: true,
    colors: ["#afd4cc"],
    chartArea: {
      left: "8%",
      right: "5%",
      top: "10%",
      bottom: "10%",
      height: "100%",
      width: "100%",
    },
    hAxis: {
      textStyle: { color: "#4f9282", fontSize: 12 },
      gridlineColor: "#4f9282",
    },
    vAxis: {
      textStyle: { color: "#4f9282", fontSize: 12 },
    },
  };

  const data = solarLogs.map((obj) => [
    obj.date.substring(6, 8),
    obj.energyGenerated,
  ]);

  data.unshift(["Day", "Wh Produced"]);

  return (
    <Chart
      chartType={"ColumnChart"}
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
export default chart;
