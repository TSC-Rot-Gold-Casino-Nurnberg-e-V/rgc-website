import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getEvent, getEvents } from "../../api/api";
import { Event } from "../../model/Event";
import { sanitizeHTMLField } from "../../utils/sanitizeHTMLField";
import { formatDate } from "../../utils/formatDate";

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getEvents();
  const paths = events.map((event) => {
    return { params: { eventID: event.id.toString() } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ event: Event }> = async ({
  params,
}) => {
  if (typeof params?.eventID !== "string") {
    throw new Error("Typeof parameter 'eventID' is not string.");
  }
  const event = await getEvent(params.eventID);
  return { props: { event: event } };
};

export default function EventID({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const formattedStartDate = formatDate(new Date(event.attributes.startDate));
  return (
    <main className="m-auto max-w-3xl grow py-8 max-lg:px-6">
      <p className="text-center text-sm tracking-widest opacity-70">
        {event.attributes.endDate !== null ? (
          <>
            {formattedStartDate} {" bis "}
            {formatDate(new Date(event.attributes.endDate))}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </p>
      <h1 className="py-4 text-center text-3xl text-red-900 max-md:text-2xl">
        {event.attributes.title}
      </h1>
      <div className="prose m-auto">
        <div
          className="prose prose-h2:text-center prose-h3:text-red-900 prose-p:my-2 prose-p:text-justify prose-a:text-red-900 prose-table:my-4 prose-tr:flex prose-tr:justify-between prose-h2:max-md:text-xl prose-h3:max-md:text-lg"
          dangerouslySetInnerHTML={{
            __html: sanitizeHTMLField(event.attributes.description),
          }}
        />
      </div>
    </main>
  );
}
