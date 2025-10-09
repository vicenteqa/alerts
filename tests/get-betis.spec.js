
import { test, expect } from '@playwright/test';

test('La sudadera', async ({ page }) => {
  await page.goto('https://shop.realbetisbalompie.es/products/sudadera-characters-hombre-negra-001905?variant=51627738071314');
  await expect(page.locator('#AddToCart')).toHaveText('Agotado');
});