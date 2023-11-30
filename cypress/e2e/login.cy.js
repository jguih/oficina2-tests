
describe("login page", () => {

  it("should register new user and login", () => {
    cy.visit("/views/registrar_login.html");
    cy.get("#nome").type("jose");
    cy.get("#senha").type("pass");
    cy.get(".botao-entrar").click();
    
    cy.visit("/views/login.html");
    cy.get("#nome").type("jose");
    cy.get("#senha").type("pass");
    cy.get(".botao-entrar").click();

    cy.url().should("include", "/views/principal.html");
  })

  it("does the register button redirects correctly", () => {
    cy.visit("/views/login.html");
    cy.get(".registrar-login").find("a").click();
    cy.url().should("include", "/views/registrar_login.html");
  })
})