import { Page, test } from '@playwright/test';

export class HomePage {

    constructor(public page: Page){
    }

    megaMenu = this.page.locator('//span[contains(text(),"Mega Menu")]')
    brandName = this.page.locator('//li//a[contains(text(),"Apple")]')
    brandTitle = this.page.locator('')

    async addToCart(productName) {
        const product = this.page.locator(`//div[@class='carousel-item active']//img[@title="${productName}"]`).first()
        await product.waitFor({ state: 'visible', timeout: 10000 })
        await product.click();

        const addToCartButton = this.page.locator('//div[@id="entry_216842"]//button[@title="Add to Cart"][normalize-space()="Add to Cart"]').first()
        addToCartButton.waitFor({ state: 'visible', timeout: 10000 })
        await addToCartButton.click()
    }

    async getPrice(){
        const priceText = this.page.locator('//div//h3[@data-update="price"]').textContent()
        return priceText
    }
    
    async clickOnCartIcon() {
        const cartIcon = this.page.locator('.cart-icon').first()
        // Wait for the cart icon to be visible with a 30-second timeout
        await cartIcon.waitFor({ state: 'visible', timeout: 30000 })
        // Perform the click action
        await cartIcon.click();
    }

    async getProductName() {
        const productName = this.page.locator('//td//a[@data-original-title="iPod Nano"]').textContent()
        return productName
    }
    async getNumberOfSelectedItem() {
        // Fetch the text content and await its result
        const count = await this.page.locator('//td[@class="text-center"]').textContent();
    
        // Check if count is not null before calling replace
        if (count) {
            const result = count.replace('x', ''); // Remove the 'x'
            return result;
        }
    
        return null; // Handle the case where count is null
    }

    async validateTotalPrice() {
        const totalPrice = this.page.locator('//strong[normalize-space()="$122.00"]').textContent()
        return totalPrice
    }

    async clickOnTheButton(button){
        await this.page.locator(`//a[normalize-space()="${button}"]`).click()
    }

    get viewCartButton() {
        return this.page.locator('//a[@class="btn btn-primary btn-block"]')
    }
}