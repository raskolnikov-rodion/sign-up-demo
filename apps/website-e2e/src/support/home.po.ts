export const getHeader = () => cy.get("[data-test='home-header']");
export const getSignUpForm = () => cy.get("[data-test='sign-up-form']");
export const getFirstNameInput = () =>
  cy.get("[data-test='sign-up-first-name']");
export const getLastNameInput = () => cy.get("[data-test='sign-up-last-name']");
export const getEmailInput = () => cy.get("[data-test='sign-up-email']");
export const getSignUpSubmit = () => cy.get("[data-test='sign-up-submit']");
export const getSignUpSuccess = () =>
  cy.get("[data-test='sign-up-success']", { timeout: 70000 });
