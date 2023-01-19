import React from "react";
import SearchBar from "../search-bar/SearchBar";
import styles from "../weather-app/WeatherApp.module.scss";
import Image from "next/image";
export default function WeatherApp() {
  return (
    <div className={styles.app}>
      <SearchBar />
    </div>
  );
}
