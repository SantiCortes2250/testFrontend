import React from 'react'
import iconNotification from '../../assets/images/iconNotification.png'
import iconChat from '../../assets/images/iconChat.png'
import iconPromos from '../../assets/images/iconPromos.png'
import style from '../../styles/notificationsbtn.module.css'


const NotificationButtons = () => {
  return (
    <div className={style.btns_notification}>
      <button className={style.iconNotification}>
        <img src={iconNotification} alt="iconNotification" />
        <span className={style.span_noti}></span>
      </button>
      <button className={style.iconChat}>
        <img src={iconChat} alt="iconChat" />
        <span className={style.span_noti}></span>
      </button>
      <button className={style.iconPromos}>
        <img src={iconPromos} alt="iconPromos" />
        <span></span>
      </button>
    </div>
  )
}

export default NotificationButtons