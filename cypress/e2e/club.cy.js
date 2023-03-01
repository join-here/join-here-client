beforeEach(() => {
  cy.setCookie("user_id", "tunggary");
});

describe("club test", () => {
  it("club register test", () => {
    cy.visit("/club/registration");
    cy.get('input[name="name"]').type("test 동아리");
    cy.get('textarea[name="introduction"]').type("lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.");
    cy.get('input[name="category"][value="stu"]').check();
    cy.get('input[name="area"][value="CL"]').check();
    cy.get('button[type="submit"]').click();
    cy.visit("/clublist?tab=all");
    cy.get(".panel0").should("contain", "test 동아리");
  });

  it("club detail test", () => {
    cy.visit("/clublist?tab=all");
    cy.get(".panel0")
      .contains("test 동아리") // 자식 요소 중에서 'test 동아리' 텍스트를 포함하는 요소를 찾음
      .click();
    cy.get("#title").should("have.text", "test 동아리");
    cy.get("#introduction").should("have.text", "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.");
    cy.get("#category").should("have.text", "학술");
    cy.get("#area").should("have.text", "수도권");
    cy.get('textarea[name="review"]').type("후기입니다.");
    cy.get('input[type="button"]').click();
    cy.get("#review_list")
      .contains("후기입니다.")
      .parent()
      .within(() => {
        cy.get(".delete").click();
      });
  });
});
