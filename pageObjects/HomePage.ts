import { Locator, Page } from '@playwright/test';


export class HomePage {
    page: Page;
    headingAutomationExercise: Locator;
    topslider:Locator;
    categoryTitle:Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingAutomationExercise = page.getByRole('heading', { name: 'AutomationExercise' });
        this.topslider = page.locator('#slider .carousel-inner');
        this.categoryTitle = page.getByRole('heading', {name: 'Category', level:2});
    }

     navigate() {
        return this.page.goto('https://automationexercise.com/');
    }

     getheadingAutomationExercise(){
        return this.headingAutomationExercise;
    }
    gettopslider(){
        return this.topslider;
    }
    getcategoryTitle(){
        return this.categoryTitle;
    }
}