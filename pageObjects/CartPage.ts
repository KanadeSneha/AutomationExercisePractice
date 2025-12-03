import {Locator, Page, } from '@playwright/test';

export class CartPage
{

    page:Page;
    shoppingCartLink:Locator;


    constructor(page:Page){
        this.page = page;
        this.shoppingCartLink = page.getByText('Shopping Cart', {exact:true});

    }
    getshoppingCartLink(){
        return this.shoppingCartLink;
    }
}