import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Policy } from "../model/Policy";
import { getPrivacyPolicy } from "../api/api";
import { Navbar } from "../components/Navbar";
import sanitizeHtml from "sanitize-html";
import { Footer } from "../components/Footer";

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className="grow prose mx-auto max-w-3xl p-6 md:p-8"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(privacyPolicy.attributes.privacyPolicy),
        }}
      />
      <Footer />
    </div>
  );
}
