import React from "react";
import iconSearch from "../../assets/images/iconSearch.png";
import styles from "../../styles/searchbar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.input_search}>
      <input type="text" placeholder="" />
      <button type="submit">
        <img src={iconSearch} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
