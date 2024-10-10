const{test, expect} = require('@playwright/test')
const LoginPage = require ("../pages/loginpage")
const HomePage  = require ("../pages/homepage")

test('Login to Application using POM', async({page}) =>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    // console.log(await page.viewportSize().width)
    // console.log(await page.viewportSize().height)
    const loginpage = new LoginPage(page);
    await loginpage.loginToApplication();
    const homepage  = new HomePage(page);

    await homepage.verifyManageOption();
    await homepage.logoutFromApplication(); 
})