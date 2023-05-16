import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getEvents } from "../../api/api";
import { Event } from "../../model/Event";
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
    <main className="default-padding mx-auto">
      <div className="m-auto flex max-w-3xl flex-col gap-8">
        {events.length !== 0 ? (
          <div>
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
        ) : (
          <div>Keine Veranstaltungen verfügbar</div>
        )}
      </div>
    </main>
  );
}
