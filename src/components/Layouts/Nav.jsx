import React from "react";
import styles from "../../styles/nav.module.css";
import Logo from "../../assets/images/Logo.png";
import iconMenu from "../../assets/images/iconMenu.png";
import iconSettings from "../../assets/images/iconSettings.png";
import SearchBar from "../UI/SearchBar";
import NotificationButtons from "../UI/NotificationButtons";
import Profile from "../UI/Profile";

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.main_nav}>
        <button className={styles.btn_menu}>
          <img src={iconMenu} alt="Menu" />
        </button>
        <img src={Logo} alt="Logo" className={styles.img_logo} />
        <SearchBar />
        <button className={styles.btn_settings}>
          <img src={iconSettings} alt="Settings" />
        </button>
        <NotificationButtons />
        <Profile />
      </div>
      <div className={styles.breadcrumb}>
        <p>Dashboard /</p>
      </div>
    </div>
  );
};

export default Nav;
