import { Page, test } from '@playwright/test';

export class RegistrationPage {
    constructor(public page: Page){
    }

    firstName = this.page.locator('#input-firstname')
    lastName = this.page.locator('#input-lastname')
    email = this.page.locator('#input-email')
    telephone = this.page.locator('#input-telephone')
    password = this.page.locator('#input-password')
    confirmPassword = this.page.locator('#input-confirm')
    submitRegistrationButton = this.page.locator('[value="Continue"]')
    // agreeCheckBox = this.page.locator('.agree')
    termAndContitionCheckBox = this.page.locator('//label[@for="input-agree"]')


    async enterFirstName(firstName: string){
        await this.firstName.fill(firstName)
    }
    async enterLastName(lastName: string){
        await this.lastName.fill(lastName)
    }
    async enterEmail(email: string){
        await this.email.fill(email)
    }
    async enterTelephone(telephone: string){
        await this.telephone.fill(telephone)
    }
    async enterPassword(password: string){
        await this.password.fill(password)
    }
    async enterConfirmPassword(password: string){
        await this.confirmPassword.fill(password)
    }

    async clickTermAndCondition() {
        await this.termAndContitionCheckBox.click()
    }

    async clickRegistrationButton(){
        await this.submitRegistrationButton.click()
    }
}