
describe("registrar departamento page", () => {

  beforeEach(() => {
    cy.visit("views/registrar-departamento.html");
  })

  afterEach(() => {
    cy.wait(1000);
  })

  it("page should exist", () => {
    cy.visit("views/registrar-departamento.html").should("exist");
  })

  ;["nome", "responsavel"].forEach((id) => {

    it(`${id} input should be visible`, () => {
      cy.get(`#${id}`).should("be.visible");
    }) 

    it(`${id} input should be accept input`, () => {
      cy.get(`#${id}`).type("test text");
      cy.get(`#${id}`).should("have.value", "test text");
      cy.get(`#${id}`).clear();
      cy.get(`#${id}`).should("have.value", "");
    }) 

  })

  it("regitrar button should be visible", () => {
    cy.get(".botao-entrar").should("be.visible");
  })

})