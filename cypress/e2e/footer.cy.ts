describe("footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the correct offer links", () => {
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Angebot/i })
      .siblings()
      .should("contain", "Freizeittanzen")
      .should("contain", "Turniertanzen")
      .should("contain", "Kindertanzen")
      .should("contain", "Formationstanzen");
  });

  it("renders the correct informational links", () => {
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Startseite")
      .should("contain", "Der Verein")
      .should("contain", "News")
      .should("contain", "Veranstaltungen")
      .should("contain", "Turnierergebnisse")
      .should("contain", "Kontaktanfrage")
      .should("contain", "Impressum")
      .should("contain", "Datenschutz")
      .should("contain", "Dokumente");
  });

  it("navigates to the homepage", () => {
    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Zur Startseite/i })
      .should("have.attr", "href", "/");
  });

  it("navigates to the contact page", () => {
    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Kontaktanfrage/i })
      .should("have.attr", "href", "/kontakt");
  });

  it("navigates to the contact page on a mobile device", () => {
    cy.viewport("iphone-6");

    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Kontaktanfrage/i })
      .should("have.attr", "href", "/kontakt");
  });

  it("includes infos about the club history", () => {
    cy.findByRole("contentinfo")
      .findAllByRole("Vereinsinfo")
      .should(
        "have.text",
        "Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und zählt mit etwa 600 Mitgliedern zu den größten Tanzsportclubs in Bayern und Deutschland."
      );
  });

  it("should link to the correct external contact links", () => {
    cy.findByRole("contentinfo")
      .findAllByRole("link", { name: /Venusweg 7/i })
      .should(
        "have.attr",
        "href",
        "https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
      );

    cy.findByRole("contentinfo")
      .findAllByRole("link", { name: /info@rot-gold-casino.de/i })
      .should("have.attr", "href", "mailto:info@rot-gold-casino.de");

    cy.findByRole("contentinfo")
      .findAllByRole("link", { name: /Facebook/i })
      .should("have.attr", "href", "https://de-de.facebook.com/rgc.nuernberg/");

    cy.findByRole("contentinfo")
      .findAllByRole("link", { name: /Instagram/i })
      .should("have.attr", "href", "https://www.instagram.com/rgc_nuernberg/");
  });
});
