"use client";

import { Neuigkeit } from "../../model/Neuigkeit";
import { useEffect, useState } from "react";
import { getNeuigkeiten } from "../../api/api";
import { Button } from "../../components/Button";
import { NeuigkeitCard } from "../../components/NeuigkeitCard";
import { LoadingSpinnerIcon } from "../../components/icons/LoadingSpinnerIcon";

interface Props {
  neuigkeiten: Array<Neuigkeit>;
  paginationTotal: number;
}

export function FurtherNeuigkeiten({
  neuigkeiten,
  paginationTotal,
}: Readonly<Props>) {
  const [furtherNeuigkeiten, setFurtherNeuigkeiten] = useState<
    Array<Neuigkeit>
  >([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cachedPage = sessionStorage.getItem("page");
    if (cachedPage !== null) {
      setPage(parseInt(cachedPage));
    }
    const cachedNeuigkeiten = sessionStorage.getItem("neuigkeiten");
    if (cachedNeuigkeiten !== null) {
      setFurtherNeuigkeiten(JSON.parse(cachedNeuigkeiten));
    }
  }, []);

  async function getMoreNeuigkeiten() {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const { neuigkeiten } = await getNeuigkeiten(6, nextPage);
      setFurtherNeuigkeiten((prevNeuigkeiten) => {
        const updatedNeuigkeiten = [...prevNeuigkeiten, ...neuigkeiten];
        sessionStorage.setItem(
          "neuigkeiten",
          JSON.stringify(updatedNeuigkeiten),
        );
        return updatedNeuigkeiten;
      });
      setPage(nextPage);
      sessionStorage.setItem("page", nextPage.toString());
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

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
          className="sm:hover:!opacity-100 sm:group-hover/container:opacity-50"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ))}
      {neuigkeiten.length + furtherNeuigkeiten.length < paginationTotal && (
        <div className="col-span-full mx-auto w-fit">
          <Button
            onClick={getMoreNeuigkeiten}
            disabled={isLoading}
            startIcon={isLoading ? <LoadingSpinnerIcon /> : undefined}
          >
            Mehr anzeigen
          </Button>
        </div>
      )}
    </>
  );
}
