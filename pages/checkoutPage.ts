import { Locator, Page, test } from '@playwright/test';

const paymentDetails = {
    firstname: "Prashant",
    lastname: "Kumar",
    email: "prashant@gmail.com",
    telephone: "1234567890",
    password: "prashant@123",
    confirmPass:"prashant@123",
    address: "Gnagothri circle, BTM Layout 1st stage, Bangalore",
    city: "Bangalore",
}
export class CheckoutPage {

    constructor(public page: Page){
    }

    get checkoutPageTitle() {
        return this.page.locator('//li[@class="breadcrumb-item active" ]')
    }

    get firstName() {
        return this.page.locator('#input-payment-firstname')
    }

    get lastName() {
        return this.page.locator('#input-payment-lastname')
    }

    get telephoneNumber() {
        return this.page.locator('#input-telephone')
    }

    get newPaymentRadioButton() {
        return this.page.locator('//label[@for="input-payment-address-new"]')
    }

    get address() {
        return this.page.locator('#input-payment-address-1')
    }

    get city() {
        return this.page.locator('#input-payment-city')
    }

    country: Locator = this.page.locator('#input-payment-country')

    get stateDropdown() {
        return this.page.locator('#input-payment-zone')
    }

    get continueButton() {
        return this.page.locator('//button[@id="button-save"]')
    }

    get termAndCunditionCheckBox() {
        return this.page.locator('//label[@for="input-agree"]')
    }

    async fillPaymentDetails() {
        await this.newPaymentRadioButton.click()
        await this.firstName.fill(paymentDetails.firstname)
        await this.lastName.fill(paymentDetails.lastname)
        await this.telephoneNumber.clear()
        await this.telephoneNumber.fill(paymentDetails.telephone)
        await this.address.fill(paymentDetails.address)
        await this.city.fill(paymentDetails.city)
        await this.page.selectOption('select#input-payment-country', { value: '99' })
        await this.page.selectOption('select#input-payment-zone', {value: '1489'})
        await this.termAndCunditionCheckBox.click()
        await this.continueButton.click()
    }
}