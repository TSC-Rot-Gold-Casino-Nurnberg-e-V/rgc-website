import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { Lizenz } from "../model/Lizenz";

interface Props {
  name: string;
  licences: Array<Lizenz>;
  description: string;
  image: string;
}

export const TrainerCard = ({ name, licences, image, description }: Props) => (
  <div className="flex gap-4 py-12 max-sm:mx-auto max-sm:max-w-sm max-sm:flex-col sm:gap-10">
    <Image
      src={image}
      alt=""
      height={320} // max-h-80
      width={384} // max-w-sm
      className="h-full max-h-80 w-full rounded-2xl object-cover sm:h-80 sm:w-60"
    />
    <section className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="heading-extrasmall pt-2">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {licences.map((licence) => (
            <div
              key={licence.id}
              className="badge-outline badge px-4 py-3 text-secondary-900"
            >
              {licence.attributes.name}
            </div>
          ))}
        </div>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(description),
        }}
      />
    </section>
  </div>
);
