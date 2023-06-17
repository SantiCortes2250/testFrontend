import React from "react";
import btnProfile from "../../assets/images/btnProfile.png";
import iconUser from "../../assets/images/iconUser.png";
import style from "../../styles/profile.module.css";

const Profile = () => {
  return (
    <div className={style.profile}>
      <img src={iconUser} alt="iconUser" className={style.proflile_picture} />
      <p className={style.name_profile}>David</p>
      <button className={style.btn_Profile}>
        <img src={btnProfile} alt="btnProfile" />
      </button>
    </div>
  );
};

export default Profile;
