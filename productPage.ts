import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async selectLaptop() {
    await this.page.hover('a[href="/computers"]');
    await this.page.click('a[href="/notebooks"]');
    await this.page.click('text=14.1-inch Laptop');
  }

  async addToCart() {
    await this.page.click('#add-to-cart-button-31'); // button id may vary
    await expect(this.page.locator('.cart-qty')).toContainText('(1)');
  }
}
