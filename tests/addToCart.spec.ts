import { test, expect, Browser, chromium, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { CheckoutPage } from '../pages/checkoutPage';

const email = "prashant@gmail.com";
const pass = "prashant@123";

const productDetails = {
    productName: "iPod Nano",
    quantity: 1,
    unitPrice: "$100.00",
};

test.describe('testing the Lambda test web feature', () => {
    test("Login", async({baseURL}) => {
        const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const context = await browser.newContext();
        const page: Page = await context.newPage();

        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);

        await login.enterEmail(email);
        await login.enterPassword(pass);
        await login.clickLoginButton();

        const homePage = new HomePage(page);
        await homePage.megaMenu.hover();
        await homePage.brandName.first().click();

        await homePage.addToCart("iPod Nano");

        await homePage.viewCartButton.click();

        const shopppingCartPage = new ShoppingCartPage(page);
        // validate the product name
        const productName = await shopppingCartPage.productName();
        await expect(productDetails.productName).toBe(productName);

        // validate the total number of quantity selected
        const totalquantity = parseInt(await shopppingCartPage.totalQuantity());
        await expect(productDetails.quantity).toBe(totalquantity);

        // validate the price of product
        const unitprice = await shopppingCartPage.unitPriceValue();
        await expect(productDetails.unitPrice).toBe(unitprice);

        // validate the final price
        const totalprice = await shopppingCartPage.totalPriceValue();
        await expect(productDetails.unitPrice).toBe(totalprice);

        await shopppingCartPage.checkoutButton.click();

        // ToDo :Impliment the checkout code
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillPaymentDetails();

        // await page.waitForTimeout(20000)
    })
})