import React from "react";
import SearchBar from "../search-bar/SearchBar";
import styles from "../weather-app/WeatherApp.module.scss";

export default function WeatherApp() {
  return (
    <div className={styles.app}>
      <SearchBar />
    </div>
  );
}
