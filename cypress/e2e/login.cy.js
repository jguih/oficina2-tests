
describe("login", () => {

  it("should login", () => {
    cy.visit("/views/login.html");
    cy.get("#nome").type("jose");
    cy.get("#senha").type("123");
    cy.get(".botao-entrar").click();

    cy.url().should("include", "/views/principal.html");

    // Check for session cookie
    cy.getCookie("user-session").should("exist");

    /*
    * Should check for UI elements that 
    * indicates user is authenticated
    */
  })
})