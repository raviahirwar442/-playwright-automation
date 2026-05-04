import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    headless: process.env.CI ? true : false,
    launchOptions: { slowMo: process.env.CI ? 0 : 1000 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com/'
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ]
});
