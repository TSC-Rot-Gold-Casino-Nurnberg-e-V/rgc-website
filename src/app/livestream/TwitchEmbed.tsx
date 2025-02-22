export const TwitchEmbed = () => {
  const url = new URL("https://player.twitch.tv");
  url.searchParams.append("channel", "monstercat");
  url.searchParams.append("parent", "localhost");
  url.searchParams.append("parent", "rot-gold-casino.de");

  return (
    <div className="bg-base-900">
      <div className="mx-auto aspect-video max-w-screen-lg">
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
