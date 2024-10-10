const{test, expect} = require('@playwright/test')
test('list', async({page}) => {
    await page.goto('https://training.rcvacademy.com/');
    const locator = page.getByRole('listitem');
    await expect(locator).toHaveCount(27);

    const listsection = page.locator("(//div[@class = 'dynamic-text'])[1]", { timeout: 60000 });
    await expect(listsection.getByRole('listitem')).toHaveCount(4);
    await expect(listsection.getByRole('listitem')).toHaveText(['Access all currently published courses','Access to any new published courses till you are paid member','Per month price','Cancel anytime']);
    await expect(listsection.getByRole('listitem')
    .filter({hasText: 'Per month price' })).toHaveText('Per month price');

    const listitemonpage1 = listsection.getByRole('listitem');
    const count = await listitemonpage1.count()
    for(var i=0; i<count; i++)
    {
        console.log(await listitemonpage1.nth(i).textContent());
    }

    // for (const listitemOnPage of await page.getByRole('listitem').all())
    //     console.log(await listitemOnPage.textContent());


});