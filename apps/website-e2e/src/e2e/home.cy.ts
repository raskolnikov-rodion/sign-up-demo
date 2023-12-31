import {
  getEmailInput,
  getFirstNameInput,
  getHeader,
  getLastNameInput,
  getSignUpForm,
  getSignUpSubmit,
  getSignUpSuccess,
} from '../support/home.po';

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Home header', () => {
    getHeader().contains("You're one step away from a Smile!");
  });

  describe('Sign-up Form', () => {
    beforeEach(() => {
      cy.intercept(
        { method: 'post', url: '/api/signup' },
        { statusCode: 200 }
      ).as('submitSignUp');
    });

    it('should allow user to enter data and sign-up', () => {
      getSignUpForm().should('be.visible');
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
      getSignUpSuccess().should('be.visible');
      getSignUpSuccess().should('not.exist');
    });
  });
});
