import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,
    launchOptions: { slowMo: 1000 },
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    baseURL: 'https://www.saucedemo.com/'
  },

  reporter: [
  ['list'],
  ['allure-playwright']

]
});