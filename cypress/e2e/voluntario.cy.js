
describe("voluntario operations", () => {

  it("should create new voluntario", () => {
    cy.visit("views/registrar-voluntario.html");

    cy.get("#nome").type("jose");
    cy.get("#ra").type("21");
    cy.get("#email").type("gui@outlook.com");
    cy.get("#telefone").type("123456");
    cy.get("#curso").select("Eng. Software");
    cy.get("#periodo").select("7");
    cy.get("#departamento").select("4");

    cy
      .get("button")
      .contains("Registrar")
      .click()
      .then(() => {
        cy.get("#customModal").should("be.visible");
      })
  })

})