import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async validateOrder() {
    await expect(this.page.locator('.title')).toContainText('Thank you');
    const orderText = await this.page.textContent('.order-number');
    expect(orderText).toMatch(/ORDER\s#\d+/);
  }
}
