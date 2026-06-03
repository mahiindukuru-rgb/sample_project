import {test,expect} from '@playwright/test';
import { login } from '../page/login';
import { homepage } from '../page/homepage';
import { product } from '../page/product';
import { CartPage } from '../page/cart';
import { PlaceOrder } from '../page/placeorder';

test('login to demoblaze',async({page})=>
{
const loginpages=new login(page)
await loginpages.goto()
await loginpages.loginpage('Nagrajanvn','password12345')
})

test('click on product',async({page})=>
{
    const loginpage=new login(page)
    const loginhomepage=new homepage(page)
    const productpagemethod=new product(page)
    const cartmethod=new CartPage(page)
    const placeordermethod=new PlaceOrder(page)
    await loginpage.goto()
    await loginpage.loginpage('saikumar_08','saikumar_08')
    await loginhomepage.openproduct('Nokia lumia 1520')
    await productpagemethod.addtocartandaccept()
    await cartmethod.goto()
    await cartmethod.clickPlaceOrder()
    await placeordermethod.fillOrderDetails({name: 'Nagarajan', country: 'us', city:'uthharpradesh', card:'8098800966', month:'06', year:'2030' })
    await placeordermethod.purchasebutton()
})