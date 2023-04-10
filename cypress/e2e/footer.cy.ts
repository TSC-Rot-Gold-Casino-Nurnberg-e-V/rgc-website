describe("footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the footer on the homepage", () => {
    cy.findByRole("contentinfo").should("exist");
  });

  it("should display the footer on the news page", () => {
    cy.visit("http://localhost:3000/posts");
    cy.findByRole("contentinfo").should("exist");
  });

  it("should have the correct course links", () => {
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Angebot/i })
      .siblings()
      .should("contain", "Freizeittanzen");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Angebot/i })
      .siblings()
      .should("contain", "Turniertanzen");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Angebot/i })
      .siblings()
      .should("contain", "Kindertanzen");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Angebot/i })
      .siblings()
      .should("contain", "Formationstanzen");
  });

  it("should have the correct informational links", () => {
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Startseite");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Der Verein");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "News");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Veranstaltungen");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Turnierergebnisse");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Kontaktanfrage");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Impressum");
    cy.findByRole("contentinfo")
      .findByRole("heading", { name: /Informationen/i })
      .siblings()
      .should("contain", "Datenschutz");
  });
  it("should navigate to the homepage", () => {
    cy.visit("http://localhost:3000/contact");
    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Zur Startseite/i })
      .click();
    cy.findByRole("heading", { name: /Herzlich Willkommen im RGC/i });
  });

  it("should navigate to the contact page", () => {
    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Kontaktanfrage/i })
      .click();
    cy.findByRole("heading", { name: /Kontaktformular/i });
  });

  it("should navigate to the contact page on a mobile device", () => {
    cy.viewport("iphone-6");

    cy.findByRole("contentinfo")
      .findByRole("link", { name: /Kontaktanfrage/i })
      .click();
    cy.findByRole("heading", { name: /Kontaktformular/i });
  });

  it("should include infos about the association", () => {
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
