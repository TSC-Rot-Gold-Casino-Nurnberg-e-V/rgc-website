import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Executive } from "../../model/Executive";
import { getExecutives } from "../../api/api";
import Image from "next/image";

export const getStaticProps: GetStaticProps<{
  executives: Executive[];
}> = async () => {
  const executives = await getExecutives();
  return { props: { executives: executives } };
};

export default function Association({
  executives,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow max-md:p-6 py-6 max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-around gap-y-10">
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
                  <div className="font-bold text-md w-fit">
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
      </main>
      <Footer />
    </div>
  );
}
