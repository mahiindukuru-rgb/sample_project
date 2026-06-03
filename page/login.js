import { expect } from "@playwright/test";

export class login
{
    constructor(page)
    {
        this.page=page
        this.loginlink=page.locator("#login2")
        this.username=page.locator("#loginusername")
        this.password=page.locator("#loginpassword")
        this.loginbutton=page.locator("//button[text()='Log in']")
    }
    async goto()
    {
        await this.page.goto("https://www.demoblaze.com/")
    }
    async loginpage(username,password)
    {
        await this.loginlink.click() ;     
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
        // wait for the login modal to disappear to avoid it intercepting subsequent clicks
       const loginModal = this.page.locator('#logInModal');

            try {
                await loginModal.waitFor({
                    state: 'hidden',
                    timeout: 5000
                });
            } catch (e) {
                // ignore timeout
            }
    }

}
