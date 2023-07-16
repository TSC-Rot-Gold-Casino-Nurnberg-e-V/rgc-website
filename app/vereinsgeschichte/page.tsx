import sanitizeHtml from "sanitize-html";
import { getVereinsgeschichte } from "../../api/api";

export default async function VereinsgeschichtePage() {
  const vereinsgeschichte = await getVereinsgeschichte();
  return (
    <main
      className="default-padding prose mx-auto max-w-3xl grow"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(vereinsgeschichte.attributes.inhalt),
      }}
    />
  );
}
