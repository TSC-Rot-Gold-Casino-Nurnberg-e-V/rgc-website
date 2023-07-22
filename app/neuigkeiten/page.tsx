import { getNeuigkeiten } from "../../api/api";
import { FurtherNeuigkeiten } from "./FurtherNeuigkeiten";
import { NeuigkeitCard } from "./NeuigkeitCard";
import { PageHeading } from "../../components/PageHeading";

export default async function NeuigkeitenPage() {
  const { neuigkeiten, pagination } = await getNeuigkeiten(6);

  return (
    <main className="default-padding flex flex-col gap-6 bg-base-950 pb-12">
      <PageHeading>Neuigkeiten</PageHeading>
      <div className="group/container mx-auto grid max-w-screen-lg justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <FurtherNeuigkeiten
          neuigkeiten={neuigkeiten}
          paginationTotal={pagination.total}
        />
      </div>
    </main>
  );
}
