import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  firstName = this.page.getByRole('textbox', { name: 'First Name' });
  lastName = this.page.getByRole('textbox', { name: 'Last Name' });
  zip = this.page.getByRole('textbox', { name: 'Zip/Postal Code' });

  continueBtn = this.page.getByRole('button', { name: 'Continue' });
  finishBtn = this.page.getByRole('button', { name: 'Finish' });

  successMsg = this.page.getByText('Thank you for your order');

  async completeCheckout() {
    await this.fill(this.firstName, 'Ravi');
    await this.fill(this.lastName, 'Test');
    await this.fill(this.zip, '12345');

    await this.click(this.continueBtn);
    await this.click(this.finishBtn);
  }
}
