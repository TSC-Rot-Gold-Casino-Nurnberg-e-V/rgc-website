import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getLegalNotice } from "../api/api";
import { Navbar } from "../components/Navbar";
import sanitizeHtml from "sanitize-html";
import { Footer } from "../components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className="grow prose mx-auto max-w-3xl p-6 md:p-8"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(legalNotice.attributes.legalNotice),
        }}
      />
      <Footer />
    </div>
  );
}
