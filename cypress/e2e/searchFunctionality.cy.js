import { search } from '../../utils/helper';

const searchQuery = 'Zagreb';

describe('Search', () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })

    beforeEach(() => {
      cy.visit(Cypress.env("baseUrl"));
      cy.get("#onetrust-accept-btn-handler").click();
    })
    it('Should perform basic search', () => {
      search(searchQuery);

      const currentUrl = cy.url({ decode: true });
      currentUrl.should('contain', `ss=${searchQuery}`);
    })
  })