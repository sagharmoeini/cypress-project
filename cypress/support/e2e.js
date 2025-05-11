// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// function click(category) {

//     cy.contains(category)
// }

Cypress.on("uncaught:exception", (err, runnable) => {
  // اگر پیام خطا مربوط به cross-origin یا چیزهایی که نمی‌خوای تست fail کنه بود
  if (err.message.includes("Script error")) {
    return false; // جلوی fail شدن تست رو می‌گیره
  }

  // برای بقیه خطاها اجازه بده Cypress گزارش بده
  return true;
});
