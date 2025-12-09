import { test } from '@playwright/test';

test('Alerta oferta Pegasus Trail 5 GTX', async ({ page }) => {
  await page.goto('https://www.nike.com/es/t/pegasus-trail-5-gore-tex-zapatillas-de-trail-running-impermeables-LPtVP4/FQ0908-002');
  await page.getByTestId('modal-accept-button').click();
  
  await page.getByTestId('currentPrice-container').first().waitFor();

  const precio = await page.getByTestId('currentPrice-container').first().textContent();
  const ariaDisabled = await page.locator('#grid-selector-input-10').getAttribute('aria-disabled');

  const hayDescuento = precio !== '159,99 €';
  const tallaDisponible = ariaDisabled !== 'true';

  console.log(`Precio actual: ${precio} | Talla disponible: ${tallaDisponible}`);

  if (hayDescuento && tallaDisponible) {
    throw new Error(`🔥 ¡CORRE! Precio: ${precio} y tu talla está disponible`);
  }
});