import Link from "next/link";
import { formatDate } from "../utils/formatDate";

interface Props {
  name: string;
  startDate: Date;
  endDate: Date | null;
  eventID: number;
  previewText: string;
}

export const EventCard = ({
  name,
  startDate,
  endDate,
  eventID,
  previewText,
}: Props) => {
  const formattedStartDate = formatDate(startDate);
  return (
    <Link
      href={`/events/${eventID.toString()}`}
      className="flex flex-col md:flex-row bg-white gap-4 md:gap-12 shadow justify-between rounded group hover:shadow-md px-8 md:px-10 py-6 md:py-8 group"
    >
      <div className="tracking-wider self-center opacity-50 group-hover:opacity-100 font-semibold group-hover:text-red-900 flex flex-row md:flex-col max-sm: gap-2">
        {endDate !== null ? (
          <>
            {formattedStartDate} <div>{" bis "}</div>
            {formatDate(endDate)}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </div>
      <div className="flex flex-col grow max-w-lg lg:max-w-xl max-md:m-auto">
        <div className="text-2xl max-md:text-center font-bold text-red-900 group-hover:text-red-800">
          {name}
        </div>
        <div className="opacity-50 group-hover:opacity-70 max-md:text-center line-clamp-2">
          {previewText}
        </div>
      </div>
    </Link>
  );
};
