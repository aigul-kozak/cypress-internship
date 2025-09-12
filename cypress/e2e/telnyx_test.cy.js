describe('Telnyx', () => {
it('Open the app and check the Main page title', () => {
    cy.visit('/')
    cy.title().should('eq', 'Telnyx—Voice AI Agents with Built-In Global Telco Infrastructure')
  })
it('Check Navigation menu in Header (Desktop)', () => {
  cy.visit('/')
  cy.acceptCookies()
  cy.viewport(1280, 800) // Setting desktop-viewport
  const menuItems = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers'
  ]
  cy.get('header').should('be.visible')
  menuItems.forEach(item => {
  cy.contains('header', item).should('be.visible')
  })
})
it('Check Navigation menu in Header (Mobile)', () => {
  cy.visit('/')
  cy.acceptCookies()
  cy.viewport(390, 844) // Setting mobile-viewport
  cy.get('header button').first().click() // Click burger-menu
  const menuItems = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers'
  ]
  cy.get('header').should('be.visible')
  menuItems.forEach(item => {
  cy.contains('header', item).should('be.visible')
  })
})
it('Navigate to Pricing (Desktop)', () => {
  cy.viewport(1280, 800)          // Desktop-viewport
  cy.visit('/')
  cy.acceptCookies();
  cy.get('div[class="flex items-center header-md:text-black dark:header-md:text-cream header-md:p-md header-md:outline-0 max-header-md:text-black dark:max-header-md:text-cream"]>span').click()
  cy.url().should('contain', '/pricing')
})
it('Navigate to Products via dropdown (Desktop)', () => {
  cy.viewport(1280, 800)          // Desktop-viewport
  cy.visit('/')
  cy.acceptCookies()
  cy.get('#radix-_R_2n9divb_').click()
  cy.get('div[role="menuitem"] [href="/products"]')
    .scrollIntoView()
    .should('be.visible')
    .click()
  cy.url().should('contain', '/products')
})
it('Search (Desktop)', () => {
  cy.viewport(1280, 800)          // Desktop-viewport
  cy.visit('/')
  cy.get('header').within(() => {
  cy.contains('a', 'SETI').should('have.attr', 'href', 'https://seti.telnyx.com')
      .and('have.attr', 'target', '_blank')
  cy.origin('https://seti.telnyx.com', () => {
    cy.visit('/')
  cy.get('#onetrust-accept-btn-handler').click()
  cy.get('input#search[placeholder="Search..."]').first().type('SIP{enter}')
  cy.get('span[class="typography-paragraph-md"] mark').click()
  cy.contains('SIP Trunking', { timeout: 20000 }).should('be.visible')
  })
    })
})
it('Navigate to Contact us, check Talk to an expert text (Desktop)', () => {
  cy.viewport(1280, 800)
  cy.visit('/')
  cy.acceptCookies()
  cy.get('header').contains('a', 'Contact us').click()
  cy.url({ timeout: 15000 }).should('contain', '/contact-us')
  cy.contains('h1', 'Talk to an expert', { timeout: 15000 })
    .should('be.visible')
    .and('have.text', 'Talk to an expert')
});
})
it ('Check SignUp button, signup url, error messages', () => {
   cy.visit('/')
   cy.acceptCookies()
   cy.contains('a[href="/sign-up"]', 'Sign up').click()
   cy.url().should('contain', '/sign-up')
   cy.get("span[data-content='SIGN UP']").click()
   cy.get('#email_message').should('include.text',"This field is required.")
   cy.get('#first_name_message').should('include.text',"This field is required.")
   cy.get('#last_name_message').should('include.text',"This field is required.")
   cy.get('#required').should('include.text',"This field is required.")
   cy.get('#terms_and_conditions_message').should('include.text',"Please accept the terms and conditions")
})
it('Check footer columns and social media links (Desktop)', () => {
   cy.viewport(1280, 800)
   cy.visit('/')
   cy.acceptCookies()

   cy.get('footer').scrollIntoView()
   cy.contains('footer', 'Company').parent()                           
    .within(() => {
   cy.get('a').should('have.length.at.least', 5)
    })
   cy.contains('footer', 'Legal').parent()
    .within(() => {
   cy.get('a').should('have.length.at.least', 10)
    })
   cy.contains('footer', 'Compare').parent()
    .within(() => {
   cy.get('a').should('have.length.at.least', 5)
    })
   cy.contains('footer', 'Social')
    .parent()
    .within(() => {
   cy.get('a[href="https://www.linkedin.com/company/telnyx"]').should('exist')
   cy.get('a[href="https://x.com/telnyx"]').should('exist')
   cy.get('a[href="https://www.facebook.com/Telnyx/"]').should('exist')
    })
})
it('Check footer columns and social media links (Mobile)', () => {
   cy.viewport(390, 844)
   cy.visit('/')
   cy.acceptCookies()

   cy.get('footer').scrollIntoView()
   cy.contains('footer', 'Company').parent()                           
    .within(() => {
   cy.get('a').should('have.length.at.least', 5)
    })
   cy.contains('footer', 'Legal').parent()
    .within(() => {
   cy.get('a').should('have.length.at.least', 10)
    })
   cy.contains('footer', 'Compare').parent()
    .within(() => {
   cy.get('a').should('have.length.at.least', 5)
    })
   cy.contains('footer', 'Social')
    .parent()
    .within(() => {
   cy.get('a[href="https://www.linkedin.com/company/telnyx"]').should('exist')
   cy.get('a[href="https://x.com/telnyx"]').should('exist')
   cy.get('a[href="https://www.facebook.com/Telnyx/"]').should('exist')
    })
})

