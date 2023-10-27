import { getLanguageToggle } from '../support/language-toggle.po';

describe('Language Toggle', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow user to toggle between languages', () => {
    getLanguageToggle().should('contain.text', 'Versão em Português').click();
    getLanguageToggle().should('contain.text', 'English version').click();
    getLanguageToggle().should('contain.text', 'Versão em Português');
  });
});
