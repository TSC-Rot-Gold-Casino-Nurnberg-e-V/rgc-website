import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getEvents } from "../../api/api";
import { Event } from "../../model/Event";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { EventCard } from "../../components/EventCard";

export const getStaticProps: GetStaticProps<{ events: Event[] }> = async () => {
  const events = await getEvents();
  const dayInSeconds = 60 * 60 * 24;
  return {
    props: { events: events, revalidate: dayInSeconds },
  };
};

export default function Events({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-stone-50 grow">
        <main className="mx-auto p-6 md:p-8">
          <div className="flex flex-col gap-8 max-w-3xl m-auto">
            {events.map((event) => (
              <EventCard
                eventID={event.id}
                title={event.attributes.title}
                previewText={event.attributes.previewText}
                startDate={new Date(event.attributes.startDate)}
                endDate={
                  event.attributes.endDate !== null
                    ? new Date(event.attributes.endDate)
                    : null
                }
                key={event.id}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
