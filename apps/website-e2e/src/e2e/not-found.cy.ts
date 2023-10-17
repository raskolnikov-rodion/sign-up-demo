import { getHeader } from '../support/not-found.po';

describe('Not Found Page', () => {
  beforeEach(() => cy.visit('/this-page-does-not-exist'));

  it('should display the Not Found header', () => {
    getHeader().contains('Page not found!');
  });
});
