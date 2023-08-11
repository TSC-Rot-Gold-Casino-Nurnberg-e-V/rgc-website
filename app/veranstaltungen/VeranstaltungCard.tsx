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
  <Link
    href={`/veranstaltungen/${slug}`}
    className="group block rounded-xl transition-all hover:scale-[1.01]"
  >
    <div className="flex rounded-xl bg-base-50 shadow transition-shadow hover:shadow-md max-sm:flex-col">
      <div className="flex items-center justify-center bg-secondary-900 px-6 py-4 text-center max-sm:gap-2 max-sm:rounded-t-xl sm:w-24 sm:flex-col sm:rounded-l-xl">
        <div className="primary-gradient heading-normal bg-clip-text font-extrabold text-transparent">
          {start.getDate()}
        </div>
        <div className="primary-gradient heading-small sm:heading-extrasmall bg-clip-text font-semibold text-transparent">
          {start.toLocaleString("de-DE", { month: "short" })}
        </div>
      </div>
      <div className="w-full space-y-6 overflow-hidden p-6 max-sm:pt-4">
        <h2 className="heading-small line-clamp-3 transition-colors group-hover:text-accent group-focus:text-accent max-sm:hyphens-auto sm:line-clamp-2">
          {titel}
        </h2>
        <div className="flex justify-between gap-4 max-sm:flex-col">
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
