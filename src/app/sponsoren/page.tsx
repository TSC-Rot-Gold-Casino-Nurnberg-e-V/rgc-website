import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { Prose } from "@/components/Prose";

export default async function SponsorenPage() {
  return (
    <Main>
      <PageHeading>Sponsoren</PageHeading>
      <Prose className="container-md">
        <h2>Sponsor A</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          nihil tempore ullam? Adipisci cum deserunt dolorum, esse eveniet illum
          iusto laborum quas similique sit, velit?
        </p>
        <h2>Sponsor B</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          nihil tempore ullam? Adipisci cum deserunt dolorum, esse eveniet illum
          iusto laborum quas similique sit, velit?
        </p>
        <section>
          <h2>Sponsor C</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            nihil tempore ullam? Adipisci cum deserunt dolorum, esse eveniet
            illum iusto laborum quas similique sit, velit?
          </p>
        </section>
      </Prose>
    </Main>
  );
}
