import { Locator, Page  } from "@playwright/test";
export class ProductsPage
{
    page:Page;
    productsTitle:Locator;

    constructor(page:Page){
        this.page = page;
        this.productsTitle = page.getByRole('heading', {name: 'All Products', level:2});

    }
    getproductsTitle(){
        return this.productsTitle;
    }
}