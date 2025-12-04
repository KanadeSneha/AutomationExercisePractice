import { expect, test } from '../fixtures/CustomFixtures'

test.beforeEach('setup', async ({ page, homePage }) => {
    await homePage.navigate();
    const acceptBtn = page.locator('button:has-text("Consent")');
    if (await acceptBtn.isVisible().catch(() => false)) {
        await acceptBtn.click();
    }
})

test('verify HomePage is redirected', async ({ homePage }) => {
    await expect(homePage.getheadingAutomationExercise()).toBeVisible();
    expect(homePage.gettopslider().isVisible());
    expect(homePage.getcategoryTitle().isVisible());
})

test('Navigation Menu Links Work - Home', async ({ homePage }) => {
    await homePage.gethomeLink().click();
    await expect(homePage.getheadingAutomationExercise()).toBeVisible();
})

test('Navigation Menu Links Work - Products', async ({ homePage,productsPage }) => {
    await homePage.getproductsLink().click();
    await expect(productsPage.getproductsTitle()).toBeVisible();
})

test('Navigation Menu Links Work - Cart', async ({ homePage,cartPage }) => {
    await homePage.getcartLink().click();
    await expect(cartPage.getshoppingCartLink()).toBeVisible();
})
