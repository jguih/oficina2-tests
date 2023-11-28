
describe("principal page", () => {

  beforeEach(() => {
    cy.visit("views/principal.html");
  });

  afterEach(() => {
    cy.wait(1000);
  })

  it("page should exists", () => {
    cy.visit("views/principal.html").should("exist");
  })

  ;[
    "opcoes-voluntarios", 
    "opcoes-oficinas", 
    "opcoes-departamento",
    "opcoes-termo"
  ].forEach((el) => {
    it(`dropdown ${el} should be visible`, () => {
      cy.get(`.${el}`).should("be.visible");
    })
  })

  ;[
    "painelVoluntario",
    "painelOficina",
    "PainelDepartamento"
  ].forEach((el) => {
    it(`downdown content ${el} should be invisible`, () => {
      cy.get(`#${el}`).should("be.hidden");
    })
  })

  it("clicking on voluntarios dropdown should reveal content", () => {
    cy.get(".opcoes-voluntarios a").click();
    cy.get("#painelVoluntario").should("be.visible");
  })

  it("clicking on oficinas dropdown should reveal content", () => {
    cy.get(".opcoes-oficinas a").click();
    cy.get("#painelOficina").should("be.visible");
  })

  it("clicking on departamentos dropdown should reveal content", () => {
    cy.get(".opcoes-departamento a").click();
    cy.get("#PainelDepartamento").should("be.visible");
  })

  it("clicking on 'relatórios' should redirect to 'relatórios' page", () => {
    cy.get(".opcoes-termo a").contains("Relatórios").click();
    cy.url().should("contain", "/views/relatorio-voluntario.html");
  })

  it("clicking on 'termo' should redirect to 'termo' page", () => {
    cy.get(".opcoes-termo a").contains("Termo").click();
    cy.url().should("contain", "/views/termo-voluntario.html");
  })
});