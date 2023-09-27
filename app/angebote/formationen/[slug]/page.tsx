import { getFormation, getSlugs } from "../../../../api/api";
import { Main } from "../../../../components/Main";
import { PageHeading } from "../../../../components/PageHeading";
import { Prose } from "../../../../components/Prose";
import { TrainerCard } from "../../TrainerCard";
import Image from "next/image";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("formationen");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function FormationPage({ params }: Props) {
  const formation = await getFormation(params.slug);

  return (
    <Main>
      <PageHeading>{formation.titel}</PageHeading>
      <Prose content={formation.beschreibung} className="container-lg" />
      {formation.teams.map((team) => (
        <>
          <div key={team.id}>
            <h2>Titel: {team.titel}</h2>
            <p>Liga: {team.liga.name}</p>
            <p>Choreo: {team.choreo.name}</p>
            {team.trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                name={trainer.person.vorname + " " + trainer.person.nachname}
                lizenzen={[]}
                beschreibung={trainer.beschreibung}
                bild={trainer.person.bild.url}
              />
            ))}
            <h2>Kapitäne:</h2>
            {team.kapitaene.map((kapitaen) => (
              <div key={kapitaen.id}>
                <p>{kapitaen.vorname}</p>
                <Image
                  src={kapitaen.bild.url}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            ))}
            <h2>Mitglieder:</h2>
            {team.mitglieder.map((mitglied) => (
              <div key={mitglied.id}>
                <p>{mitglied.vorname}</p>
                <Image
                  src={mitglied.bild.url}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </Main>
  );
}
