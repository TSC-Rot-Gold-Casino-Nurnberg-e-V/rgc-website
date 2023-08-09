import Link from "next/link";
import { MapIcon } from "../../components/icons/MapIcon";
import { Ort } from "../../model/Ort";
import { CalendarIcon } from "../../components/icons/CalendarIcon";

interface Props {
  titel: string;
  start: Date;
  ende: Date | null;
  slug: string;
  ort: Ort;
}

export const VeranstaltungCard = ({ slug, titel, start, ende, ort }: Props) => (
  <Link href={`/veranstaltungen/${slug}`} className="group block rounded-xl">
    <div className="flex rounded-xl bg-base-50 shadow transition-shadow hover:shadow-md">
      <div className="w-24 rounded-l-xl bg-secondary-900 px-6 py-4 text-center">
        <div className="primary-gradient heading-normal bg-clip-text font-extrabold text-transparent">
          {start.getDate()}
        </div>
        <div className="primary-gradient text-extralarge bg-clip-text font-semibold text-transparent">
          {start.toLocaleString("de-DE", { month: "short" })}
        </div>
      </div>
      <div className="w-full space-y-4 overflow-hidden px-6 py-4">
        <h2 className="heading-small truncate transition-colors group-hover:text-accent group-focus:text-accent">
          {titel}
        </h2>
        <div className="flex justify-between gap-4">
          <div className="flex gap-2">
            <div className="min-w-fit">
              <MapIcon />
            </div>
            <span>{ort.attributes.name}</span>
          </div>
          {ende && (
            <div className="flex gap-2">
              <div className="min-w-fit">
                <CalendarIcon />
              </div>
              <div className="flex gap-1">
                <span>
                  {start.toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </span>
                <span>-</span>
                <span>
                  {ende.toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);
