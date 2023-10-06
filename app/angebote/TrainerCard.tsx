import Image from "next/image";
import { Lizenz } from "../../model/Lizenz";
import { Prose } from "../../components/Prose";

interface Props {
  name: string;
  lizenzen: Array<Lizenz>;
  beschreibung: string;
  bild: string;
}

export const TrainerCard = ({ name, lizenzen, bild, beschreibung }: Props) => (
  <div className="flex gap-4 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col sm:gap-10">
    <Image
      src={bild}
      alt=""
      height={320} // max-h-80
      width={384} // max-w-sm
      className="h-full max-h-80 w-full rounded-2xl object-cover sm:h-80 sm:w-60"
    />
    <section className="space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <h3 className="heading-extrasmall pt-2">{name}</h3>
        {lizenzen.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {lizenzen.map((lizenz) => (
              <div
                key={lizenz.id}
                className="badge-outline badge px-4 py-3 text-accent"
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
