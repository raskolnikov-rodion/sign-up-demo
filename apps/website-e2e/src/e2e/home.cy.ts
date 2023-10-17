import { getHeader } from '../support/home.po';

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Home header', () => {
    getHeader().contains('Welcome!');
  });
});
