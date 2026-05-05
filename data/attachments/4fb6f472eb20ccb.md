# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> user can login successfully
- Location: tests/login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

# Test source

```ts
  1  | import { BasePage } from './BasePage';
  2  | 
  3  | export class LoginPage extends BasePage {
  4  | 
  5  |   username = this.page.getByRole('textbox', { name: 'Username' });
  6  |   password = this.page.getByRole('textbox', { name: 'Password' });
  7  |   loginBtn = this.page.getByRole('button', { name: 'Login' });
  8  |   errorMsg = this.page.locator('[data-test="error"]');
  9  | 
  10 |   async login(user: string, pass: string) {
> 11 |     await this.username.fill(user);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12 |     await this.password.fill(pass);
  13 |     await this.loginBtn.click();
  14 |   }
  15 | }
```