
describe("login page", () => {

  beforeEach(() => {
    cy.visit("views/login.html");
  });

  it("exists", () => {
    cy.visit("views/login.html").should("exist");
  });

  it("is user field enabled", () => {
    cy.get("#nome").should("be.enabled");
  })

  it("user field should by typable", () => {
    cy.get("#nome").type("user@user.com");
    cy.get("#nome").should("contain.value", "user@user.com");

    cy.get("#nome").clear();
    cy.get("#nome").should("contain.value", "");
  })

  it("is password field enabled", () => {
    cy.get("#senha").should("be.enabled");
  })

  it("password field should by typable", () => {
    cy.get("#senha").type("test_password");
    cy.get("#senha").should("contain.value", "test_password");

    cy.get("#senha").clear();
    cy.get("#senha").should("contain.value", "");
  })

  it("is login button enabled", () => {
    cy.get(".botao-entrar.login").should("be.enabled");
  })

  it("does the register button redirects correctly", () => {
    cy.get(".registrar-login").find("a").click();
    cy.url().should("include", "/views/registrar_login.html");

    cy.go("back");
    cy.url().should("include", "/views/login.html");
  })
})