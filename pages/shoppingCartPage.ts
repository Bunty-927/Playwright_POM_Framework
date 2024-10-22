import { Page, test } from '@playwright/test';

export class ShoppingCartPage {

    constructor(public page: Page){
    }

    get getProductName() {
        return this.page.locator('//td[@class="text-left"]//a[contains(text(),"iPod Nano")]');
    }

    get getQuantity() {
        return this.page.locator('//div[@class="input-group flex-nowrap"]//input[@type="text" and @class="form-control"]');
    }

    get unitPrice() {
        return this.page.locator('//table[@class="table table-bordered"]//td[@class="text-right"][1]');
    }

    get totalPrice() {
        return this.page.locator('//table[@class="table table-bordered"]//td[@class="text-right"][2]');
    }

    get checkoutButton() {
        return this.page.locator('//a[text()="Checkout"]')
    }

    async productName() {
        const name = await this.getProductName.textContent();
        return name;
    }

    async totalQuantity() {
        const quantity = await this.getQuantity.inputValue();
        return quantity;
    }

    async unitPriceValue() {
        const unitprice = await this.unitPrice.textContent();
        return unitprice;
    }

    async totalPriceValue() {
        const totalprice = await this.totalPrice.textContent();
        return totalprice;
    }
    
}