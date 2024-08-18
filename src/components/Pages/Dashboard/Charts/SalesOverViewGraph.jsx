import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalSalesGraph = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "XYZ MOTORS",
        data: [
          [1609459200000, 40],
          [1609545600000, 45],
          [1609632000000, 35],
          [1609718400000, 50],
          [1609804800000, 55],
          [1609891200000, 48],
          [1609977600000, 52],
          [1610064000000, 60],
          [1610150400000, 58],
          [1610236800000, 55],
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Total Course Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  });

  return (
    <div id="chart" className="my-20">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default TotalSalesGraph;
