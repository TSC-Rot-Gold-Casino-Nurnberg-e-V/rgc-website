import Home from "../../pages";

const posts = [
  {
    id: 12,
    attributes: {
      title: "Marius und Kristina erneut Weltmeister Latein",
      description:
        '<p><img src="https://res.cloudinary.com/dlak0pmbw/image/upload/v1674838905/2040481_2bb81ddc94.jpg" alt="2040481.jpeg"></p><p>&nbsp;</p><p>Im Rahmen des WinterDanceFestivals in Mülheim an der Ruhr fand gestern die Weltmeisterschaft in den latein-amerikanischen Tänzen statt. Unter den 65 Paaren aus 41 Ländern die Deutschen Meister Marius-Andrei Balan und Kristina Moshenska. Mit fast fünf Punkten Vorsprung gewannen die Neu-Bayern die Goldmedaille und konnte damit ihren Titel vom letzten Jahr unangefochten verteidigen. Wir gratulieren ganz herzlich und freuen uns sehr, dieses tolle Paar in unserem Verein willkommen zu heißen!</p>',
      publishedAt: "2023-01-23T17:20:36.827Z",
      previewText:
        "Somit konnte das Paar den Titel vom letzten Jahr unangefochten verteidigen.",
      mainImage: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "https://res.cloudinary.com/dlak0pmbw/image/upload/v1674839002/small_2040481_0a1cb6682d.jpg",
              },
            },
            url: "https://res.cloudinary.com/dlak0pmbw/image/upload/v1674839002/2040481_0a1cb6682d.jpg",
          },
        },
      },
    },
  },
  {
    id: 13,
    attributes: {
      title: "Wir gewinnen den Bayernpokal der U19",
      description:
        '<p>Nach dem letzten Turnier der Bayernpokalserie der U19 in München gewannen wir mit Abstand und konnten endlich unseren diesjährigen Vereinspokal mitnehmen.&nbsp;</p><p>Die Gesamtendwertung ist hier gelistet (genauere Auflistung siehe unten):</p><p><img src="https://res.cloudinary.com/dlak0pmbw/image/upload/v1675097648/2022_11_13_Bayernpokal_Vereinswertung_1ffe1d7335.jpg" alt="2022-11-13-Bayernpokal-Vereinswertung.jpg"></p><ol><li><strong>TSC Rot-Gold-Casino Nürnberg</strong> (144 Punkte)</li><li>TSA Schwarz-Gold d. ESV Ingolstadt (129 Punkte)</li><li>Gelb-Schwarz-Casino München (97 Punkte)</li></ol><p>Weitere Informationen:<a href="https://ltvb.de/wp-content/uploads/2022/11/Bayernpokal-u19-Endergebnis.-2022.pdf">https://ltvb.de/wp-content/uploads/2022/11/Bayernpokal-u19-Endergebnis.-2022.pdf</a></p>',
      publishedAt: "2023-01-23T17:21:08.466Z",
      previewText:
        "Der Vereinspokal geht mit dem Sieg der Bayernpokalserie der U19 an den RGC.",
      mainImage: {
        data: {
          attributes: {
            formats: {
              small: {
                url: "https://res.cloudinary.com/dlak0pmbw/image/upload/v1674840135/small_2022_11_13_Bayernpokal_Vereinswertung_0bca8ae172.jpg",
              },
            },
            url: "https://res.cloudinary.com/dlak0pmbw/image/upload/v1674840135/2022_11_13_Bayernpokal_Vereinswertung_0bca8ae172.jpg",
          },
        },
      },
    },
  },
  {
    id: 14,
    attributes: {
      title: "Lea und Dominik auf dem WDSF World Open new series Standard",
      description:
        '<p><img src="https://res.cloudinary.com/dlak0pmbw/image/upload/v1675000522/2022_11_26_WDSF_Open_Std_Timisoara_Depner_Baier_aa8c32ea76.jpg" alt="2022-11-26-WDSF-Open-Std-Timisoara-Depner-Baier.jpeg"></p><p>Dominik Depner und Lea Baier erreichten den 21.-22. Platz auf dem WDSF World Open new series Standard in Timisoara (Rumänien). Weiter so!&nbsp;</p>',
      publishedAt: "2023-01-29T13:52:15.033Z",
      previewText:
        "Dominik Depner und Lea Baier erreichten den 21.-22. Platz auf dem WDSF World Open new series Standard in Timisoara (Rumänien). ",
      mainImage: {
        data: {
          attributes: {
            formats: {},
            url: "https://res.cloudinary.com/dlak0pmbw/image/upload/v1675000437/2022_11_26_WDSF_Open_Std_Timisoara_Depner_Baier_f0d96b5bda.jpg",
          },
        },
      },
    },
  },
];

describe("homepage", () => {
  beforeEach(() => {
    cy.mount(<Home posts={posts} />);
  });

  describe("herosection", () => {
    it("should have a welcome heading", () => {
      cy.findByRole("banner").findByRole("heading", {
        name: /Herzlich Willkommen im RGC/i,
      });
    });

    it("should contain a subheading", () => {
      cy.findByRole("banner").findByRole("heading", {
        name: /Ihr Verein für Tanzsport in Nürnberg/i,
      });
    });

    it("should contain a CTA linking to the courses page", () => {
      cy.findByRole("banner")
        .findByRole("link")
        .should("have.attr", "href", "/courses")
        .contains("Komm vorbei");
    });

    it("should contain a description", () => {
      cy.findByRole("banner").contains(
        "Erleben Sie die faszinierende Welt des Tanzens! Bei uns finden Sie alles, was das Tänzerherz begehrt - von Latein, Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance. Werden Sie Teil unserer Tanzfamilie und erleben Sie mit uns unvergessliche Momente auf der Tanzfläche."
      );
    });
  });

  describe("Coursesection", () => {
    it("should display the introduction to the courses", () => {
      cy.findByRole("main")
        .findByLabelText("Kursangebote")
        .findByRole("heading", {
          name: /Unser Angebot/i,
        });
      cy.findByRole("main")
        .findByLabelText("Angebotsbeschreibung")
        .should(
          "have.text",
          "Bei uns finden Sie alles, was das Tänzerherz begehrt - von Latein, Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance."
        );
    });

    it("should display the course Einzeltanz with the correct linking", () => {
      cy.findByRole("main")
        .findByLabelText("Kursangebote")
        .findByRole("link", { name: /Einzeltanz/i })
        .should("have.attr", "href", "/courses");
    });

    it("should display the course Kindertanzen with the correct linking", () => {
      cy.findByRole("main")
        .findByLabelText("Kursangebote")
        .findByRole("link", { name: /Kindertanzen/i })
        .should("have.attr", "href", "/courses");
    });

    it("should display the course Formation with the correct linking", () => {
      cy.findByRole("main")
        .findByLabelText("Kursangebote")
        .findByRole("link", { name: /Formation/i })
        .should("have.attr", "href", "/courses");
    });
  });

  describe("Associationsection", () => {
    it("should have two headings ", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsinformationen")
        .findByRole("heading", { name: /Mit Herz und Rhythmus/i });
      cy.findByRole("main")
        .findByLabelText("Vereinsinformationen")
        .findByRole("heading", { name: /Über uns/i });
    });
    it("should have a description", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsgeschichte")
        .should(
          "have.text",
          "Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im Jahr 1963 steht die Freude am Tanzen und die Förderung der Tanzkultur im Mittelpunkt unserer Arbeit."
        );
    });
    it("should have a CTA with linking to the association page", () => {
      cy.findByRole("main")
        .findByLabelText("Vereinsinformationen")
        .findByRole("link")
        .should("have.attr", "href", "/association");
    });
  });

  describe("Statssection", () => {
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

  describe("Newssection", () => {
    it("should display the latest three news", () => {
      cy.findByRole("heading", {
        name: /News/i,
      })
        .siblings()
        .first()
        .findAllByRole("link")
        .should("have.lengthOf", 3)
        .should("contain", "Marius und Kristina erneut Weltmeister Latein")
        .should("contain", "Wir gewinnen den Bayernpokal der U19")
        .should(
          "contain",
          "Lea und Dominik auf dem WDSF World Open new series Standard"
        );
    });
  });
});
