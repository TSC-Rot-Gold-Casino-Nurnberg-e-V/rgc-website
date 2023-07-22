import sanitizeHtml from "sanitize-html";
import { getVereinsgeschichte } from "../../api/api";
import { PageHeading } from "../../components/PageHeading";
import { Prose } from "../../components/Prose";

export default async function VereinsgeschichtePage() {
  const vereinsgeschichte = await getVereinsgeschichte();
  return (
    <main>
      <PageHeading>Vereinsgeschichte</PageHeading>
      <Prose
        className="default-padding mx-auto max-w-screen-md"
        content={vereinsgeschichte.attributes.inhalt}
      />
    </main>
  );
}
