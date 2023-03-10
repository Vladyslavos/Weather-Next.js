import React from "react";
import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { IData } from "../../types/type";
import WeatherInfo from "../weather-info/WeatherInfo";
import styles from "../search-bar/Search.module.scss";
import Spinner from "../spinner/Spinner";
import { textAnimation } from "../../features/animation/Animation";
import { motion } from "framer-motion";
import Icon from "../icons/Icon";

export default function SearchBar() {
  const [location, setLocation] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData>();
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const fetchData = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setLocation("");
      setLoading(false);
    } catch (e) {
      console.warn("error");
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      className={styles.searchbar}
      initial="hidden"
      whileInView="visible"
      custom={2}
      variants={textAnimation}
    >
      <Head>Weather on Next</Head>
      {loading && <Spinner />}
      <div className={styles.search}>
        <form>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLocation(e.target.value);
            }}
            ref={inputRef}
          />
          <button onClick={fetchData}>
            <BsSearch />
          </button>
        </form>
      </div>
      {data && <WeatherInfo data={data} />}
      {!data && <Icon />}
    </motion.div>
  );
}
