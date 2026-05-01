# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> user can login successfully
- Location: tests/login.spec.ts:4:5

# Error details

```
Error: locator.evaluate: selector: expected string, got object
```

# Test source

```ts
  1  | import { Locator } from '@playwright/test';
  2  | 
  3  | const ENABLE_HIGHLIGHT = process.env.HIGHLIGHT === 'true';
  4  | 
  5  | async function highlight(locator: Locator) {
  6  |   if (!ENABLE_HIGHLIGHT) return;
  7  | 
> 8  |   await locator.evaluate((el) => {
     |                 ^ Error: locator.evaluate: selector: expected string, got object
  9  |     const original = el.getAttribute('style') || '';
  10 | 
  11 |     el.setAttribute(
  12 |       'style',
  13 |       original +
  14 |         '; outline: 3px solid red; background-color: rgba(255,255,0,0.3);'
  15 |     );
  16 | 
  17 |     setTimeout(() => {
  18 |       el.setAttribute('style', original);
  19 |     }, 500);
  20 |   });
  21 | }
  22 | 
  23 | export async function click(locator: Locator) {
  24 |   await highlight(locator);
  25 |   await locator.click();
  26 | }
  27 | 
  28 | export async function fill(locator: Locator, value: string) {
  29 |   await highlight(locator);
  30 |   await locator.fill(value);
  31 | }
```