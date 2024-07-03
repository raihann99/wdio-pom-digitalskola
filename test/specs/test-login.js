import CartPage from "../pageobjects/cart.page.js";
import DashboardPage from "../pageobjects/dashboard.page.js";
import LoginPage from "../pageobjects/login.page.js";


describe('Login test', () => {
    it('Successful Login', async() => {
        await LoginPage.open()
        await LoginPage.login('standard_user', process.env.PASSWORD)

        await DashboardPage.validateOnPage()
        await DashboardPage.clickAddItem()
        await DashboardPage.clickCartIcon()
        
        await CartPage.validateOnPage()
        
    });
    
    
});