
describe("principal page", () => {

  beforeEach(() => {
    cy.visit("views/principal.html");
  });

  it(`downdown content should be invisible`, () => {
    cy.get(`#painelVoluntario`).should("be.hidden");
  })

  it("clicking on voluntarios dropdown should reveal content", () => {
    cy.get(".opcoes-voluntarios a").click();
    cy.get("#painelVoluntario").should("be.visible");
  })

  it("clicking on 'relatórios' should redirect to 'relatorios' page", () => {
    cy.get(".opcoes-termo a").contains("Relatórios").click();
    cy.url().should("contain", "/views/relatorio-voluntario.html");
  })

  it("clicking on 'termo' should redirect to 'termo' page", () => {
    cy.get(".opcoes-termo a").contains("Termo").click();
    cy.url().should("contain", "/views/termo-voluntario.html");
  })
});