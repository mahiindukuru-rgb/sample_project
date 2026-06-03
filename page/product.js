import { expect } from "@playwright/test";

export class product
{
    constructor(page)
    {
        this.page=page
        this.addtocart=page.getByRole('link',{name:'Add to cart'})
    }
    async addtocartandaccept()
    {
        // click Add to cart and wait for the confirmation dialog
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addtocart.click()
        ])
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    }
    
}