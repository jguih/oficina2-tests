
describe("register page", () => {

  beforeEach(() => {
    cy.visit("/views/registrar_login.html");
  });

  afterEach(() => {
    cy.wait(1000);
  })

  it("does the page exists", () => {
    cy.visit("/views/registrar_login.html").should("exist");
  });

  it("is name field enabled", () => {
    cy.get("#nome").should("be.enabled");
  });

  it("is name field accepting input", () => {
    cy.get("#nome").type("user name");
    cy.get("#nome").should("have.value", "user name");

    cy.get("#nome").clear();
    cy.get("#nome").should("have.value", "");
  });

  it("is password field enabled", () => {
    cy.get("#senha").should("be.enabled");
  });

  it("is password field accepting input", () => {
    cy.get("#senha").type("my password");
    cy.get("#senha").should("have.value", "my password");

    cy.get("#senha").clear();
    cy.get("#senha").should("have.value", "");
  });

});