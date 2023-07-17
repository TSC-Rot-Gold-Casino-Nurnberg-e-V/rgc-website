describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("hero banner section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", { name: /Herzlich Willkommen im RGC/i }).should(
        "exist"
      );
    });

    it("renders a subheading", () => {
      cy.findByRole("heading", {
        name: /Ihr Verein für Tanzsport in Nürnberg \/ Fürth/i,
      }).should("exist");
    });

    it("renders a description", () => {
      cy.findByText(
        /Erleben Sie die faszinierende Welt des Tanzens! Bei uns finden Sie alles, was das Tänzerherz begehrt - von Latein, Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance. Werden Sie Teil unserer Tanzfamilie und erleben Sie mit uns unvergessliche Momente auf der Tanzfläche./i
      ).should("exist");
    });

    it("renders a CTA", () => {
      cy.findByRole("link", { name: /Komm vorbei/i }).should(
        "have.attr",
        "href",
        "/angebote"
      );
    });
  });

  describe("offers section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", { name: /Unser Angebot/i }).should("exist");
    });

    it("renders a description", () => {
      cy.findByText(
        "Bei uns finden Sie alles, was das Tänzerherz begehrt - von Latein, Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance."
      ).should("exist");
    });

    it('renders CTA "Einzeltanz"', () => {
      cy.findByRole("link", { name: /Einzeltanz mehr erfahren/i }).should(
        "have.attr",
        "href",
        "/angebote"
      );
    });

    it('renders CTA "Formationstanzen"', () => {
      cy.findByRole("link", { name: /Formation mehr erfahren/i }).should(
        "have.attr",
        "href",
        "/angebote"
      );
    });

    it('renders CTA "Kindertanzen"', () => {
      cy.findByRole("link", { name: /Kindertanzen mehr erfahren/i }).should(
        "have.attr",
        "href",
        "/angebote"
      );
    });
  });

  describe("about us section", () => {
    it("renders a heading", () => {
      cy.findByRole("heading", { name: /Über uns/i }).should("exist");
    });

    it("renders a subheading", () => {
      cy.findByRole("heading", { name: /Mit Herz und Rhythmus/i }).should(
        "exist"
      );
    });

    it("renders a description", () => {
      cy.findByText(
        /Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im Jahr 1963 steht die Freude am Tanzen und die Förderung der Tanzkultur im Mittelpunkt unserer Arbeit./i
      ).should("exist");
    });

    it('renders CTA "Erfahre mehr"', () => {
      cy.findByRole("heading", { name: /Über uns/i })
        .parent()
        .findByRole("link", { name: /Mehr Erfahren/i })
        .should("have.attr", "href", "/vereinsgeschichte");
    });
  });

  describe("stats section", () => {
    it("should contain the stat regarding the member count", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsstatistik")
        .should("contain", "> 600")
        .should("contain", "Mitglieder");
    });

    it("should contain the stat regarding the formation team count", () => {
      cy.findByLabelText("Vereinsstatistik")
        .should("contain", "8")
        .should("contain", "Formationsteams");
    });

    it("should contain the stat regarding the trophy count", () => {
      cy.findByLabelText("Vereinsstatistik")
        .should("contain", "25x")
        .should("contain", "Bayernpokalsieger");
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
        .should("have.lengthOf", 3);
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