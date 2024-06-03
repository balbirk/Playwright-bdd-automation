@skip
Feature: Verify login with different environments

Feature Description
    Verify user is able to login with dev, qa, and prod

@skip
Scenario:  Verify user is able to login with dev, qa, and prod
Given I navigate to home page
And I click on "My Account"
And I enter E-mail Address and Password
And I click on submit button
Then I should verify URL contains "route=account/account"