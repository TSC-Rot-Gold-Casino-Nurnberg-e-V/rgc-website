describe("navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("includes the correct links", () => {
    cy.viewport("macbook-16");
    cy.findByRole("navigation").findByRole("link", { name: /Startseite/i });
    cy.findByRole("navigation").findByRole("link", { name: /Der Verein/i });
    cy.findByRole("navigation").findByRole("link", { name: /News/i });
    cy.findByRole("navigation").findByRole("link", { name: /Angebot/i });
    cy.findByRole("navigation").findByRole("link", {
      name: /Veranstaltungen/i,
    });
    cy.findByRole("navigation").findByRole("link", {
      name: /Turnierergebnisse/i,
    });
    cy.findByRole("navigation").findByRole("link", { name: /Kontakt/i });
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
    cy.findByRole("menu").findAllByRole("menuitem").should("have.lengthOf", 6);
    cy.findByRole("menu").findByRole("menuitem", { name: /Der Verein/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /News/i });
    cy.findByRole("menu").findByRole("menuitem", { name: /Angebot/i });
    cy.findByRole("menu").findByRole("menuitem", {
      name: /Veranstaltungen/i,
    });
    cy.findByRole("menu").findByRole("menuitem", {
      name: /Turnierergebnisse/i,
    });
    cy.findByRole("menu").findByRole("menuitem", { name: /Kontakt/i });

    cy.findByRole("navigation")
      .findByLabelText("Navigationsmenü schließen")
      .click();
    cy.findByRole("menu").should("not.exist");
  });

  it("indicates the active page", () => {
    cy.viewport("macbook-16");

    cy.findByRole("navigation")
      .findByRole("link", { name: /Kontakt/i })
      .click();

    cy.findByRole("navigation")
      .get('[aria-current="page"]')
      .should("have.text", "Kontakt");

    cy.findByRole("navigation")
      .findByRole("link", { name: /Angebot/i })
      .click();

    cy.findByRole("navigation")
      .get('[aria-current="page"]')
      .should("have.text", "Angebot");
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