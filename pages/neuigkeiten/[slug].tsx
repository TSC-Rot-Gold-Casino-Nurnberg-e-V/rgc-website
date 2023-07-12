import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Neuigkeit } from "../../model/Neuigkeit";
import { getNeuigkeit, getSlugs } from "../../api/api";
import { sanitizeHTMLField } from "../../utils/sanitizeHTMLField";
import { formatDate } from "../../utils/formatDate";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs("neuigkeiten");
  const paths = slugs.map((slug) => {
    return { params: { slug: slug } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ neuigkeit: Neuigkeit }> = async ({
  params,
}) => {
  if (typeof params?.slug !== "string") {
    throw new Error("Typeof parameter 'slug' is not string.");
  }
  const neuigkeit = await getNeuigkeit(params.slug);
  return { props: { neuigkeit: neuigkeit } };
};

export default function NeuigkeitPage({
  neuigkeit,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="default-padding grow bg-gradient-to-r from-base-50 to-base-300 py-6 sm:py-12">
      <div className="prose-xl prose mx-auto">
        <time className="text-normal text-base-500">
          {formatDate(new Date(neuigkeit.attributes.datum))}
        </time>
        <div
          className="prose-h1:heading-normal sm:prose-h1:heading-large prose-headings:text-secondary-900 prose-p:hyphens-auto prose-img:max-h-[24rem] prose-img:w-full prose-img:rounded-md prose-img:object-cover prose-img:object-top sm:prose-img:max-h-[32rem]"
          dangerouslySetInnerHTML={{
            __html: sanitizeHTMLField(neuigkeit.attributes.beschreibung),
          }}
        />
        <Link
          href="/neuigkeiten"
          className="flex w-fit items-center gap-2 p-1 text-secondary-900 no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="mt-0.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="text-large">zurück</span>
        </Link>
      </div>
    </main>
  );
}
