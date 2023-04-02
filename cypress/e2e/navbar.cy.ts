describe("navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the navbar on the homepage", () => {
    cy.findByRole("navigation").should("exist");
  });

  it("should display the navbar on the news page", () => {
    cy.visit("http://localhost:3000/posts");
    cy.findByRole("navigation").should("exist");
  });

  it("should include the correct links", () => {
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

  it("should navigate to the homepage", () => {
    cy.visit("http://localhost:3000/contact");
    cy.findByRole("navigation")
      .findByRole("link", { name: /Startseite/i })
      .click();
    cy.findByRole("heading", { name: /Herzlich Willkommen im RGC/i });
  });

  it("should navigate to the contact page", () => {
    cy.findByRole("navigation")
      .findByRole("link", { name: /Kontakt/i })
      .click();
    cy.findByRole("heading", { name: /Kontaktformular/i });
  });

  it("should open and close the hamburger menu on a mobile device", () => {
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

  it("should indicate the active page", () => {
    //   TODO
  });
});
