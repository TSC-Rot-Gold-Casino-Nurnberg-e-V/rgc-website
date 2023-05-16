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
      className="default-padding prose mx-auto break-words"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(privacyPolicy.attributes.privacyPolicy),
      }}
    />
  );
}
