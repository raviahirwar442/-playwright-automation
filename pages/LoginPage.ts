import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  username = this.page.locator('#user-name');
  password = this.page.locator('#password');
  loginBtn = this.page.locator('#login-button');
  errorMsg = this.page.locator('[data-test="error"]');

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }
}
