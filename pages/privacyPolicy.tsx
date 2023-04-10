import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Policy } from "../model/Policy";
import { getPrivacyPolicy } from "../api/api";
import sanitizeHtml from "sanitize-html";

export const getStaticProps: GetStaticProps<{
  privacyPolicy: Policy;
}> = async () => {
  const privacyPolicy = await getPrivacyPolicy();
  return { props: { privacyPolicy: privacyPolicy } };
};

export default function PrivacyPolicy({
  privacyPolicy,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="prose mx-auto break-words p-6 md:p-8"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(privacyPolicy.attributes.privacyPolicy),
      }}
    />
  );
}
