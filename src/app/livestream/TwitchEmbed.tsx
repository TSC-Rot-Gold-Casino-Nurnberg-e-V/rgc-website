export const TwitchEmbed = () => (
  <div className="bg-base-900">
    <div className="mx-auto aspect-video max-w-screen-lg">
      <iframe
        src="https://player.twitch.tv/?channel=monstercat&parent=localhost"
        height="100%"
        width="100%"
        allowFullScreen
      />
    </div>
  </div>
);
