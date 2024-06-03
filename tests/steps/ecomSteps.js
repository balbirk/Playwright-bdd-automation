//import {test, expect} from '@playwright/test'

import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

//replace page with ecomLoginPage to use the fixture
Given('I navigate to {string}', async ({ecomLoginPage, page}, url) => {
  //replaced function names with POM names
    await ecomLoginPage.navigateToUrl(url)
  });


Given('I click on {string}', async ({ecomLoginPage}, My_account) => {
    await ecomLoginPage.clickOnMyAccount()
  });


Given('I enter email address {string}', async ({ecomLoginPage}, emailAddress) => {
    await ecomLoginPage.enterEmailAddress(emailAddress)
  });


Given('I enter password {string}', async ({ecomLoginPage}, passWord) => {
    await ecomLoginPage.enterPassword(passWord)
  });

  
Given('I click on submit button', async ({ecomLoginPage}) => {
  await ecomLoginPage.clickOnSubmit()
  });

Then('I should verify URL contains {string}', async ({ecomLoginPage}, logged_url) => {
  await ecomLoginPage.verifyUserLandOnAccountPage(logged_url)
  });

  
Then('I should verify user is not able to login and URL contains {string}', async ({ecomLoginPage}, login_url) => {
  await ecomLoginPage.verifyUserIsNotAbleToLogin(login_url)
});


