import React from "react";
import { Bar } from "react-chartjs-2";
const Chart = () => {
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Open",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [10, 8, 15, 7, 12],
      },
      {
        label: "In Progress",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [5, 9, 6, 8, 10],
      },
      {
        label: "Completed",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [12, 5, 9, 11, 6],
      },
      {
        label: "Pending",
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        data: [6, 10, 7, 9, 8],
      },
    ],
  };

  return (
    <div className="border-2 border-color7 rounded-round w-full h-[157px]">
     {/* <Bar data={data} options={options} /> */}
    </div>
  );
};

export default Chart;
