"use client";

import { useEffect, useState } from "react";

export const TwitchEmbed = () => {
  const [hostName, setHostName] = useState("localhost");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setHostName(window.location.hostname);
  }, []);

  const url = new URL("https://player.twitch.tv");
  url.searchParams.append("channel", "monstercat");
  url.searchParams.append("parent", hostName);

  return (
    <div className="bg-base-900">
      <div className="mx-auto aspect-video max-w-screen-lg overflow-hidden rounded">
        <iframe
          src={url.toString()}
          height="100%"
          width="100%"
          allowFullScreen
        />
      </div>
    </div>
  );
};
