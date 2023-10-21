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

interface Props {
  teams: Array<Team>;
}

export const FormationTabs = ({ teams }: Props) => (
  <div className="container-md">
    <h2 className="heading-normal mb-8 text-accent">Unsere Formationsteams</h2>
    <Tab.Group>
      <Tab.List className="mb-4 grid grid-cols-2 gap-1 rounded-2xl bg-base-900 p-1.5 sm:flex">
        {teams.map((team) => (
          <Tab key={team.id} as={Fragment}>
            {({ selected }) => (
              <button
                className={twJoin(
                  "text-extralarge grow rounded-xl py-2 font-bold text-base-300 outline-0 transition-all",
                  selected
                    ? "gold-gradient text-accent"
                    : "hover:bg-base-700 hover:text-base-100"
                )}
              >
                {team.titel}
              </button>
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
            <section>
              <h3 className="heading-small mb-4 mt-8 text-accent">Trainer</h3>
              {team.trainers.map((trainer) => (
                <TrainerCard
                  key={trainer.id}
                  name={trainer.person.vorname + " " + trainer.person.nachname}
                  lizenzen={[]}
                  beschreibung={trainer.beschreibung}
                  bild={trainer.person.bild.url}
                />
              ))}
            </section>
            {team.kapitaene.length > 0 && (
              <section>
                <h3 className="heading-small mb-4 mt-8 text-accent">
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
