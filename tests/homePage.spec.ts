import { expect, test } from '@playwright/test';
import { HomePage } from "../pageObjects/HomePage";
import { ProductsPage } from '../pageObjects/ProductsPage';
import { CartPage } from '../pageObjects/CartPage';

let homePage: HomePage;
let productsPage: ProductsPage;
let cartPage: CartPage;

test.beforeEach('setup', async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await homePage.navigate();
    const acceptBtn = page.locator('button:has-text("Consent")');
    if (await acceptBtn.isVisible().catch(() => false)) {
        await acceptBtn.click();
    }


})
test('verify HomePage is redirected', async ({ page }) => {
    await expect(homePage.getheadingAutomationExercise()).toBeVisible();
    expect(homePage.gettopslider().isVisible());
    expect(homePage.getcategoryTitle().isVisible());
})

test('Navigation Menu Links Work - Home', async ({ page }) => {
    await homePage.gethomeLink().click();
    await expect(homePage.getheadingAutomationExercise()).toBeVisible();
})
test('Navigation Menu Links Work - Products', async ({ page }) => {
    await homePage.getproductsLink().click();
    await expect(productsPage.getproductsTitle()).toBeVisible();
})
test('Navigation Menu Links Work - Cart', async ({ page }) => {
    await homePage.getcartLink().click();
    await expect(cartPage.getshoppingCartLink()).toBeVisible();
})
