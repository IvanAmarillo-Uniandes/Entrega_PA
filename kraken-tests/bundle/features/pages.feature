Feature: Shared board connection

  @user1 @web
  Scenario: As an admin I want to create a new Page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "id.amarillo224@uniandes.edu.co" into input field having css selector "#ember8"
    Then I enter "rock1020736329fantasma" into input field having css selector "#ember10"
    Then I click on element having css selector "#ember12 > span"
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having css selector "a[href='#/editor/page/']"
    Then I wait for 5 seconds
    Then I enter "Page_1" into input field having css selector "div.gh-koenig-editor-pane.flex.flex-column.mih-100 > textarea"
    Then I click on element having css selector "span.fw4.midgrey-l2"
    Then I wait for 3 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"

  @user2 @web 
  Scenario: As an admin I want to edit a Page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "id.amarillo224@uniandes.edu.co" into input field having css selector "#ember8"
    Then I enter "rock1020736329fantasma" into input field having css selector "#ember10"
    Then I click on element having css selector "#ember12 > span"
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having css selector "a[title='Edit this post']"
    Then I wait for 5 seconds
    Then I enter "Page_1_Modified" into input field having css selector "div.gh-koenig-editor-pane.flex.flex-column.mih-100 > textarea"
    Then I click on element having css selector "span.fw4.midgrey-l2"
    Then I wait for 3 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"

  @user3 @web 
  Scenario: As an admin I want to publish a Page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "id.amarillo224@uniandes.edu.co" into input field having css selector "#ember8"
    Then I enter "rock1020736329fantasma" into input field having css selector "#ember10"
    Then I click on element having css selector "#ember12 > span"
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having css selector "a[title='Edit this post']"
    Then I wait for 5 seconds
    Then I click on element having css selector "div.gh-publishmenu.ember-view > div > span"
    Then I click on element having css selector "button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I click on element having css selector "span.fw4.midgrey-l2"
    Then I wait for 3 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"

  @user4 @web 
  Scenario: As an admin I want to add a tag to a Page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "id.amarillo224@uniandes.edu.co" into input field having css selector "#ember8"
    Then I enter "rock1020736329fantasma" into input field having css selector "#ember10"
    Then I click on element having css selector "#ember12 > span"
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having css selector "a[title='Edit this post']"
    Then I wait for 5 seconds
    Then I click on element having css selector "button.post-settings"
    Then I enter "newTag" into input field having css selector "input.ember-power-select-trigger-multiple-input"
    Then I click on element having css selector "span.fw4.midgrey-l2"
    Then I wait for 3 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"

  @user5 @web 
  Scenario: As an admin I want to add a delet a Page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "id.amarillo224@uniandes.edu.co" into input field having css selector "#ember8"
    Then I enter "rock1020736329fantasma" into input field having css selector "#ember10"
    Then I click on element having css selector "#ember12 > span"
    Then I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having css selector "a[title='Edit this post']"
    Then I wait for 5 seconds
    Then I click on element having css selector "button.post-settings"
    Then I click on element having css selector "form > .gh-btn > span"
    Then I click on element having css selector "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/pages"