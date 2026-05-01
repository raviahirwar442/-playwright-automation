# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.ts >> E2E: login → add to cart → checkout
- Location: tests/saucedemo.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('username')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { BasePage } from './BasePage';
  2  | 
  3  | export class LoginPage extends BasePage {
  4  | 
  5  |   username = this.page.getByTestId('username');
  6  |   password = this.page.getByTestId('password');
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