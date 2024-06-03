/** Generated from: tests\features\ecomLogin.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Verify login", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, ecomLoginPage, page, And, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
    await And("I click on \"My Account\"", null, { ecomLoginPage });
    await And("I enter email address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await And("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify URL contains \"route=account/account\"", null, { ecomLoginPage });
  });

  test.describe("Verify user is not able to login with invalid credentials", () => {

    test("Example #1", async ({ Given, ecomLoginPage, page, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on \"My Account\"", null, { ecomLoginPage });
      await And("I enter email address \"xyz@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"TestMeTest\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and URL contains \"route=account/login\"", null, { ecomLoginPage });
    });

    test("Example #2", async ({ Given, ecomLoginPage, page, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage, page });
      await And("I click on \"My Account\"", null, { ecomLoginPage });
      await And("I enter email address \"srk@testroverautomation.com\"", null, { ecomLoginPage });
      await And("I enter password \"Jawan123\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to login and URL contains \"route=account/login\"", null, { ecomLoginPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\ecomLogin.feature"),
});

const testMetaMap = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"3:3"},
  "Verify user is not able to login with invalid credentials|Example #1": {"pickleLocation":"21:7"},
  "Verify user is not able to login with invalid credentials|Example #2": {"pickleLocation":"22:7"},
};