import {test as base,expect,Page} from '@playwright/test';
import { LoginPage } from './Pages/Login';
import { Dashboard } from './Pages/dashboard';


export const test = base.extend
<{
    loginPage : LoginPage;
    dashboard : Dashboard;
}>
({
    loginPage : async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
    dashboard: async({page},use) => {
        const dashboard = new Dashboard(page);
        await use(dashboard);
    }
});
