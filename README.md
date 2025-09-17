# Telnyx E2E Tests
This repository contains **end-to-end (E2E) tests** for the **Telnyx website** using **Cypress** with a **Page Object Pattern (POP)** structure.
---
## Tech Stack

- [Cypress](https://www.cypress.io/) – End-to-end testing framework  
- JavaScript (ES6)  
- Page Object Pattern for maintainable test architecture  
---

## Project Structure

cypress/
├─ e2e/
│ ├─ telnyx_test.cy.js # Main test suite
├─ pages/
│ ├─ MainPage.js # Page Object for main pages
│ ├─ ContactUsPage.js # Page Object for Contact Us page
├─ support/
│ ├─ commands.js # Custom Cypress commands
│ └─ index.js # Support file


### Main Page

- Open the main page and check the page title
- Check navigation menu (desktop and mobile)
- Navigate to Pricing page (desktop)
- Navigate to Products via dropdown (desktop)
- Check Sign-up button and validation errors
- Check footer columns and social media links (desktop and mobile)

### Contact Us Page

- Search functionality for the SETI link
- Check "Talk to an expert" text visibility

---

## Setup & Run Tests

1. **Clone the repository:**
```bash
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Run Cypress in GUI mode:

bash
Copy code
npx cypress open
Run Cypress in headless mode:

bash
Copy code
npx cypress run

Notes
node_modules is not committed; install dependencies locally with npm install.
Custom commands are located in cypress/support/commands.js.
Page Object Pattern (POP) is used to encapsulate page-specific actions and selectors.
Cypress automatically handles cross-origin testing using cy.origin() for external links like https://seti.telnyx.com.
