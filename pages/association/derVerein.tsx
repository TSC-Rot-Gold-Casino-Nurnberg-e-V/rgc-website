import { getHistory } from "../../api/api";
import sanitizeHtml from "sanitize-html";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { History } from "../../model/History";

export const getStaticProps: GetStaticProps<{
  history: History;
}> = async () => {
  const history = await getHistory();
  return { props: { history: history } };
};

export default function derVerein({
  history,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="prose mx-auto max-w-3xl grow p-6 md:p-8"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(history.attributes.content),
      }}
    />
  );
}
