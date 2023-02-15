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
      className="flex bg-white gap-12 shadow justify-between rounded group hover:shadow-md px-10 py-8 group"
    >
      <div className="tracking-wider self-center w-fit opacity-50 group-hover:opacity-100 font-semibold group-hover:text-red-900">
        {endDate !== null ? (
          <>
            {formattedStartDate} <div>{" bis "}</div>
            {formatDate(endDate)}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </div>
      <div className="flex flex-col grow max-w-xl">
        <div className="text-2xl font-bold text-red-900 group-hover:text-red-800">
          {name}
        </div>
        <div className="opacity-50 group-hover:opacity-70 line-clamp-2">
          {previewText}
        </div>
      </div>
    </Link>
  );
};
