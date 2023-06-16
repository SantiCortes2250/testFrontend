import React from 'react'
import iconSettings from '../../assets/images/iconSettings.png'
import style from '../../styles/btnsettings.module.css'


const BtnSettings = () => {
  return (
    <button className={style.btn_settings}>
        <img src={iconSettings} alt="Settings" />
    </button>
  )
}

export default BtnSettings