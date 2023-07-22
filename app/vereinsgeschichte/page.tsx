import sanitizeHtml from "sanitize-html";
import { getVereinsgeschichte } from "../../api/api";
import { PageHeading } from "../../components/PageHeading";

export default async function VereinsgeschichtePage() {
  const vereinsgeschichte = await getVereinsgeschichte();
  return (
    <main>
      <PageHeading>Vereinsgeschichte</PageHeading>
      <div
        className="default-padding prose mx-auto max-w-screen-md py-12 prose-headings:text-secondary-900"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(vereinsgeschichte.attributes.inhalt),
        }}
      />
    </main>
  );
}
