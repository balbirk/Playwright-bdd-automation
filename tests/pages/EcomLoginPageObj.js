import {expect} from '@playwright/test'

class EcomLoginPage{
    constructor(page){
        this.page = page
        this.my_account_btn = page.getByRole("button",{name:  'My account'})
        this.email_box = page.getByPlaceholder('E-Mail Address')
        this.password_box = page.getByPlaceholder('Password')
        this.submit_btn = page.locator("input[value='Login']")
    }

    async navigateToUrl(url){
        
        await this.page.goto(url)
        await this.page.pause()
    }

    async clickOnMyAccount(){
        await this.my_account_btn.click()

    }

    async enterEmailAddress(emailAddress){
        await this.email_box.fill(emailAddress)
    }

    async enterPassword(password){
        await this.password_box.fill(password)
    }

    async clickOnSubmit(){
        await this.submit_btn.click()
    }

    async verifyUserLandOnAccountPage(logged_url){
        await expect(this.page).toHaveURL(new RegExp(logged_url))
    }

    async verifyUserIsNotAbleToLogin(login_url){
        await expect(this.page).toHaveURL(new RegExp(login_url))
    }

}
export{EcomLoginPage}
