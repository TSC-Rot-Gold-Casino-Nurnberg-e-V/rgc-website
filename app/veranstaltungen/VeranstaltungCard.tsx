import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

interface Props {
  titel: string;
  start: Date;
  ende: Date | null;
  slug: string;
  vorschautext: string;
}

export const VeranstaltungCard = ({
  slug,
  titel,
  start,
  ende,
  vorschautext,
}: Props) => {
  const formattedStartDate = formatDate(start);
  return (
    <Link
      href={`/veranstaltungen/${slug}`}
      className="group flex flex-col justify-between gap-4 rounded bg-white px-8 py-6 shadow hover:shadow-md md:flex-row md:gap-12 md:px-10 md:py-8"
    >
      <div className="max-sm: flex flex-row gap-2 self-center font-semibold tracking-wider opacity-50 group-hover:text-red-900 group-hover:opacity-100 md:flex-col">
        {ende !== null ? (
          <>
            {formattedStartDate} <div>{" bis "}</div>
            {formatDate(ende)}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </div>
      <div className="flex max-w-lg grow flex-col max-md:mx-auto lg:max-w-xl">
        <div className="text-2xl font-bold text-red-900 group-hover:text-red-800 max-md:text-center">
          {titel}
        </div>
        <div className="line-clamp-2 opacity-50 group-hover:opacity-70 max-md:text-center">
          {vorschautext}
        </div>
      </div>
    </Link>
  );
};
