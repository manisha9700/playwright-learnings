import { Page } from "@playwright/test";

export class Dashboard{
    constructor(private page :Page){}
    welcomeMsg = this.page.getByRole("heading", {
        name: "Welcome, test@playlab.com!"
    });
    checkOutBtn = this.page.getByTestId('nav-logout');
}
