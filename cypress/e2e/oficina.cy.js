
describe("oficina operations", () => {

  it("should create new oficina", () => {
    cy.visit("/views/registrar-oficina.html");

    cy.get("#nome").type("ofic1");
    cy.get("#qt_participantes").type("20");
    cy.get("#data_oficina").type("2023-12-21");
    cy.get("#horarioinicio").type("12:00");
    cy.get("#horariofim").type("13:00");

    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy
      .get('button')
      .contains('Registrar')
      .click()
      .then(() => {
        expect(stub.getCall(0))
        .to.be
        .calledWith('Oficina registrada com sucesso!');
      });
  })

})