import React from "react";
import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { IData } from "./types/type";

export default function Weather() {
  const [location, setLocation] = React.useState<string>("rome");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchData = (e: any) => {
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
        <button onClick={fetchData}>
          <BsSearch />
        </button>
      </div>
      <div className="weather-content">
        <h2>{data?.weather?.[0].description}</h2>
      </div>
    </div>
  );
}
