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
    it('should display a form that allows user to enter data for sign-up', () => {
      getSignUpForm().should('exist');
      getSignUpSubmit().should('be.disabled');
      getFirstNameInput().focus().type('John');
      getSignUpSubmit().should('be.disabled');
      getLastNameInput().focus().type('Cena');
      getSignUpSubmit().should('be.disabled');
      getEmailInput().focus().type('jc@signup.example.com');
      getSignUpSubmit().should('be.enabled');
    });
  });
});
