import {
  Body,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import rgcColors from "@/styles/rgc-colors.json";

const assetsUrl = "http://assets.rot-gold-casino.de";

const baseUrl = "https://rot-gold-casino.de";

export const ContactInquiryConfirmationEmail = () => (
  <Html lang="de">
    <Preview>
      Vielen Dank für Deine Anfrage. Wir werden uns schnellstmöglich mit Dir in
      Verbindung setzen.
    </Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              ...rgcColors,
            },
          },
        },
      }}
    >
      <Body className="bg-base-100 p-8 font-sans text-base-700">
        <Container className="max-w-lg rounded-xl bg-white p-8 shadow">
          <Link href={baseUrl}>
            <Img src={`${assetsUrl}/rgc.png`} alt="RGC" className="mb-4 w-28" />
          </Link>
          <Heading as="h1" className="text-3xl font-bold text-base-900">
            Bestätigung der Anfrage
          </Heading>
          <Text className="break-words text-base">
            Vielen Dank für Deine Anfrage. Wir werden uns schnellstmöglich mit
            Dir in Verbindung setzen.
          </Text>
          <Text className="text-base">Dein RGC Team</Text>
          <Hr className="mb-4" />

          <Section className="mb-4">
            <Row>
              <Column>
                <Link href={baseUrl}>
                  <Img
                    src={`${assetsUrl}/rgc.png`}
                    alt="RGC"
                    className="w-16"
                  />
                </Link>
              </Column>
              <Column className="w-20">
                <Row>
                  <Column>
                    <Link href="https://www.instagram.com/rgc_nuernberg/">
                      <Img
                        src={`${assetsUrl}/instagram.png`}
                        width="32"
                        height="32"
                        alt="Instagram"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://de-de.facebook.com/rgc.nuernberg/">
                      <Img
                        src={`${assetsUrl}/facebook.png`}
                        width="32"
                        height="32"
                        alt="Facebook"
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Text className="m-0">
            <Link
              href={`${baseUrl}/neuigkeiten`}
              className="text-secondary-700 underline"
            >
              Neuigkeiten
            </Link>{" "}
            ・{" "}
            <Link
              href={`${baseUrl}/veranstaltungen`}
              className="text-secondary-700 underline"
            >
              Veranstaltungen
            </Link>{" "}
            ・{" "}
            <Link
              href={`${baseUrl}/angebote`}
              className="text-secondary-700 underline"
            >
              Angebote
            </Link>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactInquiryConfirmationEmail;
