import { getImpressum } from "../../api/api";
import sanitizeHtml from "sanitize-html";

export default async function ImpressumPage() {
  const impressum = await getImpressum();
  return (
    <main
      className="default-padding prose mx-auto max-w-3xl grow"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(impressum.attributes.inhalt),
      }}
    />
  );
}
