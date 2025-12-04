import { test as base } from '@playwright/test';
import { HomePage } from "../pageObjects/HomePage";
import { ProductsPage } from "../pageObjects/ProductsPage";
import { CartPage } from '../pageObjects/CartPage';

export type MyFixtures = {
    homePage: HomePage;
    productsPage: ProductsPage;
    cartPage:CartPage;
}

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productsPage: async ({page}, use)=>{
        await use(new ProductsPage(page));
    }
    ,
    cartPage: async ({page}, use)=>{
        await use(new CartPage(page));
    }
});

export { expect } from '@playwright/test';

