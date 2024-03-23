describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("hero banner section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", {
        name: /Lebe, Liebe, Tanze!/i,
      }).should("exist");
    });

    it("renders a subheading", () => {
      cy.findByText(/Herzlich Willkommen/i).should("exist");
      cy.findByText(/im RGC Nürnberg/i).should("exist");
    });

    it("renders a description", () => {
      cy.findByText(/Dein Verein für Tanzsport in Bayern/i).should("exist");
    });
  });

  describe("offers section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", { name: /Unser Angebot/i }).should("exist");
    });

    it("renders a description", () => {
      cy.findByText(
        "Bei uns findest Du alles, was das Tänzerherz begehrt - von Latein-, Standard- und Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance.",
      ).should("exist");
    });

    it('renders CTA "Einzeltanz"', () => {
      cy.findByLabelText("Kursangebote")
        .findByRole("link", { name: /Turnier/i })
        .should("have.attr", "href", "/angebote/turniertanzen");
    });

    it('renders CTA "Formationstanzen"', () => {
      cy.findByLabelText("Kursangebote")
        .findByRole("link", { name: /Formation/i })
        .should("have.attr", "href", "/angebote/formationstanzen");
    });

    it('renders CTA "Kindertanzen"', () => {
      cy.findByLabelText("Kursangebote")
        .findByRole("link", { name: /Kinder & Jugend/i })
        .should("have.attr", "href", "/angebote/kinder-und-jugend");
    });
  });

  describe("about us section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", { name: /Über uns/i }).should("exist");
    });

    it("renders a subheading", () => {
      cy.findByRole("heading", { name: /Mit Herz und Rhythmus/i }).should(
        "exist",
      );
    });

    it("renders a description", () => {
      cy.findByText(
        /Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im Jahr 1961 steht die Freude am Tanzen und die Förderung der Tanzkultur im Mittelpunkt unserer Arbeit./i,
      ).should("exist");
    });

    it('renders CTA "Erfahre mehr"', () => {
      cy.findByRole("heading", { name: /Über uns/i })
        .parent()
        .findByRole("link", { name: /Mehr Erfahren/i })
        .should("have.attr", "href", "/verein");
    });
  });

  describe("stats section", () => {
    it("should contain the stat regarding the member count", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsstatistik")
        .scrollIntoView()
        .should("contain", ">600")
        .should("contain", "Mitglieder");
    });

    it("should contain the stat regarding the formation team count", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsstatistik")
        .scrollIntoView()
        .should("contain", "8")
        .should("contain", "Formations­teams");
    });

    it("should contain the stat regarding the trophy count", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsstatistik")
        .scrollIntoView()
        .should("contain", "26x")
        .should("contain.text", "Bayernpokal­sieger");
    });
  });

  describe("news section", () => {
    it("should display the latest three news", () => {
      cy.findByRole("heading", {
        name: /News/i,
      })
        .siblings()
        .first()
        .findAllByRole("link")
        .should("have.lengthOf", 4);
    });

    it("renders CTA for news page", () => {
      cy.findByRole("heading", {
        name: /News/i,
      })
        .parent()
        .findByRole("link", { name: /Weitere News/i })
        .should("have.attr", "href", "/neuigkeiten");
    });
  });
});
