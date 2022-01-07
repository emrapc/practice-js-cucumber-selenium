Feature: Amazon search
  @amazon
  Background: The user open a home page
    Given user open a google.com pages

  Scenario: Search for a nintendo
    When the user searches for amazon and get results
    Then the user click the second results and open the amazon.com
    And the user search for "nintendo" and get results
    And the user select the nintendo swift
    And the user product add the cart
    And the user search "apple" and get results
    And the user click iphone 11 and add the cart
    And the user enters product cart
    And the user delete the product from cart



