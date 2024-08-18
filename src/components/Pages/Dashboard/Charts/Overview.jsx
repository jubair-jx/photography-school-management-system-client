import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CourseOverview = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Order",
        data: [
          { x: "2024-01-01", y: 214 },
          { x: "2024-02-01", y: 124 },
          { x: "2024-03-01", y: 487 },
          { x: "2024-04-01", y: 148 },
          { x: "2024-05-01", y: 453 },
          { x: "2024-06-01", y: 554 },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: (val) => {
            const date = new Date(val);
            return `${date.toLocaleString("default", {
              weekday: "short",
            })} `;
          },
        },
      },
      title: {
        text: "Weekly Course Overview",
      },
      tooltip: {
        x: {
          formatter: (val) => {
            const date = new Date(val);
            return `${date.toLocaleString("default", {
              weekday: "short",
            })} ${date.getFullYear()}`;
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 6,
          colors: {
            ranges: [
              {
                from: 0,
                to: 214, // Set the range and color as per your requirement
                color: "#95a5a6", // Change the color as per your requirement
              },
              {
                from: 215,
                to: 554, // Set the range and color as per your requirement
                color: "#34495e", // Change the color as per your requirement
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  return (
    <div className="shadow-lg rounded-lg p-4" id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={380}
      />
    </div>
  );
};

export default CourseOverview;
