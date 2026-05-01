import { Locator } from '@playwright/test';

//const ENABLE_HIGHLIGHT = import.meta.env.VITE_HIGHLIGHT === 'true';
const ENABLE_HIGHLIGHT = true;

async function highlight(locator: Locator) {
  if (!ENABLE_HIGHLIGHT) return;

  await locator.evaluate((el) => {
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

export async function click(locator: Locator) {
  await highlight(locator);
  await locator.click();
}

export async function fill(locator: Locator, value: string) {
  await highlight(locator);
  await locator.fill(value);
}