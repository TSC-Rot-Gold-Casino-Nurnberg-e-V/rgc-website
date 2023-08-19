"use client";

import { Neuigkeit } from "../../model/Neuigkeit";
import { useEffect, useState } from "react";
import { getNeuigkeiten } from "../../api/api";
import { Button } from "../../components/Button";
import { NeuigkeitCard } from "../../components/NeuigkeitCard";

interface Props {
  neuigkeiten: Array<Neuigkeit>;
  paginationTotal: number;
}

export function FurtherNeuigkeiten({ neuigkeiten, paginationTotal }: Props) {
  const [furtherNeuigkeiten, setFurtherNeuigkeiten] = useState<
    Array<Neuigkeit>
  >([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function getMoreNeuigkeiten() {
    setIsLoading(true);
    const nextPage = page + 1;
    const { neuigkeiten } = await getNeuigkeiten(6, nextPage);
    setFurtherNeuigkeiten((prevNeuigkeiten) => {
      const updatedNeuigkeiten = [...prevNeuigkeiten, ...neuigkeiten];
      sessionStorage.setItem("neuigkeiten", JSON.stringify(updatedNeuigkeiten));
      return updatedNeuigkeiten;
    });
    setPage(nextPage);
    sessionStorage.setItem("page", nextPage.toString());
    setIsLoading(false);
  }

  useEffect(() => {
    const prevScrollY = sessionStorage.getItem("prevScrollY");
    const prevPathname = sessionStorage.getItem("prevPathname");
    if (prevScrollY !== null && prevPathname?.startsWith("/neuigkeiten/")) {
      window.scrollTo(0, parseInt(prevScrollY));
    }
    setPage(parseInt(sessionStorage.getItem("page") ?? "1"));
    const neuigkeitenInStorage = sessionStorage.getItem("neuigkeiten");
    if (neuigkeitenInStorage !== null) {
      setFurtherNeuigkeiten(JSON.parse(neuigkeitenInStorage));
    }
  }, []);

  return (
    <>
      {furtherNeuigkeiten.map((neuigkeit) => (
        <NeuigkeitCard
          slug={neuigkeit.slug}
          key={neuigkeit.slug}
          titel={neuigkeit.titel}
          vorschautext={neuigkeit.vorschautext}
          datum={neuigkeit.datum}
          vorschaubild={neuigkeit.vorschaubild.url}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
