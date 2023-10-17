import {
  getEmailInput,
  getFirstNameInput,
  getHeader,
  getLastNameInput,
  getSignUpForm,
  getSignUpSubmit,
} from '../support/home.po';

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Home header', () => {
    getHeader().contains('Welcome!');
  });

  describe('Sign-up Form', () => {
    beforeEach(() => {
      cy.intercept(
        { method: 'post', url: '/api/signup' },
        { statusCode: 200 }
      ).as('submitSignUp');
    });

    it('should allow user to enter data and sign-up', () => {
      getSignUpForm().should('exist');
      getSignUpSubmit().should('be.disabled');
      getFirstNameInput().focus().type('John');
      getSignUpSubmit().should('be.disabled');
      getLastNameInput().focus().type('Cena');
      getSignUpSubmit().should('be.disabled');
      getEmailInput().focus().type('jc@signup.example.com');
      getSignUpSubmit().should('be.enabled').click();
      cy.wait(['@submitSignUp']);
      getFirstNameInput().should('have.value', '');
      getLastNameInput().should('have.value', '');
      getEmailInput().should('have.value', '');
    });
  });
});
