"use client";

import { Tab } from "@headlessui/react";
import { Team } from "../../../model/Team";
import { TrainerCard } from "../TrainerCard";
import Image from "next/image";
import { Fragment } from "react";
import { twJoin } from "tailwind-merge";
import { TrophyIcon } from "../../../components/icons/TrophyIcon";
import { MusicIcon } from "../../../components/icons/MusicIcon";
import { Prose } from "../../../components/Prose";
import { Button } from "../../../components/Button";

interface Props {
  teams: Array<Team>;
}

export const FormationTabs = ({ teams }: Props) => (
  <div className="container-md">
    <h2 className="heading-normal text-accent mb-8">Unsere Formationsteams</h2>
    <Tab.Group>
      <Tab.List className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-base-900 p-1.5 md:flex md:rounded-full">
        {teams.map((team) => (
          <Tab key={team.id} as={Fragment}>
            {({ selected }) => (
              <Button
                className={twJoin(
                  "w-full border-none text-base-100 outline-none max-md:rounded-lg",
                  !selected && "hover:bg-base-700 hover:text-base-50",
                )}
                variant={selected ? "primary" : "secondary"}
              >
                {team.titel}
              </Button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {teams.map((team) => (
          <Tab.Panel key={team.id} tabIndex={-1}>
            <Image
              src={team.bild.url}
              alt=""
              className="mb-4 aspect-[3/2] w-full rounded-xl object-cover"
              width={800}
              height={600}
              priority
            />
            <div className="text-extralarge flex justify-between gap-4 max-sm:flex-col">
              <div className="flex items-center gap-2">
                <MusicIcon />
                <p>{team.choreo.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <TrophyIcon />
                <p>{team.liga.name}</p>
              </div>
            </div>
            {team.choreo.beschreibung && (
              <Prose className="mt-4" content={team.choreo.beschreibung} />
            )}
            {team.trainers.length > 0 && (
              <section>
                <h3 className="heading-small text-accent mb-4 mt-8">Trainer</h3>
                {team.trainers.map((trainer) => (
                  <TrainerCard
                    key={trainer.id}
                    name={
                      trainer.person.vorname + " " + trainer.person.nachname
                    }
                    lizenzen={[]}
                    beschreibung={trainer.beschreibung}
                    bild={trainer.person.bild.url}
                  />
                ))}
              </section>
            )}
            {team.kapitaene.length > 0 && (
              <section>
                <h3 className="heading-small text-accent mb-4 mt-8">
                  {team.kapitaene.length > 1 ? "Kapitäne" : "Kapitän"}
                </h3>
                <div className="flex flex-wrap gap-4 max-sm:mx-auto max-sm:justify-around">
                  {team.kapitaene.map((kapitaen) => (
                    <div
                      key={kapitaen.id}
                      className="flex flex-col items-center space-y-6 rounded-xl p-4"
                    >
                      <Image
                        src={kapitaen.bild.url}
                        alt=""
                        height={128}
                        width={128}
                        className="rounded-full"
                      />
                      <p className="text-extralarge text-center font-bold">
                        {kapitaen.vorname} {kapitaen.nachname}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  </div>
);
