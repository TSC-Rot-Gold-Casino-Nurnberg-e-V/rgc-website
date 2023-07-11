import sanitizeHtml from "sanitize-html";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Vereinsgeschichte } from "../model/Vereinsgeschichte";
import { getVereinsgeschichte } from "../api/api";

export const getStaticProps: GetStaticProps<{
  vereinsgeschichte: Vereinsgeschichte;
}> = async () => {
  const vereinsgeschichte = await getVereinsgeschichte();
  return { props: { vereinsgeschichte: vereinsgeschichte } };
};

export default function VereinsgeschichtePage({
  vereinsgeschichte,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="default-padding prose mx-auto max-w-3xl grow"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(vereinsgeschichte.attributes.inhalt),
      }}
    />
  );
}
