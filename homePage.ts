import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async navigateToNotebooks() {
    await this.page.hover("a[href='/computers']");
    await this.page.click("a[href='/notebooks']");
  }
}
