import React from 'react'
import styles from '../../styles/btnmenu.module.css'
import iconMenu from '../../assets/images/iconMenu.png'

const MenuButton = () => {
  return (
    <button className={styles.btn_menu}>
      <img src={iconMenu} alt="Menu" />
    </button>
  );
};

export default MenuButton
