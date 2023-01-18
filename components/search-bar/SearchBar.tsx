import React from "react";
import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { IData } from "../../types/type";
import WeatherInfo from "../weather-info/WeatherInfo";
import styles from "../search-bar/Search.module.scss";

export default function SearchBar() {
  const [location, setLocation] = React.useState<string>("rome");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData>();
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchData = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(data);
      });
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className={styles.searchbar}>
      <Head>Weather on Next</Head>
      <div className={styles.search}>
        <form>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLocation(e.target.value);
            }}
            onKeyDown={fetchData}
          />
          <button onClick={fetchData}>
            <BsSearch />
          </button>
        </form>
      </div>
      {data && <WeatherInfo data={data} />}
    </div>
  );
}
