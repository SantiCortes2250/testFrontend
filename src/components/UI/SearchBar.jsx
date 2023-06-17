import React, { useState } from "react";
import iconSearch from "../../assets/images/iconSearch.png";
import styles from "../../styles/searchbar.module.css";

const SearchBar = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.input_search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">
        <img src={iconSearch} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
