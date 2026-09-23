"use client";

import { useSyncExternalStore } from "react";

const subscribeToLocation = () => () => {};
const getHostName = () => window.location.hostname;
const getServerHostName = () => "localhost";

export const TwitchEmbed = () => {
  const hostName = useSyncExternalStore(
    subscribeToLocation,
    getHostName,
    getServerHostName,
  );

  const url = new URL("https://player.twitch.tv");
  url.searchParams.append("channel", "monstercat"); // TODO: replace with actual channel
  url.searchParams.append("parent", hostName);

  return (
    <div className="bg-base-900">
      <div className="mx-auto aspect-video max-w-(--breakpoint-lg) overflow-hidden rounded-sm">
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
