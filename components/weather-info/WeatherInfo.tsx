import React from "react";
import { IData } from "../../types/type";
import Image from "next/image";
import { textAnimation } from "../../features/animation/Animation";
import { motion } from "framer-motion";
import styles from "../../components/weather-info/WeatherInfo.module.scss";

interface IProps {
  data: IData;
}

export default function WeatherInfo({ data }: IProps) {
  console.log(data);

  const toCelsium = function (tempValue: number) {
    return Math.floor(+tempValue.toFixed(0) - 273.15).toFixed(0);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={2}
      variants={textAnimation}
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        custom={3}
        variants={textAnimation}
        className={styles.name}
      >
        Current weather in {data?.name}
      </motion.h1>
      <motion.div
        className={styles.top}
        initial="hidden"
        whileInView="visible"
        custom={3}
        variants={textAnimation}
      >
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-img"
            width="100"
            height="100"
          />
          <p className={styles.main}>{data?.weather?.[0].main}</p>
        </div>
        <p className={styles.temperature}>{toCelsium(data.main.temp)}&#176;C</p>
      </motion.div>
      <div className={styles.middle}>
        <div>
          <p>Min temperature</p>
          <span>{toCelsium(data.main.temp_min)}&#176;C</span>
        </div>
        <div>
          <p>Max temperature</p>
          <span>{toCelsium(data.main.temp_max)}&#176;C</span>
        </div>
        <div>
          <p>Wind speed</p>
          <span>{data.wind.speed}km/h</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <span>{toCelsium(data.main.feels_like)}&#176;</span>
          <p>Feels like</p>
        </div>
        <div className="">
          <span>{data.main.humidity}%</span>
          <p>Humidity</p>
        </div>
        <div className="">
          <span>{data.wind.speed.toFixed(0)} MPH</span>
          <p>Winds</p>
        </div>
      </div>
    </motion.div>
  );
}
