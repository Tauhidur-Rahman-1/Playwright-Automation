const{test, expect} = require('@playwright/test')
test ('Launch ', async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();

    //Using has and hasText

    // await page.locator("xpath = (//*[@class = 'inventory_item'])")
    //     .filter({ hasText: 'Sauce Labs Bike Light'})
    //     .getByRole("button",{name: "Add to Cart"})
    //     .click();
    
    await page.locator("xpath = (//*[@class = 'inventory_item'])")
        .filter({has: page.getByRole('link',{name: "Sauce Labs Bike Light"})})
        .getByRole("button",{name: "Add to Cart"})
        .click()
})