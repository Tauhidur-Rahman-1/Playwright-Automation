const{test, expect} = require('@playwright/test')
test ('Launch application', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
    await page.getByLabel("Remember me").click();
    await expect (page.getByLabel("Remember me")).toBeChecked();

})


test('alt Text', async({page}) =>{
    await page.goto('https://login.salesforce.com/');
    const altText = await page.getByAltText('Salesforce');
    console.log(altText);
    
})