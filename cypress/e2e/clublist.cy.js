beforeEach(() => {
  cy.setCookie("user_id", "tunggary");
});

describe("club list test", () => {
  it("club category tab", () => {
    cy.visit("/clublist");
    cy.get(".react-tabs__tab:nth-child(1) div").should("have.text", "전체").click().url().should("include", "/clublist?tab=all");
    cy.get(".react-tabs__tab:nth-child(2) div").should("have.text", "학술").click().url().should("include", "/clublist?tab=stu");
    cy.get(".react-tabs__tab:nth-child(3) div").should("have.text", "예술").click().url().should("include", "/clublist?tab=art");
    cy.get(".react-tabs__tab:nth-child(4) div").should("have.text", "친목").click().url().should("include", "/clublist?tab=fri");
    cy.get(".react-tabs__tab:nth-child(5) div").should("have.text", "운동").click().url().should("include", "/clublist?tab=phy");
    cy.get(".react-tabs__tab:nth-child(6) div").should("have.text", "여행").click().url().should("include", "/clublist?tab=vac");
    cy.get(".react-tabs__tab:nth-child(7) div").should("have.text", "봉사").click().url().should("include", "/clublist?tab=vol");
    cy.get(".react-tabs__tab:nth-child(8) div").should("have.text", "창업").click().url().should("include", "/clublist?tab=bus");
    cy.get(".react-tabs__tab:nth-child(9) div").should("have.text", "기타").click().url().should("include", "/clublist?tab=etc");
  });

  it(`학술 club list`, () => {
    cy.visit(`/clublist?tab=stu`);
    cy.get(".panel1").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel1 > *").each(($child) => {
          expect($child).to.contain("학술");
        });
      }
    });
  });

  it(`예술 club list`, () => {
    cy.visit(`/clublist?tab=art`);
    cy.get(".panel2").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel2 > *").each(($child) => {
          expect($child).to.contain("예술");
        });
      }
    });
  });

  it(`친목 club list`, () => {
    cy.visit(`/clublist?tab=fri`);
    cy.get(".panel3").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel3 > *").each(($child) => {
          expect($child).to.contain("친목");
        });
      }
    });
  });

  it(`운동 club list`, () => {
    cy.visit(`/clublist?tab=phy`);
    cy.get(".panel4").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel4 > *").each(($child) => {
          expect($child).to.contain("운동");
        });
      }
    });
  });

  it(`여행 club list`, () => {
    cy.visit(`/clublist?tab=vac`);
    cy.get(".panel5").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel5 > *").each(($child) => {
          expect($child).to.contain("여행");
        });
      }
    });
  });

  it(`봉사 club list`, () => {
    cy.visit(`/clublist?tab=vol`);
    cy.get(".panel6").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel6 > *").each(($child) => {
          expect($child).to.contain("봉사");
        });
      }
    });
  });

  it(`창업 club list`, () => {
    cy.visit(`/clublist?tab=bus`);
    cy.get(".panel7").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel7 > *").each(($child) => {
          expect($child).to.contain("창업");
        });
      }
    });
  });

  it(`기타 club list`, () => {
    cy.visit(`/clublist?tab=etc`);
    cy.get(".panel8").then(($el) => {
      if ($el.children().length > 0) {
        cy.get(".panel8 > *").each(($child) => {
          expect($child).to.contain("기타");
        });
      }
    });
  });
});
