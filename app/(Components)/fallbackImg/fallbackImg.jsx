"use client";
import React, { useState } from "react";
import newsImg from "../../../public/assets/imgs/news.jpg";
import Image from "next/image";

export default function FallbackImg({ img, title }) {
  const [imgError, setImgError] = useState(false);
  return (
    <Image
      src={imgError || img === null ? newsImg : img}
      alt={title}
      className="w-100 rounded-top-2"
      height={200}
      width={300}
      onError={(err) => {
        setImgError(true);
      }}
    />
  );
}
