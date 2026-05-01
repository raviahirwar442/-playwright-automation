import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  checkoutBtn = this.page.getByRole('button', { name: 'Checkout' });

  async proceedToCheckout() {
    await this.click(this.checkoutBtn);
  }
}
