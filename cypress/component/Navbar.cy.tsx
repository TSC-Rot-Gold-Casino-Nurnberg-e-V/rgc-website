import { Navbar } from "../../components/Navbar";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { mockRouter } from "../support/mockRouter";

describe("navbar", () => {
  beforeEach(() => {
    const routerMock = mockRouter();

    cy.mount(
      <RouterContext.Provider value={routerMock}>
        <Navbar />
      </RouterContext.Provider>
    );
  });

  describe("navbar existing", () => {
    it("should include the correct links", () => {
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

    it("should navigate to the homepage", () => {
      cy.findByRole("navigation")
        .findByRole("link", { name: /Startseite/i })
        .click();

      cy.get("@push").should("have.been.calledWith", "/");
    });

    it("should navigate to the contact page", () => {
      cy.viewport("macbook-16");
      cy.findByRole("navigation")
        .findByRole("link", { name: /Kontakt/i })
        .click();
      cy.get("@push").should("have.been.calledWith", "/kontakt");
    });

    it("should open and close the hamburger menu on a mobile device", () => {
      cy.viewport("iphone-6");

      cy.findByRole("navigation")
        .findByLabelText("Navigationsmenü öffnen")
        .click();
      cy.findByRole("menu")
        .findAllByRole("menuitem")
        .should("have.lengthOf", 6);
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
      const routerMock = mockRouter({ asPath: "/kontakt" });

      cy.mount(
        <RouterContext.Provider value={routerMock}>
          <Navbar />
        </RouterContext.Provider>
      );

      cy.viewport("macbook-16");
      cy.findByRole("navigation")
        .get('[aria-current="page"]')
        .should("have.text", "Kontakt");
    });

    it("should navigate to the contact page on a mobile device", () => {
      cy.viewport("iphone-6");

      cy.findByRole("navigation")
        .findByLabelText("Navigationsmenü öffnen")
        .click();
      cy.findByRole("menu")
        .findByRole("menuitem", { name: /Kontakt/i })
        .click();

      cy.get("@push").should("have.been.calledWith", "/kontakt");
    });
  });
});
