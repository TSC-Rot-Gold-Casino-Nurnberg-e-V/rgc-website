import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getImpressum } from "../api/api";
import sanitizeHtml from "sanitize-html";
import { Impressum } from "../model/Impressum";

export const getStaticProps: GetStaticProps<{
  impressum: Impressum;
}> = async () => {
  const impressum = await getImpressum();
  return { props: { impressum: impressum } };
};

export default function ImpressumPage({
  impressum,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="default-padding prose mx-auto max-w-3xl grow"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(impressum.attributes.inhalt),
      }}
    />
  );
}
