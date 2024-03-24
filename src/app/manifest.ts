import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    short_name: "RGC Nürnberg",
    description:
      "Der TSC Rot-Gold-Casino Nürnberg e.V. (RGC Nürnberg) ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#171717",
    theme_color: "#171717",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
