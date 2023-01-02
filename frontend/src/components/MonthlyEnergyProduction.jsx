import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Wh Produced"],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
  ["1", 5],
  ["2", 14],
  ["3", 16],
  ["4", 8],
];
export const options = {
  title: "Title",
  titleTextStyle: {
    color: "#4f9282",
    fontSize: 16,
    fontName: "Open Sans",
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
};

const chart = ({ solarLogs }) => {
  console.log(solarLogs);

  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
export default chart;
