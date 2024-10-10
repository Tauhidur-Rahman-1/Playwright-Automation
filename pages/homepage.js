const { expect } = require("@playwright/test");

class HomePage{
    constructor(page)
    {
        this.page         = page;
        this.menu         = "//img[@alt = 'menu']";
        this.signoutBtn   = "//button[text() = 'Sign out']";
        this.manageOption = "//span[text() = 'Manage']";

    }
    async verifyManageOption()
    {
        await expect (this.page.locator(this.manageOption)).toBeVisible();
    }
    async logoutFromApplication()
    {
        await this.page.click(this.menu);
        await this.page.click(this.signoutBtn);
    }
}

module.exports = HomePage