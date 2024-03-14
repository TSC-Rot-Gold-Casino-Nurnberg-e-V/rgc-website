import Image from "next/image";
import Link from "next/link";
import { getCheftrainers, getVorstandsmitglieder } from "@/api/api";
import { PageHeading } from "@/components/PageHeading";
import { MailIcon } from "@/components/icons/MailIcon";
import { ReactElement } from "react";
import { TrainerCard } from "../angebote/TrainerCard";
import { Main } from "@/components/Main";
import { Button } from "@/components/Button";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Der Verein",
  description:
    "Vorstandsmitglieder, Cheftrainer und allgemeine Informationen zum TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default async function VereinsgeschichtePage() {
  const vorstandsmitglieder = await getVorstandsmitglieder();
  const cheftrainers = await getCheftrainers();
  return (
    <Main>
      <PageHeading>Der Verein</PageHeading>
      <section className="container-lg space-y-4">
        <h2 className="text-3xl font-bold text-base-900 sm:text-4xl">
          Über uns
        </h2>
        <p className="text-base sm:text-lg">
          Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und hat sich
          seitdem einen Namen sowohl in der deutschen Tanzsportszene durch
          sportliche Erfolge gemacht, als auch in der Region als wesentlicher
          Faktor des gesellschaftlichen Lebens. Mit etwa 600 Mitgliedern zählt
          er zu den größten Tanzsportclubs in Bayern und Deutschland.
        </p>
        <Link href="/vereinsgeschichte" className="block w-fit rounded-full">
          <Button
            tabIndex={-1}
            variant="secondary"
            endIcon={<ChevronRightIcon />}
          >
            Zur Vereinsgeschichte
          </Button>
        </Link>
      </section>
      <section className="container-lg space-y-10">
        <h2 className="text-center text-3xl font-bold text-base-900 sm:text-4xl">
          Vorstands&shy;mitglieder
        </h2>
        <div className="mx-auto grid max-w-fit grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vorstandsmitglieder.map((vorstandsmitglied, index) => (
            <div
              className="flex max-w-[300px] flex-col justify-between gap-6 rounded-xl bg-white p-8 shadow"
              key={vorstandsmitglied.id}
            >
              <div className="text-center">
                <Image
                  src={vorstandsmitglied.person.bild.url}
                  width={150}
                  height={150}
                  alt={`${vorstandsmitglied.person.vorname} ${vorstandsmitglied.person.nachname}`}
                  className="mx-auto mb-4 aspect-square rounded-full object-cover object-top"
                  priority={index < 3}
                />
                <h3 className="text-xl font-semibold text-base-900 sm:text-2xl">
                  {`${vorstandsmitglied.person.vorname} ${vorstandsmitglied.person.nachname}`}
                </h3>
                <p className="text-base-700">{vorstandsmitglied.rolle}</p>
              </div>
              <div className="space-y-2">
                {vorstandsmitglied.telefonnummer && (
                  <ContactLink
                    href={`tel:${vorstandsmitglied.telefonnummer}`}
                    text={vorstandsmitglied.telefonnummer}
                    icon={<PhoneIcon />}
                  />
                )}
                <ContactLink
                  href={`mailto:${vorstandsmitglied.email}`}
                  text={vorstandsmitglied.email}
                  icon={<MailIcon />}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container-lg space-y-10">
        <h2 className="text-center text-3xl font-bold text-base-900 sm:text-4xl">
          Cheftrainer
        </h2>
        {cheftrainers.map((cheftrainer) => (
          <section key={cheftrainer.id}>
            <h3 className="mb-5 text-2xl font-semibold max-sm:text-center sm:text-3xl">
              {cheftrainer.titel}
            </h3>
            <TrainerCard
              name={`${cheftrainer.trainer.person.vorname} ${cheftrainer.trainer.person.nachname}`}
              lizenzen={[]}
              beschreibung={cheftrainer.trainer.beschreibung}
              bild={cheftrainer.trainer.person.bild.url}
            />
          </section>
        ))}
      </section>
    </Main>
  );
}

interface ContactLinkProps {
  href: string;
  text: string;
  icon: ReactElement;
}

const ContactLink = ({ text, icon, href }: ContactLinkProps) => (
  <a href={href} className="flex w-fit gap-2 rounded-full">
    <div>{icon}</div>
    <span className="text-sm">{text}</span>
  </a>
);
