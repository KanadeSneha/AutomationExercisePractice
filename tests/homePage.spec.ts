import { expect, test } from '@playwright/test';
import { HomePage } from "../pageObjects/homePage";

let homePage: HomePage;

test('verify HomePage is redirected', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.getheadingAutomationExercise()).toBeVisible();
    expect(homePage.gettopslider().isVisible());
    expect(homePage.getcategoryTitle().isVisible());
})