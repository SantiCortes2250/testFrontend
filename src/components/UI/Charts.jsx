import React from "react";
import chartWave from "../../assets/images/waveChart.png";
import chartLine from "../../assets/images/waveLineChart.png";
import chartPie from "../../assets/images/pieChart.png";
import chartProgress from "../../assets/images/progressBar.png";
import style from "../../styles/charts.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
  };

  var data = {
    labels: "",
    datasets: [
      {
        label: "Ticket",
        data: [25, 25, 30, 20],
        backgroundColor: ["#FF4F4F", "#3C65F5", "#FFF742", "#1BD344"],
        borderColor: "transparent",
        offset: "30",
      },
    ],
  };

  return (
    <div className={style.contend_charts}>
      <img
        src={chartProgress}
        alt="chartProgress"
        className={style.chartProgress}
      />
      <img src={chartWave} alt="chartWave" className={style.chartWave} />
      <img src={chartLine} alt="chartLine" className={style.chartLine} />
      <img src={chartPie} alt="chartPie" className={style.chartPie} />
      <div className={style.chartMovile}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
