import Image from "next/image";
import { Lizenz } from "@/model/Lizenz";
import { Prose } from "@/components/Prose";

interface Props {
  name: string;
  lizenzen: Array<Lizenz>;
  beschreibung: string;
  bild: string;
}

export const TrainerCard = ({ name, lizenzen, bild, beschreibung }: Props) => (
  <div className="flex rounded-xl bg-white shadow max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col">
    <Image
      src={bild}
      alt=""
      height={320} // max-h-80
      width={384} // max-w-sm
      className="size-full max-h-80 rounded-xl object-cover object-top sm:h-80 sm:w-60"
    />
    <section className="p-5 sm:p-6">
      <h3 className="text-2xl font-semibold text-base-900 sm:text-3xl">
        {name}
      </h3>
      {lizenzen.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {lizenzen.map((lizenz) => (
            <div
              key={lizenz.id}
              className="rounded-full bg-secondary-50 px-4 py-1 text-xs text-secondary-900 sm:text-sm"
            >
              {lizenz.name}
            </div>
          ))}
        </div>
      )}
      <Prose content={beschreibung} className="mt-4 max-w-full" />
    </section>
  </div>
);
