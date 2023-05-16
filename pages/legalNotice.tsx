import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getLegalNotice } from "../api/api";
import sanitizeHtml from "sanitize-html";
import { Legal } from "../model/Legal";

export const getStaticProps: GetStaticProps<{
  legalNotice: Legal;
}> = async () => {
  const legalNotice = await getLegalNotice();
  return { props: { legalNotice: legalNotice } };
};

export default function PrivacyPolicy({
  legalNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="default-padding prose mx-auto max-w-3xl grow"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(legalNotice.attributes.legalNotice),
      }}
    />
  );
}
