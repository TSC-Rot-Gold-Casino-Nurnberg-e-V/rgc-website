import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow max-md:p-6 py-8 max-w-3xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl text-red-900 font-bold">Der Verein</h2>
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
            className="text-red-900 font-semibold"
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
            {executives.map((executive) => {
              return (
                <div className="flex flex-col gap-3" key={executive.id}>
                  <div className="relative w-60 h-60 rounded rounded-md">
                    <Image
                      src={executive.attributes.image.data.attributes.url}
                      alt=""
                      fill
                      className="object-cover rounded rounded-md"
                    />
                  </div>

                  <div className="flex-col flex gap-1 max-w-[240px]">
                    <div className="font-bold text-xl w-fit flex items-center">
                      {executive.attributes.position}
                    </div>
                    <div className="text-sm w-fit text-gray-500">
                      {executive.attributes.name}
                    </div>
                    <div className="text-sm w-fit text-gray-500">
                      {executive.attributes.phone}
                    </div>
                    <div className="text-sm w-fit text-gray-500">
                      {executive.attributes.email}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
