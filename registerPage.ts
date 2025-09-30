import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async registerUser(email: string, password: string) {
    await this.page.click('.ico-register');
    await this.page.click('#gender-male');
    await this.page.fill('#FirstName', 'Umm E Hani');
    await this.page.fill('#LastName', 'Tester');
    await this.page.fill('#Email', email);
    await this.page.fill('#Password', password);
    await this.page.fill('#ConfirmPassword', password);
    await this.page.click('#register-button');
    await this.page.click('.ico-login'); 
  }
}
