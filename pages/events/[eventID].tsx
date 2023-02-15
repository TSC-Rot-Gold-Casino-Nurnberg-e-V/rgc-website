import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getEvent, getEvents } from "../../api/api";
import { Event } from "../../model/Event";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
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
  const formattedStartDate = formatDate(
    new Date(event.attributes.eventStartDate)
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="m-auto max-w-3xl py-8 grow max-lg:px-6">
        <p className="text-center tracking-widest text-sm opacity-70">
          {event.attributes.eventEndDate !== null ? (
            <>
              {formattedStartDate} {" bis "}
              {formatDate(new Date(event.attributes.eventEndDate))}
            </>
          ) : (
            <>{formattedStartDate}</>
          )}
        </p>
        <h1 className="text-red-900 text-center max-md:text-2xl text-3xl py-4">
          {event.attributes.eventName}
        </h1>
        <div className="prose m-auto">
          <div
            className="prose prose-p:text-justify prose-tr:flex prose-tr:justify-between prose-h2:text-center prose-table:my-4 prose-p:my-2 prose-a:text-red-900 prose-h3:text-red-900 prose-h2:max-md:text-xl prose-h3:max-md:text-lg"
            dangerouslySetInnerHTML={{
              __html: sanitizeHTMLField(event.attributes.eventDescription),
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
