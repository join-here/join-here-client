describe("Login test", () => {
  it("login", () => {
    cy.clearCookie("user_id");
    cy.visit("/login");

    cy.get('input[name="id"]').type("tunggary");
    cy.get('input[name="password"]').type("sk165600");
    cy.intercept("POST", "/api/login").as("postLogin");
    cy.get('button[type="submit"]').click();
    cy.wait("@postLogin");
    cy.getCookie("user_id").should("exist");
  });
});
