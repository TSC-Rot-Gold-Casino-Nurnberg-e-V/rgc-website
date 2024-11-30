"use client";

import snowflake from "../../public/probemonat/snowflake.png";

import { Snowfall as ReactSnowfall } from "react-snowfall";

export const Snowfall = () => {
  let imageElement: HTMLImageElement | undefined;

  if (typeof window !== "undefined") {
    imageElement = document.createElement("img");
    imageElement.src = snowflake.src;
  }

  return (
    <ReactSnowfall
      images={imageElement ? [imageElement] : undefined}
      radius={[0.5, 20]}
    />
  );
};
