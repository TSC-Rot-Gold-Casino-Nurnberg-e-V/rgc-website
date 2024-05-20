describe("navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("includes the correct links", () => {
    cy.viewport("macbook-16");
    cy.findByRole("navigation").findByRole("link", { name: /Startseite/i });
    cy.findByRole("navigation").findByRole("link", { name: /Der Verein/i });
    cy.findByRole("navigation").findByRole("link", { name: /Partner/i });
    cy.findByRole("navigation").findByRole("link", { name: /News/i });
    cy.findByRole("navigation").findByRole("link", { name: /Angebot/i });
    cy.findByRole("button", { name: /Veranstaltungen/i }).click();
    cy.findByRole("navigation").findByRole("menuitem", {
      name: /Übersicht/i,
    });
    cy.findByRole("navigation").findByRole("menuitem", {
      name: /Turnierergebnisse/i,
    });
    cy.findByRole("navigation").findByRole("link", { name: /Kontakt/i });
    cy.findByRole("navigation").findByRole("link", {
      name: /Mitglied werden/i,
    });
    cy.findByRole("navigation")
      .findAllByRole("link")
      .should("have.lengthOf", 7);
  });

  it("navigates to the homepage", () => {
    cy.findByRole("navigation")
      .findByRole("link", { name: /Startseite/i })
      .should("have.attr", "href", "/");
  });

  it("navigates to the contact page", () => {
    cy.viewport("macbook-16");

    cy.findByRole("navigation")
      .findByRole("link", { name: /Kontakt/i })
      .should("have.attr", "href", "/kontakt");
  });

  it("opens and closes the hamburger menu on a mobile device", () => {
    cy.viewport("iphone-6");

    cy.findByRole("navigation")
      .findByLabelText("Navigationsmenü öffnen")
      .click();
    cy.findByRole("menu").findAllByRole("menuitem").should("have.lengthOf", 8);
    cy.findByRole("menu").findByRole("menuitem", { name: /Der Verein/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /Partner/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /News/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /Angebot/i });
    cy.findByRole("menu").findByRole("menuitem", {
      name: /Veranstaltungen/i,
    });
    cy.findByRole("menu").findByRole("menuitem", {
      name: /Turnierergebnisse/i,
    });
    cy.findByRole("menu").findByRole("menuitem", { name: /Kontakt/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /Mitglied werden/i });

    cy.findByRole("navigation")
      .findByLabelText("Navigationsmenü schließen")
      .click();
    cy.findByRole("menu").should("not.exist");
  });

  it("navigates to the contact page on a mobile device", () => {
    cy.viewport("iphone-6");

    cy.findByRole("navigation")
      .findByLabelText("Navigationsmenü öffnen")
      .click();
    cy.findByRole("menu")
      .findByRole("menuitem", { name: /Kontakt/i })
      .should("have.attr", "href", "/kontakt");
  });
});
