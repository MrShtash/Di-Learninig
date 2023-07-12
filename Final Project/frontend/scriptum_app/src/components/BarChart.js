import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ workedHours, normHours }) => {
  const chartData = {
    labels: ["Worked Hours", "Norm Hours"],
    datasets: [
      {
        label: "Hours",
        data: [workedHours, normHours],
        backgroundColor: workedHours > normHours ? "red" : "lightblue",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Worked Hours vs Norm Hours",
        font: {
          size: 14,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    type: "bar",
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ width: 400 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
