import {expect} from "@playwright/test";
//import { Dashboard } from "../Pages/dashboard";
import {test} from '../fixture'
//import {LoginPage } from '../PlayLab/Login';
// test.use({
//     //storageState :"playwright/.auth/user.json"
//     storageState : {
//         cookies : [],
//         origins: []
//     }
// });


test.beforeAll("Test Suit Started", async () => {
    console.log("suite started");
});

test.describe('Scenario Testing',()=> {
    test.beforeEach("Login to PlayLab without Credentials ",async({page}) => {
         await page.goto("https://playwrightlab.github.io/");
        //  const login = new LoginPage(page);
        //  await login.login("test@playlab.com","Password13");
         //await login(page,"test@playlab.com","Password13");
     });
     test("verify saved login state", async ({ dashboard }) => {
        //const DashboardPage = new Dashboard(page);
        await expect(dashboard.welcomeMsg).toBeVisible();
    
    });
    test("Check logout button", async({dashboard}) => {
        //const DashboardPage = new Dashboard(page);
        await expect(dashboard.checkOutBtn).toBeVisible();
    });
});
//      test("verify Welcome Back! ",async({page}) => {
//          await expect(page.getByRole("heading",{name : "Welcome back!"})).toBeVisible();
//     //    // await login(page,"test@playlab.com","Passßord123");
//     //     try{
//     //       await expect(page.getByText("Welcome back!")).toBeVisible();
//     //      console.log("Welcome back! Visible");
//     //     }catch(error){
//     //         console.log("1ST TEST FAILED");
//     //         throw error;
//     //     }
//     //     finally{
//     //         console.log("VERIFICATION FINISHED");
            
//     //     }
//     });
//     test("Check the Login Button visible", async({page}) => {
//        // await expect(page.locator("#welcomeName").filter({hasText : "Signed in as test@playlab.com"})).toBeVisible();
//        await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
//        //console.log("Signed in as test@playlab.com");
//     });
//     test("Verify Go To Dashboard", async({page}) => {
//         //await expect(page.locator("#goToDashboard")).toBeVisible();
//         await expect(page.getByRole("link",{name : "Go to Dashboard"})).toBeVisible();
//        // console.log("Verify Go To Dashboard");
//     });
//     test("Click SignOut button",async({page})=> {
//      await page.getByRole("button",{name : "Sign Out"}).click();
//     // console.log("Clicked Login Button");
//      });
// });
// test.describe('Login Tests',() => {
//     test("Valid Login",async({page})=> {
//         await login(page,"test@playlab.com","Password123");
//         await expect(page.getByText("Welcome back!")).toBeVisible();
//     });
//     test('Invalid Login',async({page})=> {
//         await login(page,"test@playlab.om","Password123");
//         await expect(page.getByText("Welcome back!")).toBeVisible();
//     });
// });

// test("Click Login button",async({page})=> {
//     await page.locator("#navLoginBtn").click();
//     console.log("Clicked Login Button");
// });

test.afterEach("Test Results", async({page},testInfo) => {
    console.log("---------------------------------------------");
    console.log("Test Name   :", testInfo.title);
    console.log("Test Status :",testInfo.status);
    console.log("Test Duration :",testInfo.duration,"ms");
   // console.log("Test Attachments :",testInfo.attachments);
    console.log("Test Retry :",testInfo.retry);
    console.log("Test Project :",testInfo.project.name);
    console.log("Current url :", page.url());
    


    // if(testInfo.status === 'failed'){

    //     const screenshotPath = testInfo.outputPath("failure.png");

    //     await page.screenshot({
    //       path: screenshotPath,
    //       fullPage:false
    //     });

    //     console.log("Screenshot Path :",screenshotPath);
        
    // }
    console.log("---------------------------------------------");
});
test.afterAll( async({}) => {
    console.log("suite completed");

});
