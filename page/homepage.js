import { expect } from "@playwright/test";
export class homepage
{
    constructor(page)
    {
        this.page=page
    }
    async openproduct(productname)
    {
        // ensure any login modal is not blocking clicks
        const loginModal = this.page.locator('#logInModal')
        try {
            await loginModal.waitFor({ state: 'hidden', timeout: 2000 })
        } catch (e) {
            // ignore if not present or timeout
        }
        const product=await this.page.getByRole('link',{name:productname})
        await product.click()
    }
}