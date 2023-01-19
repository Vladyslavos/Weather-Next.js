import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/search-bar/SearchBar";
import WeatherApp from "../components/weather-app/WeatherApp";
import Weather from "../components/weather-info/WeatherInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WeatherApp />
    </>
  );
}
