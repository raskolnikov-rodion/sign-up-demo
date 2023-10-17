import { getHeader, getMessage, getHomeLink } from '../support/not-found.po';

describe('Not Found Page', () => {
  beforeEach(() => cy.visit('/this-page-does-not-exist'));

  it('should display the Not Found page elements', () => {
    getHeader().contains('Page not found!');
    getMessage().should('exist');
    getHomeLink().should('exist');
  });

  it('should redirect user to Home Page', () => {
    getHomeLink().click();
    cy.location('pathname').should('equal', '/');
  });
});
