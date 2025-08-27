Feature: WebdriverUniversity.com - Contact Us Page
    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a succesful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        # And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccesful contact message

    Scenario: Valid Contact Us Form Submission - Using Specific Data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a specific first name "Ryukazu"
        And I type a specific last name "Saviestyan"
        And I enter a specific email address "ryukazuas@gmail.com"
        And I type a specific text "Hello World!" and a number 2 within the comment input field
        And I click on the submit button
        Then I should be presented with a succesful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using Random Data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a random first name
        And I type a random last name
        And I enter a random email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a succesful contact us submission message