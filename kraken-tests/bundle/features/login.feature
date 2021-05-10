Feature: Gestion de Posts

@user1 @web
  Scenario: Should have error of login failed
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "g.rosales@uniandes.edu.co" into input field having id "ember8"
    Then I click on element having id "ember12"
    Then I wait
    Then I should see text "Please fill"