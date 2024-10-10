const{test, expect} = require('@playwright/test')
test ('Launch application', async({page}) =>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //ParaBank | Welcome | Online Banking
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await page.getByRole("link",{name:"Forgot login info?"}).click();
    await expect(page.locator("xpath  = //*[@class = 'title']")).toHaveText("Customer Lookup");

})

test ('Login', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
    //ParaBank | Welcome | Online Banking
    await page.locator("xpath  = //*[@id = 'username']").fill("RCV");
    await page.locator("css = #password").fill("RCV");
    await page.locator("xpath  = //*[@id = 'Login']").click();
    
    await expect(page.locator("xpath  = //*[@id = 'error']")).toHaveText("Please check your username and password. If you still can't log in, contact your Salesforce administrator.");


})
