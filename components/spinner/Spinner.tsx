import React from "react";
import Image from "next/image";
import spinner from "../../public/spinner.gif";

export default function Spinner() {
  return (
    <div>
      <h1>Loading</h1>
      <Image src={spinner} alt={"spinner"} />
    </div>
  );
}
