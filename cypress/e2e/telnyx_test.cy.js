import MainPage from '../pages/MainPage';
import ContactUsPage from '../pages/ContactUs';

describe('Telnyx', () => {
  const mainPage = new MainPage();

it('Open the app and check the Main page title', () => {
    mainPage.visit();
    cy.title().should('eq', 'Telnyx—Voice AI Agents with Built-In Global Telco Infrastructure')
  })
it('Check Navigation menu in Header (Desktop)', () => {
  mainPage.visit();
  cy.acceptCookies()
  cy.viewport(1280, 800) 
  const menuItems = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers'
  ]
  mainPage.checkHeaderMenu(menuItems);
})
it('Check Navigation menu in Header (Mobile)', () => {
  mainPage.visit();
  cy.acceptCookies()
  cy.viewport(390, 844) 
  cy.get('header button').first().click() // Click burger-menu
  const menuItems = [
    'Products',
    'Solutions',
    'Pricing',
    'Why Telnyx',
    'Resources',
    'Developers'
  ]
  mainPage.checkHeaderMenu(menuItems);
})
it('Navigate to Pricing (Desktop)', () => {
  cy.viewport(1280, 800)          
  mainPage.visit();
  cy.acceptCookies();
  mainPage.navigateToPricing();
})
it('Navigate to Products via dropdown (Desktop)', () => {
  cy.viewport(1280, 800)         
  mainPage.visit();
  cy.acceptCookies()
  mainPage.navigateToProductsViaDropdown();
})
it ('Check SignUp button, signup url, error messages', () => {
   mainPage.visit();
   cy.acceptCookies()
   mainPage.signUpAndCheckErrors();
})
it('Check footer columns and social media links (Desktop)', () => {
   cy.viewport(1280, 800)
   mainPage.visit()
   cy.acceptCookies()

   cy.get('footer').scrollIntoView()
   mainPage.checkFooterColumn('Company', 5);
   mainPage.checkFooterColumn('Legal', 10);
   mainPage.checkFooterColumn('Compare', 5);
   mainPage.checkFooterColumn('Social', 0, [
      'https://www.linkedin.com/company/telnyx',
      'https://x.com/telnyx',
      'https://www.facebook.com/Telnyx/'
    ]);
})
it('Check footer columns and social media links (Mobile)', () => {
   cy.viewport(390, 844)
   mainPage.visit()
   cy.acceptCookies()

   cy.get('footer').scrollIntoView()
   mainPage.checkFooterColumn('Company', 5);
   mainPage.checkFooterColumn('Legal', 10);
   mainPage.checkFooterColumn('Compare', 5);
   mainPage.checkFooterColumn('Social', 0, [
      'https://www.linkedin.com/company/telnyx',
      'https://x.com/telnyx',
      'https://www.facebook.com/Telnyx/'
    ]);
  })

describe('Telnyx Contact us', () => {
  const contactUsPage = new ContactUsPage();
  
it('Search (Desktop)', () => {
cy.viewport(1280, 800)          
contactUsPage.visit();
contactUsPage.checkSetiLinkAndSearch('SIP');
})
it('Navigate to Contact us, check Talk to an expert text (Desktop)', () => {
cy.viewport(1280, 800)
contactUsPage.visit();
contactUsPage.navigateToContactUs();
})
})
})
