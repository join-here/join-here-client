describe("Navigation test", () => {
  it("not_logined_routing", () => {
    cy.clearCookie("user-id");
    cy.visit("/");
    cy.get("nav ul li:nth-child(1) a").should("have.text", "홈").click().url().should("include", "/");
    cy.get("nav ul li:nth-child(2) a").should("have.text", "동아리 목록").click().url().should("include", "/clublist?tab=all");
    cy.get("nav ul li:nth-child(3) a").should("have.text", "동아리 등록").click().url().should("include", "/login");
    cy.get("nav ul li:nth-child(4) a").should("have.text", "동아리 관리").click().url().should("include", "/login");
    cy.get("nav ul li:nth-child(5) a").should("have.text", "마이페이지").click().url().should("include", "/login");
  });

  it("logined_routing", () => {
    cy.setCookie("user_id", "tunggary");
    cy.visit("/");
    cy.get("nav ul li:nth-child(1) a").should("have.text", "홈").click().url().should("include", "/");
    cy.get("nav ul li:nth-child(2) a").should("have.text", "동아리 목록").click().url().should("include", "/clublist?tab=all");
    cy.get("nav ul li:nth-child(3) a").should("have.text", "동아리 등록").click().url().should("include", "/club/registration");
    cy.get("nav ul li:nth-child(4) a").should("have.text", "동아리 관리").click().url().should("include", "/manage");
    cy.get("nav ul li:nth-child(5) a").should("have.text", "마이페이지").click().url().should("include", "/mypage");
  });
});
