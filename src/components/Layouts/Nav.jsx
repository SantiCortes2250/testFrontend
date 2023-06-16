import React from "react";
import styles from "../../styles/nav.module.css";
import MenuButton from "../UI/MenuButton";
import Logo from "../../assets/images/Logo.png";
import SearchBar from "../UI/SearchBar";
import BtnSettings from "../UI/BtnSettings";
import NotificationButtons from "../UI/NotificationButtons";
import Profile from "../UI/profile";

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.main_nav}>
        <MenuButton />
        <img src={Logo} alt="Logo" className={styles.img_logo} />
        <SearchBar />
        <BtnSettings />
        <NotificationButtons />
        <Profile />
      </div>
      <div className={styles.breadcrumb}>
        <p>Dashboard/</p>
      </div>
    </div>
  );
};

export default Nav;
