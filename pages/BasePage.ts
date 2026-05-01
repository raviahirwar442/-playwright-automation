import { Locator, Page } from '@playwright/test';
import * as ui from '../utils/uiActions';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }

  protected getLocator(locator: string | Locator) {
    return typeof locator === 'string' ? this.page.locator(locator) : locator;
  }

  async click(locator: string | Locator) {
    await ui.click(this.getLocator(locator));
  }

  async fill(locator: string | Locator, value: string) {
    await ui.fill(this.getLocator(locator), value);
  }
}
