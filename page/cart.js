import { expect } from "@playwright/test";
export class CartPage 
{
     constructor(page)
    { 
        this.page = page 
        this.placebutton = page.getByRole('Button', {name: 'Place Order'})
    } 
    async goto() {
      await this.page.goto('https://www.demoblaze.com/cart.html')
    }
      async clickPlaceOrder() 
      {
         await this.placebutton.click() 
      }
}