import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";
import { TwitchEmbed } from "@/app/livestream/TwitchEmbed";

export const metadata: Metadata = {
  title: "Livestream",
  description:
    "Veranstaltungen des TSC Rot-Gold-Casino Nürnberg e.V. live und in Echtzeit. Genieße exklusive Einblicke hinter die Kulissen und aktuelle Highlights aus dem Vereinsleben.",
};

export default async function LivestreamPage() {
  return (
    <Main>
      <PageHeading>Livestream</PageHeading>
      <TwitchEmbed />
    </Main>
  );
}
