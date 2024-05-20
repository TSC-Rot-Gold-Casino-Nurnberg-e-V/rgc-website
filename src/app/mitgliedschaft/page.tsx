import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { LinkButton } from "@/components/LinkButton";

export const metadata = {
  title: "Mitgliedschaft",
  description: "So wirst du Mitglied im TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default function Mitgliedschaft() {
  return (
    <Main>
      <PageHeading>Mitglied werden</PageHeading>
      <div className="container-md space-y-16">
        <p className="text-base sm:text-lg">
          Der Beitritt zu unserem Tanzsportclub ist ganz simpel! Folge diesen
          einfachen Schritten, um Teil unserer lebendigen Gemeinschaft zu
          werden.
        </p>
        <section className="space-y-4">
          <h2 className="text-3xl">Schritt 1: Finde deine perfekte Gruppe</h2>
          <p className="text-base sm:text-lg">
            Jeder Tänzer hat einen eigenen Stil und ein eigenes Tempo. Wir
            bieten eine Vielzahl von Gruppen an, um auf die Bedürfnisse jedes
            Einzelnen einzugehen. Egal, ob du ein Anfänger bist, der die
            Grundlagen erlernen möchte, oder ein erfahrener Tänzer, der eine
            Herausforderung sucht. Wir haben eine passende Gruppe für dich.
          </p>
          <LinkButton href="/angebote" text="Entdecke unsere Angebote" />
        </section>
        <section className="space-y-4">
          <h2 className="text-3xl">
            Schritt 2: An Schnuppertrainings teilnehmen
          </h2>
          <p className="text-base sm:text-lg">
            Du bist dir nicht sicher, welche Gruppe zu dir passt? Das ist kein
            Problem! Wir laden dich ein, an bis zu
            <span className="font-bold"> drei kostenlosen Probetrainings </span>
            teilzunehmen. Das ist eine gute Gelegenheit, unsere Trainer
            kennenzulernen, sich mit anderen Tänzern auszutauschen und ein
            Gefühl für unseren Unterrichtsstil zu bekommen. Komm einfach zu der
            gewünschten Gruppenstunde vorbei und probiere es aus!
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-3xl">Schritt 3: Mitglied werden</h2>
          <p className="text-base sm:text-lg">
            Das Probetraining hat dir gefallen und du bist bereit, bei uns
            mitzumachen? Fantastisch! Der letzte Schritt ist die Anmeldung über
            unser separates Anmeldeportal. Wir freuen uns darauf, dich in
            unserem Tanzsportclub begrüßen zu dürfen!
          </p>
          <LinkButton
            href="https://m.netxp-verein.de/N/5863"
            target="_blank"
            text="Anmeldeportal"
          />
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl">Weitere Fragen?</h2>
          <p className="text-base sm:text-lg">
            Wenn du Fragen hast oder Hilfe bei der Anmeldung benötigst, zögere
            bitte nicht, uns zu kontaktieren.
          </p>
          <LinkButton href="/kontakt" text="Kontaktformular" />
        </section>
      </div>
    </Main>
  );
}
