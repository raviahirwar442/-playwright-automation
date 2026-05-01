import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  addToCartBtn = this.page.getByRole('button', { name: 'Add to cart' });
  cartIcon = this.page.locator('.shopping_cart_link');
  cartBadge = this.page.locator('.shopping_cart_badge');

  async addItemToCart() {
    await this.click(this.addToCartBtn.first());
  }

  async openCart() {
    await this.click(this.cartIcon);
  }
}
