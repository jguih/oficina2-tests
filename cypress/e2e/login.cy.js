
describe("login page", () => {

  beforeEach(() => {
    cy.visit("views/login.html");
  });

  afterEach(() => {
    cy.wait(1000);
  })

  it("does the exists", () => {
    cy.visit("views/login.html").should("exist");
  });

  it("is user field enabled", () => {
    cy.get("#nome").should("be.enabled");
  })

  it("is user field accepting input", () => {
    cy.get("#nome").type("user@user.com");
    cy.get("#nome").should("contain.value", "user@user.com");

    cy.get("#nome").clear();
    cy.get("#nome").should("contain.value", "");
  })

  it("is password field enabled", () => {
    cy.get("#senha").should("be.enabled");
  })

  it("is password field accepting input", () => {
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
  })
})