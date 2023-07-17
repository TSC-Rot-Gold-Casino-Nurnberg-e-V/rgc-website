"use client";

import { Neuigkeit } from "../../model/Neuigkeit";
import { useEffect, useState } from "react";
import { getNeuigkeiten } from "../../api/api";
import { Button } from "../../components/Button";
import { NeuigkeitCard } from "./NeuigkeitCard";

export function FurtherNeuigkeiten() {
  const [neuigkeiten, setNeuigkeiten] = useState<Array<Neuigkeit>>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function getMoreNeuigkeiten() {
    setIsLoading(true);
    const nextPage = page + 1;
    const { neuigkeiten } = await getNeuigkeiten(6, nextPage);
    setNeuigkeiten((prevNeuigkeiten) => {
      const updatedNeuigkeiten = [...prevNeuigkeiten, ...neuigkeiten];
      sessionStorage.setItem("neuigkeiten", JSON.stringify(updatedNeuigkeiten));
      return updatedNeuigkeiten;
    });
    setPage(nextPage);
    sessionStorage.setItem("page", nextPage.toString());
    setIsLoading(false);
  }

  useEffect(() => {
    const position = sessionStorage.getItem("position");
    const shouldRestorePreviousScrollPosition = sessionStorage
      .getItem("route")
      ?.startsWith("/neuigkeiten/");
    if (position !== null && shouldRestorePreviousScrollPosition) {
      window.scrollTo(0, parseInt(position));
    }
    setPage(parseInt(sessionStorage.getItem("page") ?? "1"));
    const neuigkeitenInStorage = sessionStorage.getItem("neuigkeiten");
    if (neuigkeitenInStorage !== null) {
      setNeuigkeiten(JSON.parse(neuigkeitenInStorage));
    }
  }, []);

  return (
    <>
      {neuigkeiten.map((neuigkeit) => (
        <NeuigkeitCard
          slug={neuigkeit.attributes.slug}
          key={neuigkeit.attributes.slug}
          titel={neuigkeit.attributes.titel}
          vorschautext={neuigkeit.attributes.vorschautext}
          datum={neuigkeit.attributes.datum}
          vorschaubild={neuigkeit.attributes.vorschaubild.data.attributes.url}
        />
      ))}
      {neuigkeiten.length + furtherNeuigkeiten.length < paginationTotal && (
        <div className="col-span-full mx-auto w-fit">
          <Button
            onClick={getMoreNeuigkeiten}
            disabled={isLoading}
            className={isLoading ? "loading" : undefined}
          >
            Mehr anzeigen
          </Button>
        </div>
      )}
    </>
  );
}
