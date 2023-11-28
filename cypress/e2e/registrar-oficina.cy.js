
describe("registrar-oficina page", () => {

  beforeEach(() => {
    cy.visit("/views/registrar-oficina.html");
  });

  afterEach(() => {
    cy.wait(1000);
  })

  it("registrar-oficina page should exist", () => {
    cy.visit("/views/registrar-oficina.html").should("exist");
  })

  it("all input fields should be visible and enabled", () => {
    cy.get("input").should("be.visible");
    cy.get("input").should("be.enabled");
  })

  it(`nome field should accept user input`, () => {
    cy.get(`#nome`).type("test");
    cy.get(`#nome`).should("have.value", "test");
  })

  it(`qt_participantes field should accept user input`, () => {
    cy.get(`#qt_participantes`).type("12");
    cy.get(`#qt_participantes`).should("have.value", "12");
  })

  it("all voluntario fields should accept user input", () => {
    cy.get("[name=Voluntário]").type("test");
    cy.get("[name=Voluntário]").should("have.value", "test");
  })

  it("clicking on button should add another voluntario", () => {
    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 2);
    cy.get(".botao-addVoluntario").click();
    cy.get("[name=Voluntário]").should("have.length", 3);
  })

})