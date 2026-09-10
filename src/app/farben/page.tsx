import { Metadata } from "next";
import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import rgcColors from "@/styles/rgc-colors.json";
import { ColorSwatch } from "./ColorSwatch";

export const metadata: Metadata = {
  title: "RGC-Farben",
  description:
    "Die digitale RGC-Farbpalette mit den exakten Hex-Werten.",
  robots: {
    index: false,
    follow: false,
  },
};

const paletteSections = [
  {
    key: "primary",
    title: "Primärfarben",
    description: "Gold- und warme Brauntöne",
    colors: rgcColors.primary,
  },
  {
    key: "secondary",
    title: "Sekundärfarben",
    description: "Rote Akzentfarben",
    colors: rgcColors.secondary,
  },
  {
    key: "base",
    title: "Basisfarben",
    description: "Neutrale Grundfarben",
    colors: rgcColors.base,
  },
];

export default function FarbenPage() {
  return (
    <Main>
      <PageHeading>RGC-Farben</PageHeading>
      <section className="container-lg space-y-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {paletteSections.map((palette) => (
            <section
              key={palette.key}
              className="rounded-2xl bg-base-50 p-5 ring-1 ring-base-200 sm:p-6"
              aria-labelledby={`${palette.key}-heading`}
            >
              <div className="mb-5 space-y-1">
                <h2
                  id={`${palette.key}-heading`}
                  className="text-2xl font-bold text-base-900"
                >
                  {palette.title}
                </h2>
                <p className="text-base-600">{palette.description}</p>
              </div>
              <div className="grid gap-3">
                {Object.entries(palette.colors).map(([shade, hex]) => (
                  <ColorSwatch
                    key={shade}
                    token={`${palette.key}-${shade}`}
                    shade={shade}
                    hex={hex}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Main>
  );
}
