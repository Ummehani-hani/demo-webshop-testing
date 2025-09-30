import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('.ico-cart');
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator('.cart')).toContainText(productName);
  }

  async proceedToCheckout() {
    await this.page.click('#termsofservice');
    await this.page.click('#checkout');
  }
}
