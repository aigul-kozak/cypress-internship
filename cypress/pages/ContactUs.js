class ContactUsPage {
  visit() {
    cy.visit('/contact-us');
  }

  checkSetiLinkAndSearch(query = 'SIP') {
    cy.get('header').within(() => {
      cy.contains('a', 'SETI')
        .should('have.attr', 'href', 'https://seti.telnyx.com')
        .and('have.attr', 'target', '_blank');

      cy.origin('https://seti.telnyx.com', { args: { query } }, ({ query }) => {
        cy.visit('/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('input#search[placeholder="Search..."]').first().type(`${query}{enter}`);
        cy.get('span[class="typography-paragraph-md"] mark').click();
        cy.contains('SIP Trunking', { timeout: 20000 }).should('be.visible');
      });
    });
  }
    
  navigateToContactUs() {
    cy.get('header').contains('a', 'Contact us').click();
    cy.url({ timeout: 15000 }).should('contain', '/contact-us');
    cy.contains('h1', 'Talk to an expert', { timeout: 15000 }).should('be.visible').and('have.text', 'Talk to an expert');
  }
}
   
export default ContactUsPage;