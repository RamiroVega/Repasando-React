// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact ang image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

 const text = await page.getByRole('paragraph')
 const image = await page.getByRole('img')

 const texContent = await text.textContent()
 const imageSrc = await image.getAttribute('src')


 await expect(texContent?.length).toBeGreaterThan(0)
 await expect(imageSrc?.length).toBeGreaterThan(0)
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
