import React from "react";
import { IData } from "../../types/type";
import Image from "next/image";
import { textAnimation } from "../../features/Animation";
import { motion } from "framer-motion";

interface IProps {
  data: IData;
}

export default function WeatherInfo({ data }: IProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={2}
      variants={textAnimation}
    >
      <h1>Current weather in {data?.name}</h1>
      <p>{data?.weather?.[0].main}</p>
      <p>{data?.main.feels_like}</p>
      <Image
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather-img"
        width="200"
        height="200"
      />
      <p>{data.main.temp.toFixed(0)}&#176;</p>
    </motion.div>
  );
}
