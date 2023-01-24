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
  const { name, weather, main, wind } = data;
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
        Current weather in {name}
      </motion.h1>
      <motion.div
        className={styles.top}
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={textAnimation}
      >
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-img"
            width="100"
            height="100"
          />
          <p className={styles.main}>{weather[0].main}</p>
        </div>
        <p className={styles.temperature}>{toCelsium(main.temp)}&#176;C 🌡️</p>
      </motion.div>
      <motion.div
        className={styles.middle}
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={textAnimation}
      >
        <div>
          <p>Min temperature</p>
          <span>{toCelsium(main.temp_min)}&#176;C</span>
        </div>
        <div>
          <p>Max temperature</p>
          <span>{toCelsium(main.temp_max)}&#176;C</span>
        </div>
        <div>
          <p>Wind speed</p>
          <span>{wind.speed}km/h</span>
        </div>
      </motion.div>
      <motion.div
        className={styles.bottom}
        initial="hidden"
        whileInView="visible"
        custom={5}
        variants={textAnimation}
      >
        <div>
          <span>{toCelsium(main.feels_like)}&#176;</span>
          <p>Feels like</p>
        </div>
        <div className="">
          <span>{main.humidity}%</span>
          <p>Humidity</p>
        </div>
        <div className="">
          <span>{wind.speed.toFixed(0)} MPH</span>
          <p>Winds</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
