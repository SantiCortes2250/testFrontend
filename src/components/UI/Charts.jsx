import React from "react";
import chartWave from "../../assets/images/waveChart.png";
import chartLine from "../../assets/images/waveLineChart.png";
import chartPie from "../../assets/images/pieChart.png";
import chartProgress from "../../assets/images/progressBar.png";
import chartMovile from "../../assets/images/pieChartMovile.png";
import style from "../../styles/charts.module.css";

const Charts = () => {
  return (
    <div className={style.contend_charts}>
      <img src={chartProgress} alt="chartProgress" className={style.chartProgress}/>
      <img src={chartWave} alt="chartWave" className={style.chartWave}/>
      <img src={chartLine} alt="chartLine" className={style.chartLine}/>
      <img src={chartPie} alt="chartPie" className={style.chartPie}/>
      <img src={chartMovile} alt="chartMovile" className={style.chartMovile}/>
    </div>
  );
};

export default Charts;
