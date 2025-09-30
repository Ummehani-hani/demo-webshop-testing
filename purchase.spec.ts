import { test } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { ConfirmationPage } from '../pages/confirmationPage';

test('E2E Purchase Flow - Buy 14.1-inch Laptop', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  const register = new RegisterPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const confirmation = new ConfirmationPage(page);

  const email = `ummehani123@gmail.com`;
  const password = 'hanitester123';


  await register.registerUser(email, password);

  
  await product.selectLaptop();
  await product.addToCart();

 
  await cart.openCart();
  await cart.verifyProductInCart('14.1-inch Laptop');
  await cart.proceedToCheckout();


  await checkout.fillBillingDetails();
  await checkout.selectShippingMethod();
  await checkout.selectPaymentMethod();
  await checkout.confirmPaymentInfo();
  await checkout.confirmOrder();

  
  await confirmation.validateOrder();
});
