Feature: Change first and last name
@only
Scenario: Verify user is able to update account info
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My Account"
    # And I enter email address "pranav@testroverautomation.com"
    # And I enter password "Test1234"
    # And I click on submit button
    # Then I should verify URL contains "route=account/account"
    When I click on edit your account information
    And I change first name to "SRK"
    And I change last name to "Jawaan"
    And I click on Continue button
    Then I should see the success message "Success: Your account has been successfully updated."
