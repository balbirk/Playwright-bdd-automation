import {test as base} from 'playwright-bdd'
// import {EcomLoginPage} from '../pages/EcomLoginPageObj'
// import { EcomChangePage } from '../pages/ecom_ChangeNameObj';

import * as Pages from './pages'

const{EcomLoginPage, EcomChangePage} = Pages;

const createTestFunction = (PageClass) => async ({page}, use) => {
    await use(new PageClass(page))

}

export const test = base.extend({
    ecomLoginPage: createTestFunction(EcomLoginPage),
    ecomChangePage: createTestFunction(EcomChangePage)

    // ecomLoginPage: async ({page}, use) => {
    //     const loginPage =  new EcomLoginPage(page);
    //     await use(loginPage)
    // },

    // ecomChangePage: async ({page}, use) => {
    //     const changePage =  new EcomChangePage(page);
    //     await use(changePage)
    // }
})

