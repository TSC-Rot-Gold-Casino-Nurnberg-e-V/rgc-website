import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Executive } from "../../model/Executive";
import { getExecutives, getMembership } from "../../api/api";
import Image from "next/image";
import Link from "next/link";
import { Membership } from "../../model/Membership";

export const getStaticProps: GetStaticProps<{
  executives: Executive[];
  memberships: Membership[];
}> = async () => {
  const executives = await getExecutives();
  const memberships = await getMembership();
  return { props: { executives: executives, memberships: memberships } };
};

export default function Association({
  executives,
  memberships,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 py-8 max-md:p-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-red-900">Der Verein</h2>
        <h3 className="text-2xl font-semibold">Über uns</h3>
        <p>
          Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und hat sich
          seitdem einen Namen sowohl in der deutschen Tanzsportszene durch
          sportliche Erfolge gemacht, als auch in der Region als wesentlicher
          Faktor des gesellschaftlichen Lebens. Mit etwa 600 Mitgliedern zählt
          er zu den größten Tanzsportclubs in Bayern und Deutschland.
        </p>
        <Link
          href="/association/derVerein"
          className="font-semibold text-red-900"
        >
          Zur kompletten Geschichte unseres Vereins
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">Mitgliedschaft</h3>

        {memberships.map((membership) => {
          return (
            <Link
              href={membership.attributes.document.data.attributes.url}
              key={membership.id}
              className="hover:text-red-900"
            >
              {membership.attributes.title}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Vorstandschaft</h3>
        <div className="flex flex-wrap justify-between gap-y-10">
          {executives.map((executive) => (
            <div className="flex flex-col gap-3" key={executive.id}>
              <div className="relative h-60 w-60 rounded-md">
                <Image
                  src={executive.attributes.image.data.attributes.url}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex max-w-[240px] flex-col gap-1">
                <div className="flex w-fit items-center text-xl font-bold">
                  {executive.attributes.position}
                </div>
                <div className="w-fit text-sm text-base-500">
                  {executive.attributes.name}
                </div>
                <div className="w-fit text-sm text-base-500">
                  {executive.attributes.phone}
                </div>
                <div className="w-fit text-sm text-base-500">
                  {executive.attributes.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
