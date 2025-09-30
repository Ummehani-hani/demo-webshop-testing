import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  
  async fillBillingDetails() {
    
    if (await this.page.getByRole('button', { name: 'Checkout as Guest' }).isVisible()) {
      await this.page.getByRole('button', { name: 'Checkout as Guest' }).click();
    }

    
    await this.page.locator('#BillingNewAddress_FirstName').waitFor();

    
    await this.page.fill('#BillingNewAddress_FirstName', 'Test');
    await this.page.fill('#BillingNewAddress_LastName', 'User');
    await this.page.fill('#BillingNewAddress_Email', 'dummy@mail.com');
    await this.page.selectOption('#BillingNewAddress_CountryId', '1'); // USA
    await this.page.fill('#BillingNewAddress_City', 'New York');
    await this.page.fill('#BillingNewAddress_Address1', '123 Main St');
    await this.page.fill('#BillingNewAddress_ZipPostalCode', '10001');
    await this.page.fill('#BillingNewAddress_PhoneNumber', '1234567890');

    
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }


  async selectShippingMethod() {
    
    await this.page.locator('#shipping-methods-form').waitFor();
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  
  async selectPaymentMethod() {
   
    await this.page.locator('#payment-methods-form').waitFor();
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  
  async confirmPaymentInfo() {
   
    await this.page.locator('#payment-info-form').waitFor();
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  
  async confirmOrder() {
    await this.page.getByRole('button', { name: 'Confirm' }).click();
  }
}
