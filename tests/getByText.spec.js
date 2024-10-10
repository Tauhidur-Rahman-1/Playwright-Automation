const{test, expect} = require('@playwright/test')
test ('Forgot Password', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
    await page.getByText("Forgot Your Password?").click();
})