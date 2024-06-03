Feature: Verify login

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My Account"
    And I enter email address "pranav@testroverautomation.com"
    And I enter password "Test1234"
    And I click on submit button
    Then I should verify URL contains "route=account/account"

  Scenario Outline: Verify user is not able to login with invalid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My Account"
    And I enter email address "<emailaddress>"
    And I enter password "<password>"
    And I click on submit button
    Then I should verify user is not able to login and URL contains "route=account/login"

    Examples:
      | emailaddress                | password   |
      | xyz@gmail.com               | TestMeTest |
      | srk@testroverautomation.com | Jawan123   |
