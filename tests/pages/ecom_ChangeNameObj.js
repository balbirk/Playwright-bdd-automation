import {expect} from '@playwright/test'

class EcomChangePage{
    constructor(page){
        this.page = page
        this.editAccount = page.getByRole('link',{name: 'Edit your account information'})
        this.FirstName_box = page.getByPlaceholder('First Name')
        this.LastName_Box = page.getByPlaceholder('Last Name')
        this.Continue_btn = page.locator("input[value='Continue']")
        this.Success_message = page.getByText("Success: Your account has been successfully updated.")
    }

    async clickOnEditMyAccount(){
        await this.editAccount.click()
    }

    async editFirstName(firstname){
        await this.FirstName_box.fill(firstname)
    }

    async editLastName(lastname){
        await this.LastName_Box.fill(lastname)
    }

    async clickOnContinue(lastname){
        await this.Continue_btn.click()
    }

    async verifyUserGetSuccessMessage(message){
        await expect(this.Success_message).toBeVisible()
        await expect(this.Success_message).toContainText(new RegExp(message))
    }
}
export{EcomChangePage}
