Feature: WebdriverUniversity.com - Login Page
    # Background: Pre conditions
    #     Given I navigate to the webdriveruniversity homepage
    #     When I click on the login portal button
    #     And I switch to the new browser tab

    Scenario Outline: Validate Login Function - Valid and Invalid Submission
        Given I navigate to the webdriveruniversity login page
        And I input a username <username>
        And I input a password <password>
        And i click on the login button
        Then it should be presented with a message in alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |


