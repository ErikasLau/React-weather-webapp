import React from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
  var option = {
    maintainAspectRatio: false,
    scales: {
      major: function (context) {
        if (context.tick !== undefined) {
          if (context.tick.label === " 00h") {
            return true;
          }
        }

        return false;
      },
      y: {
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          color: function (context) {
            if (context.tick !== undefined) {
              if (context.tick.label === " 00h") {
                return "#ffba19";
              }
            }

            return "#dadbdd";
          },
          lineWidth: function (context) {
            if (context.tick !== undefined) {
              if (context.tick.label === " 00h") {
                return 2;
              }
            }

            return 1;
          },
          offset: false,
        },
      },
    },
  };

  return <Chart type="bar" data={chartData} options={option} />;
};

export default LineChart;