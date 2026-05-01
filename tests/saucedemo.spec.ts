import { test, expect } from '../fixtures/baseTest';

test('E2E: login → add to cart → checkout', async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutPage,
  page
}) => {

  await page.goto('https://www.saucedemo.com/');

  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  // Add product
  await inventoryPage.addItemToCart();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // Go to cart
  await inventoryPage.openCart();

  // Checkout
  await cartPage.proceedToCheckout();
  await checkoutPage.completeCheckout();

  // Verify success
  await expect(checkoutPage.successMsg).toBeVisible();
});