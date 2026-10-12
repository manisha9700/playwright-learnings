
import {expect} from '@playwright/test'
//import { LoginPage } from '../Pages/Login';
import {test} from '../fixture'

// test.use({
//     storageState: {
//         cookies: [],
//         origins:[]
//     }
// })
test.beforeAll('Invalid Login suite',async({})=> {
    console.log('Invalid Login Suite started');
});
test.beforeEach('Invalid test page', async({page})=>{
    await page.goto('./');
});
test('invalid login test',async({loginPage,page}) => {
   // await page.locator("#navLoginBtn").click();
   // const loginPage = new LoginPage(page);
    await loginPage.login("www.example.com","password123");
    await expect(
        page.getByRole("heading", {
            name: "Welcome, test@playlab.com!"
        })).not.toBeVisible();
});
test.afterEach('Invalid and Login Assertion done',async({})=>{});
test.afterAll('Invalid Login Suite Completed',async({})=> {
    console.log('Invalid Login Suite completed');
});
