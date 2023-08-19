import { getNeuigkeiten } from "../../api/api";
import { FurtherNeuigkeiten } from "./FurtherNeuigkeiten";
import { NeuigkeitCard } from "../../components/NeuigkeitCard";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";

export default async function NeuigkeitenPage() {
  const { neuigkeiten, pagination } = await getNeuigkeiten(6);

  return (
    <Main className="bg-base-950">
      <PageHeading>Neuigkeiten</PageHeading>
      <div className="group/container container-lg grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {neuigkeiten.map((neuigkeit) => (
          <NeuigkeitCard
            slug={neuigkeit.slug}
            key={neuigkeit.slug}
            titel={neuigkeit.titel}
            vorschautext={neuigkeit.vorschautext}
            datum={neuigkeit.datum}
            vorschaubild={neuigkeit.vorschaubild.url}
            className="hover:!opacity-100 group-hover/container:opacity-50"
          />
        ))}
        <FurtherNeuigkeiten
          neuigkeiten={neuigkeiten}
          paginationTotal={pagination.total}
        />
      </div>
    </Main>
  );
}
