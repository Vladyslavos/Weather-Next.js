import React from "react";
import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function Weather(props: any) {
  const [location, setLocation] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchData = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = axios.get(url);
  };
  return (
    <div>
      <Head>Weather on Next</Head>
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLocation(e.target.value);
            }}
          />
        </form>
        <button onClick={fetchData}>FetchData</button>
      </div>
      <div className="weather-content"></div>
    </div>
  );
}
