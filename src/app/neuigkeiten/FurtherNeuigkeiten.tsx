"use client";

import { Neuigkeit } from "@/model/Neuigkeit";
import { getNeuigkeiten } from "@/api/api";
import { Button } from "@/components/Button";
import { NeuigkeitCard } from "@/components/NeuigkeitCard";
import { LoadingSpinnerIcon } from "@/components/icons/LoadingSpinnerIcon";
import { useSyncExternalStore, useState } from "react";

const SESSION_STORAGE_CHANGE_EVENT = "rgc-session-storage-change";

function subscribeToSessionStorage(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SESSION_STORAGE_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SESSION_STORAGE_CHANGE_EVENT, onStoreChange);
  };
}

const getPageSnapshot = () => window.sessionStorage.getItem("page") ?? "1";
const getNeuigkeitenSnapshot = () =>
  window.sessionStorage.getItem("neuigkeiten") ?? "[]";
const getServerPageSnapshot = () => "1";
const getServerNeuigkeitenSnapshot = () => "[]";

interface Props {
  neuigkeiten: Array<Neuigkeit>;
  paginationTotal: number;
}

export function FurtherNeuigkeiten({
  neuigkeiten,
  paginationTotal,
}: Readonly<Props>) {
  const storedPage = useSyncExternalStore(
    subscribeToSessionStorage,
    getPageSnapshot,
    getServerPageSnapshot,
  );
  const storedNeuigkeiten = useSyncExternalStore(
    subscribeToSessionStorage,
    getNeuigkeitenSnapshot,
    getServerNeuigkeitenSnapshot,
  );
  const page = parseInt(storedPage);
  const furtherNeuigkeiten = JSON.parse(storedNeuigkeiten) as Array<Neuigkeit>;
  const [isLoading, setIsLoading] = useState(false);

  async function getMoreNeuigkeiten() {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const { neuigkeiten } = await getNeuigkeiten(6, nextPage);
      const updatedNeuigkeiten = [...furtherNeuigkeiten, ...neuigkeiten];
      sessionStorage.setItem("neuigkeiten", JSON.stringify(updatedNeuigkeiten));
      sessionStorage.setItem("page", nextPage.toString());
      window.dispatchEvent(new Event(SESSION_STORAGE_CHANGE_EVENT));
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
          vorschaubild={neuigkeit.vorschaubild?.url}
          className="sm:hover:!opacity-100 sm:group-hover/container:opacity-50"
          sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 304px"
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
