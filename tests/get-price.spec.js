import { test, expect } from '@playwright/test';

test('Csepel Royal 4 Price', async ({ page }) => {
  await page.goto('https://www.santafixie.com/bicicleta-single-speed-csepel-royal-4-negro.html');
  await expect(page.locator('span[id*="product-price"] span.price')).toHaveText('699,00 €');
});

