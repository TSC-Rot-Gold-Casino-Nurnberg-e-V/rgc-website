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
  <div className="flex gap-4 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col sm:gap-8">
    <Image
      src={bild}
      alt=""
      height={320} // max-h-80
      width={384} // max-w-sm
      className="size-full max-h-80 rounded-2xl object-cover sm:h-80 sm:w-60"
    />
    <section className="space-y-4">
      <div className="space-y-2">
        <h3 className="pt-2 text-2xl sm:text-3xl">{name}</h3>
        {lizenzen.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {lizenzen.map((lizenz) => (
              <div
                key={lizenz.id}
                className="rounded-full border border-secondary-900 px-4 py-1 text-xs sm:text-sm"
              >
                {lizenz.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <Prose content={beschreibung} />
    </section>
  </div>
);
