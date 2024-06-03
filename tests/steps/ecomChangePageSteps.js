import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

When('I click on edit your account information', async ({ecomChangePage}) => {

    await ecomChangePage.clickOnEditMyAccount()
});


When('I change first name to {string}', async ({ecomChangePage}, firstnm) => {
    await ecomChangePage.editFirstName(firstnm)
});


When('I change last name to {string}', async ({ecomChangePage}, lastnm) => {
    await ecomChangePage.editLastName(lastnm)
});


When('I click on Continue button', async ({ecomChangePage}) => {
    await ecomChangePage.clickOnContinue()
});


 Then('I should see the success message {string}', async ({page, ecomChangePage}, message) => {
    await ecomChangePage.verifyUserGetSuccessMessage(message)
});