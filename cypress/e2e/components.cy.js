
describe("components tests", () => {

  it("clicking on voluntarios dropdown should reveal content", () => {
    cy.visit("views/principal.html");
    cy.get(`#painelVoluntario`).should("be.hidden");
    cy.get(".opcoes-voluntarios a").click();
    cy.get("#painelVoluntario").should("be.visible");
  })

  it("clicking on button should add another voluntario field", () => {
    cy.visit("/views/registrar-oficina.html");

    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 2);
    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 3);
  })

});