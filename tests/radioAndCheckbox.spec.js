const{test, expect} = require('@playwright/test')
test('checkbox', async({page})=>{
    await page.goto("https://login.salesforce.com/");
    //rememberUn
    await page.locator("#rememberUn").click();
    await expect (page.locator("#rememberUn")).toBeChecked();
})

test('radio', async({page}) =>{
    await page.goto("https://training.rcvacademy.com/test-automation-practice-page");
    await page.locator("//input[@type = 'radio']").first().click();
    await page.locator("//input[@type = 'radio']").last().click();
    await page.locator("//input[@type = 'radio']").nth(2).click();

    await expect (page.locator("//input[@type = 'radio']").last()).toBeChecked();


})