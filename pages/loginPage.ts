import { Page, test } from '@playwright/test';

export class LoginPage {

    constructor(public page: Page){
    }

    email = this.page.locator('#input-email')
    password = this.page.locator('#input-password')
    loginButton = this.page.locator('[value="Login"]')

    async enterEmail(email: string){
        await this.email.fill(email)
    }
    async enterPassword(password: string){
        await this.password.fill(password)
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }
}