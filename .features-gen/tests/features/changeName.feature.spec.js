/** Generated from: tests\features\changeName.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Change first and last name", () => {

  test.only("Verify user is able to update account info", { tag: ["@only"] }, async ({ Given, ecomLoginPage, page, And, When, ecomChangePage, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
    await And("I click on \"My Account\"", null, { ecomLoginPage });
    await When("I click on edit your account information", null, { ecomChangePage });
    await And("I change first name to \"SRK\"", null, { ecomChangePage });
    await And("I change last name to \"Jawaan\"", null, { ecomChangePage });
    await And("I click on Continue button", null, { ecomChangePage });
    await Then("I should see the success message \"Success: Your account has been successfully updated.\"", null, { page, ecomChangePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\changeName.feature"),
});

const testMetaMap = {
  "Verify user is able to update account info": {"pickleLocation":"3:1","tags":["@only"],"ownTags":["@only"]},
};