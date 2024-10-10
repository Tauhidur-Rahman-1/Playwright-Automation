const{test, expect} = require('@playwright/test')
test ('Launch application', async({page}) =>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //ParaBank | Welcome | Online Banking
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await page.getByRole("link",{name:"Forgot login info?"}).click();
    await expect(page.locator("xpath  = //*[@class = 'title']")).toHaveText("Customer Lookup");

})