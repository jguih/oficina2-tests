
describe("departamento operations", () => {

  it("should create new departamento", () => {
    cy.visit("views/registrar-departamento.html");

    cy.get("#nome").type("dpto1");
    cy.get("#responsavel").type("jose");

    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy
      .get('button')
      .contains('Registrar')
      .click()
      .then(() => {
        expect(stub.getCall(0))
        .to.be
        .calledWith('Departamento registrado com sucesso!');
      });
  })

})