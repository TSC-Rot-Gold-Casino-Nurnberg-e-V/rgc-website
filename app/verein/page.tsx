import Image from "next/image";
import Link from "next/link";
import { getVorstandsmitglieder } from "../../api/api";
import { PageHeading } from "../../components/PageHeading";
import { MailIcon } from "../../components/icons/MailIcon";
import { ReactElement } from "react";

export default async function VereinsgeschichtePage() {
  const vorstandsmitglieder = await getVorstandsmitglieder();
  return (
    <main>
      <PageHeading>Der Verein</PageHeading>
      <section className="container-md space-y-4">
        <h2 className="heading-small sm:heading-normal text-accent">
          Über uns
        </h2>
        <p>
          Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und hat sich
          seitdem einen Namen sowohl in der deutschen Tanzsportszene durch
          sportliche Erfolge gemacht, als auch in der Region als wesentlicher
          Faktor des gesellschaftlichen Lebens. Mit etwa 600 Mitgliedern zählt
          er zu den größten Tanzsportclubs in Bayern und Deutschland.
        </p>
        <Link
          href="/vereinsgeschichte"
          className="block rounded font-semibold text-accent"
        >
          Zur kompletten Geschichte unseres Vereins
        </Link>
      </section>
      <section className="container-lg space-y-10">
        <h2 className="heading-small sm:heading-normal text-center text-accent">
          Vorstands&shy;mitglieder
        </h2>
        <div className="mx-auto grid max-w-fit grid-cols-6 gap-10">
          {vorstandsmitglieder.map((vorstandsmitglied) => (
            <div
              className="col-span-6 flex max-w-[300px] flex-col sm:col-span-3 lg:col-span-2"
              key={vorstandsmitglied.id}
            >
              <Image
                src={vorstandsmitglied.attributes.bild.data.attributes.url}
                width={300}
                height={300}
                alt=""
                className="mb-4 rounded-3xl"
              />
              <h3 className="text-extralarge font-bold text-accent">
                {vorstandsmitglied.attributes.name}
              </h3>
              <p className="mb-4 text-base-700">
                {vorstandsmitglied.attributes.rolle}
              </p>
              {vorstandsmitglied.attributes.telefonnummer && (
                <ContactLink
                  href={`tel:${vorstandsmitglied.attributes.telefonnummer}`}
                  text={vorstandsmitglied.attributes.telefonnummer}
                  icon={<PhoneIcon />}
                />
              )}
              <div className="mt-2">
                <ContactLink
                  href={`mailto:${vorstandsmitglied.attributes.email}`}
                  text={vorstandsmitglied.attributes.email}
                  icon={<MailIcon />}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

interface ContactLinkProps {
  href: string;
  text: string;
  icon: ReactElement;
}

const ContactLink = ({ href, text, icon }: ContactLinkProps) => (
  <div className="group flex cursor-pointer gap-2">
    <div className="flex gap-4 group-hover:text-accent">
      <a href={href} className="flex w-fit gap-2 rounded-md">
        <div className="grow">{icon}</div>
        <span>{text}</span>
      </a>
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);
