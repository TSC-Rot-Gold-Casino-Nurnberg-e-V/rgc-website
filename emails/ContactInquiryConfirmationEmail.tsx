import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Tailwind,
  Hr,
  Font,
  Section,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";
import colors from "tailwindcss/colors";

const iconsUrl = "http://rot-gold-casino.de/icons";

// TODO: replace with production URL
const baseUrl = "https://develop.rot-gold-casino.de";

export const ContactInquiryConfirmationEmail = () => (
  <Html lang="de">
    <Head>
      <Font
        fontFamily="Manrope"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F87jxeN7B.ttf",
          format: "truetype",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>
      Vielen Dank für deine Anfrage. Wir werden uns schnellstmöglich mit dir in
      Verbindung setzten.
    </Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: {
                50: "#fcf9f0",
                100: "#f7f1dd",
                200: "#eedfba",
                300: "#e0c280",
                400: "#d7ab60",
                500: "#ce9441",
                600: "#c07d36",
                700: "#a0632e",
                800: "#81502b",
                900: "#684326",
                950: "#382112",
              },
              secondary: {
                50: "#fdf3f3",
                100: "#fbe5e5",
                200: "#f9cfcf",
                300: "#f3aeae",
                400: "#ea7f7f",
                500: "#de5555",
                600: "#ca3838",
                700: "#aa2c2c",
                800: "#8c2828",
                900: "#752727",
                950: "#3f1010",
              },
              base: colors.stone,
            },
          },
        },
      }}
    >
      <Body className="bg-base-100 p-8 font-sans text-base-700">
        <Container className="max-w-lg rounded-xl bg-white p-8 shadow">
          <Img
            src={`${iconsUrl}/rgc-logo.png`}
            width="56"
            height="56"
            alt="RGC"
            className="mb-4"
          />
          <Heading
            as="h1"
            className="text-[30px] font-bold leading-[36px] text-secondary-900"
          >
            Bestätigung der Anfrage
          </Heading>
          <Text className="break-words text-[16px] leading-[24px]">
            Vielen Dank für deine Anfrage. Wir werden uns schnellstmöglich mit
            dir in Verbindung setzten.
          </Text>
          <Text className="text-[16px] leading-[24px]">Dein RGC Team</Text>
          <Hr className="mb-4" />

          <Section className="mb-4">
            <Row>
              <Column>
                <Link href={baseUrl}>
                  <Img
                    src={`${iconsUrl}/rgc-logo.png`}
                    width="32"
                    height="32"
                    alt="RGC"
                  />
                </Link>
              </Column>
              <Column className="w-20">
                <Row>
                  <Column>
                    <Link href="https://www.instagram.com/rgc_nuernberg/">
                      <Img
                        src={`${iconsUrl}/instagram-logo.png`}
                        width="32"
                        height="32"
                        alt="Instagram"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="https://de-de.facebook.com/rgc.nuernberg/">
                      <Img
                        src={`${iconsUrl}/static/facebook-logo.png`}
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
              className="text-secondary-900"
            >
              Neuigkeiten
            </Link>{" "}
            ・{" "}
            <Link
              href={`${baseUrl}/veranstaltungen`}
              className="text-secondary-900"
            >
              Veranstaltungen
            </Link>{" "}
            ・{" "}
            {/* TODO: update link according to offers overview restructuring */}
            <Link href={`${baseUrl}/angebote`} className="text-secondary-900">
              Angebote
            </Link>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactInquiryConfirmationEmail;
