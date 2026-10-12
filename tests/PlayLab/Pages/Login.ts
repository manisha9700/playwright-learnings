import {Page} from '@playwright/test';

export class LoginPage{
    constructor(private page : Page){ }
         navLoginBtn = this.page.locator("#navLoginBtn");
         email = this.page.getByPlaceholder("you@example.com");
         password = this.page.getByPlaceholder("Enter your password");
         signInBtn = this.page.getByRole("button", { name: "Sign In" });


         async login(username:string,password:string){
            await this.navLoginBtn.click();
            await this.email.fill(username);
            await this.password.fill(password);
            await this.signInBtn.click();
         }
}
