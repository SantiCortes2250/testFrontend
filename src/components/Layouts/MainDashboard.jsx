import React from 'react'
import barChartbg from '../../assets/images/barChartbg.png'
import bestSellingbg from '../../assets/images/bestSellingbg.png'
import chartSelling from '../../assets/images/chartSelling.png'
import Charts from '../UI/Charts'
import Galleries from '../UI/galleries'
import style from '../../styles/dashboard.module.css'



const MainDashboard = () => {
  return (
    <div className={style.main_dashboard}>
        <div className={style.container_chartbest}>
          <img src={chartSelling} alt="chartSelling" className={style.chartSelling}/>
          <img src={bestSellingbg} alt="bestSellingbg" className={style.bestSellingbg}/>
        </div>
        <div className={style.container_barChart}>
          <img src={barChartbg} alt="barChartbg" className={style.barChartbg}/>
        </div>
        <Charts/>
        <Galleries/>
    </div>
  )
}

export default MainDashboard