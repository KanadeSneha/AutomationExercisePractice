import { Locator, Page } from '@playwright/test';


export class HomePage {
    page: Page;
    headingAutomationExercise: Locator;
    topslider: Locator;
    categoryTitle: Locator;
    homeLink: Locator;
    productsLink: Locator;
    signupLogin: Locator;
    testCases: Locator;
    contactus: Locator;
    cartLink: Locator;
    footerBottom:Locator;
    scrollUp:Locator;
    subscriptionHeading:Locator;
    footerEmail:Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingAutomationExercise = page.getByRole('heading', { name: 'AutomationExercise' });
        this.topslider = page.locator('#slider .carousel-inner');
        this.categoryTitle = page.getByRole('heading', { name: 'Category', level: 2 });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.signupLogin = page.getByRole('link', { name: 'Signup/Login' });
        this.testCases = page.getByRole('link', { name: 'Test Cases' });
        this.contactus = page.getByRole('link', { name: 'Contact us' });
        this.footerBottom= page.locator('.footer-bottom');
        this.scrollUp = page.locator('#scrollUp');
        this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription', level: 2 });
        this.footerEmail = page.getByPlaceholder('Your email address');
    }

    navigate() {
        return this.page.goto('https://automationexercise.com/');
    }

    getheadingAutomationExercise() {
        return this.headingAutomationExercise;
    }
    gettopslider() {
        return this.topslider;
    }
    getcategoryTitle() {
        return this.categoryTitle;
    }
    gethomeLink(){
        return this.homeLink;
    }
     getproductsLink(){
        return this.productsLink;
    }
     getsignupLogin(){
        return this.signupLogin;
    }
     gettestCases(){
        return this.testCases;
    }
     getcontactus(){
        return this.contactus;
    }
     getcartLink(){
        return this.cartLink;
    }
    async scrollToPageBottom(){
        await this.page.evaluate(() => window.scroll(0, document.body.scrollHeight));
    }
    getfooterBottom(){
        return this.footerBottom;
    }

    getscrollUp(){
        return this.scrollUp;
    }
    getsubscriptionHeading(){
        return this.subscriptionHeading;
    }
    getfooterEmail(){
        return this.footerEmail;
    }
}