class MainPage {
  visit() {
    cy.visit('/');
  }

 acceptCookies() {
  cy.acceptCookies(); // command from support/commands.js
}

  checkHeaderMenu(items) {
    cy.get('header').should('be.visible');
    items.forEach(item => {
      cy.contains('header', item).should('be.visible');
    });
  }

  navigateToPricing() {
    cy.get('div[class="flex items-center header-md:text-black dark:header-md:text-cream header-md:p-md header-md:outline-0 max-header-md:text-black dark:max-header-md:text-cream"]>span').click();
    cy.url().should('contain', '/pricing');
  }

  navigateToProductsViaDropdown() {
    cy.get('#radix-_R_2n9divb_').click();
    cy.get('div[role="menuitem"] [href="/products"]').scrollIntoView().should('be.visible').click();
    cy.url().should('contain', '/products');
  }


  signUpAndCheckErrors() {
    cy.contains('a[href="/sign-up"]', 'Sign up').click();
    cy.url().should('contain', '/sign-up');
    cy.get("span[data-content='SIGN UP']").click();
    cy.get('#email_message').should('include.text',"This field is required.");
    cy.get('#first_name_message').should('include.text',"This field is required.");
    cy.get('#last_name_message').should('include.text',"This field is required.");
    cy.get('#required').should('include.text',"This field is required.");
    cy.get('#terms_and_conditions_message').should('include.text',"Please accept the terms and conditions");
  }

  checkFooterColumn(title, minLinks, links = []) {
    cy.contains('footer', title).parent()
      .within(() => {
        cy.get('a').should('have.length.at.least', minLinks);
        links.forEach(link => {
          cy.get(`a[href="${link}"]`).should('exist');
        });
      });
  }

  clickSignUp() {
    cy.contains('a[href="/sign-up"]', 'Sign up').click();
  }
}

export default MainPage;