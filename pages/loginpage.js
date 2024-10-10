class LoginPage
{
    constructor(page)
    {
        this.page        = page;
        this.username    = "#email1" ;
        this.password    = "//input[@placeholder = 'Enter Password']";
        this.loginBtn    = "//button[text() = 'Sign in']";
    }

    async loginToApplication()
    {
        await this.page.fill(this.username, "admin@email.com");
        await this.page.fill(this.password, "admin@123");
        await this.page.click(this.loginBtn);
    }
}
module.exports = LoginPage;