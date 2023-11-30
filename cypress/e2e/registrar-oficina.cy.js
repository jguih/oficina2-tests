
describe("registrar-oficina page", () => {

  it("clicking on button should add another voluntario field", () => {
    cy.visit("/views/registrar-oficina.html");

    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 2);
    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 3);
  })

})