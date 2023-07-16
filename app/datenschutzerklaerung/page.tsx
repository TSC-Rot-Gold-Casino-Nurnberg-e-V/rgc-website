import { getDatenschutzerklaerung } from "../../api/api";
import sanitizeHtml from "sanitize-html";

export default async function DatenschutzerklaerungPage() {
  const datenschutzerklaerung = await getDatenschutzerklaerung();
  return (
    <main
      className="default-padding prose mx-auto break-words"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(datenschutzerklaerung.attributes.inhalt),
      }}
    />
  );
}
