import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Datenschutzerklaerung } from "../model/Datenschutzerklaerung";
import { getDatenschutzerklaerung } from "../api/api";
import sanitizeHtml from "sanitize-html";

export const getStaticProps: GetStaticProps<{
  datenschutzerklaerung: Datenschutzerklaerung;
}> = async () => {
  const datenschutzerklaerung = await getDatenschutzerklaerung();
  return { props: { datenschutzerklaerung: datenschutzerklaerung } };
};

export default function DatenschutzerklaerungPage({
  datenschutzerklaerung,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="default-padding prose mx-auto break-words"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(datenschutzerklaerung.attributes.inhalt),
      }}
    />
  );
}
