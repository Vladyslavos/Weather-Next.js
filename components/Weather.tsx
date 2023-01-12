import React from "react";
import { IData } from "../types/type";

interface IProps {
  data: IData;
}

export default function Weather({ data }: IProps) {
  return <div>{data?.weather?.[0].main}</div>;
}
