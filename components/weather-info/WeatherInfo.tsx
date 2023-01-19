import React from "react";
import { IData } from "../../types/type";

interface IProps {
  data: IData;
}

export default function WeatherInfo({ data }: IProps) {
  return (
    <div>
      {!data && <h3>Not Found</h3>}
      <h1>Current weather in {data?.name}</h1>
      <p>{data?.weather?.[0].main}</p>
      <p>{data?.main.feels_like}</p>
    </div>
  );
}
