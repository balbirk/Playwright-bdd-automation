import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
import {test} from '../fixtures/fixtures'
import { env } from 'process';

Given('I navigate to home page', async ({ecomLoginPage, page}) => {
    await ecomLoginPage.navigateToUrl(process.env.URL)
    //await page.pause()
    console.log(process.env.URL)
});

Given('I enter E-mail Address and Password', async ({ecomLoginPage}) => {
    await ecomLoginPage.enterEmailAddress(process.env.EMAIL)
    await ecomLoginPage.enterPassword(process.env.PASSWORD)
    console.log(process.env.EMAIL)
    console.log(process.env.PASSWORD)

});

//npm install dotenv --save
//npm run dev-env
//$env:ENV="qa"
//npm run qa-env

//npm install --save-dev cross-env
//npm run qa-test


