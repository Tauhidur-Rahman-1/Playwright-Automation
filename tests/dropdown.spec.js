const{test, expect} = require('@playwright/test')
const { chromium } = require('playwright');

test('dropdown menu', async() =>{
    const browser    = await chromium.launch({ headless: false }); // Run in headed mode
    const context    = await browser.newContext();
    const page       = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    /*
     label
     value
     index
    */

    await page.locator('#state').selectOption({label:"Goa"});

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({value:"Himachal Pradesh"});

    await page.waitForTimeout(2000);

    await page.locator('#state').selectOption({index:2})

    // const value = await page.locator("#state").textContent();
    // console.log('All dropdown values: '+ value +' ');
    // expect(value).toBeTruthy(): Value is not null, 0, or false etc.
    // await expect (value.includes("West Bengal")).toBeTruthy();

    let state        = await page.$("#state");
    let allElements  = await state.$$("option");
    let ddStatus     = false;
    
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let value   = await element.textContent();
        console.log( value );
        if(value.includes("Mizoram"))
        {
            ddStatus = true;
            break;
        } 
    }

    await expect(ddStatus).toBeTruthy();

    await page.locator("#hobbies").selectOption(['Playing','Swimming']);

    await page.waitForTimeout(3000)

    //await page.pause();
})
