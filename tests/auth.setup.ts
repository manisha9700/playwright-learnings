

import {test as setup,Page} from "@playwright/test";
import { LoginPage } from "./Pages/Login";
import { Dashboard } from "./Pages/dashboard";

// async function login(
//     page: Page,
//     username :string,
//     password : string
//  )
//  {
//await page.goto("https://playwrightlab.github.io/");
//     //console.log("Navigated to PlayLab Website");
//     await page.locator("#navLoginBtn").click();
    
//     //  console.log("Navigated to Login Page,Give Ur Credential");
//     await page.getByPlaceholder("you@example.com").fill(username);
//     await page.getByPlaceholder("Enter your password").fill(password);
//     await page.getByRole("button", { name: "Sign In" }).click();

//     await page.context().storageState({
//         path: "playwright/.auth/user.json"
//     });

//  }

 
 setup('Test Setup',async({page}) => {
    await page.goto("https://playwrightlab.github.io/");
    const loginPage = new LoginPage(page);
    await loginPage.login(
        'test@playlab.com',
        'Password123'
    );

    // await login(
    //     page,
    // 'test@playlab.com',
    // 'Password123'
    // )

    
    
 });
 
