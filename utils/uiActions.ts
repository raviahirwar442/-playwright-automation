import { Locator, type LocatorClickOptions, type LocatorFillOptions } from '@playwright/test';

const ENABLE_HIGHLIGHT = process.env.HIGHLIGHT === 'true';

async function highlight(locator: Locator) {
  if (!ENABLE_HIGHLIGHT) return;

  await locator.evaluate((el: HTMLElement) => {
    const original = el.getAttribute('style') || '';

    el.setAttribute(
      'style',
      original +
        '; outline: 4px solid red; background-color: rgba(255,255,0,0.4);'
    );

    setTimeout(() => {
      el.setAttribute('style', original);
    }, 500);
  });
}

export async function click(locator: Locator, options?: LocatorClickOptions) {
  await locator.waitFor({ state: 'visible' });
  await highlight(locator);
  await locator.click(options);
}

export async function fill(locator: Locator, value: string, options?: LocatorFillOptions) {
  await locator.waitFor({ state: 'visible' });
  await highlight(locator);
  await locator.fill(value, options);
}
