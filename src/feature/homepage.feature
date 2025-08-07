@Test
Feature: Playwright Home Page

  @Sample
  Scenario: Check title
    Given I am on Playwright home page
    When I click link "Get started"
    Then I see in title "Installation"
