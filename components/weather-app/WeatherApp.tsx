import React from "react";
import SearchBar from "../search-bar/SearchBar";
import styles from "../weather-app/WeatherApp.module.scss";
import Head from "next/head";

export default function WeatherApp() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Weather on Next.js</title>
      </Head>
      <SearchBar />
    </div>
  );
}
