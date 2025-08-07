@Test
Feature: Manage Todo List
    As a user
    I want to manage my tasks in a todo list
    So that I can keep track of what needs to be done

    Background:
        Given the user is on the Playwright TodoMVC site

    @CR-MANTODO @SMK-MANTODO @REG-MANTODO
    Scenario: New todo items are added to the list
        Given the todo list is empty
        When a new todo with the text "Buy milk" is submitted
        Then the todo list should contain a single item with text "Buy milk"
        And the items left count should be "1"

    @COMP-MANTODO @REG-MANTODO
    Scenario: Todo items can be marked as completed
        Given the todo list contains an active item "Pay bills"
        When the item "Pay bills" is marked as completed
        Then the item "Pay bills" should be marked as completed
        And the items left count should be "0"

# @UPD-MANTODO @REG-MANTODO
# Scenario: Todo items can be edited inline
#     Given the todo list contains an item "Learn Playwright"
#     When the text of the item "Learn Playwright" is changed to "Learn Playwright BDD"
#     Then the todo list should show an item with the text "Learn Playwright BDD"

# @DEL-MANTODO @SMK-MANTODO
# Scenario: Todo items can be removed from the list
#     Given the todo list contains an item "Call Mom"
#     When the item "Call Mom" is removed
#     Then the todo list should not contain "Call Mom"

# @FLTR-MANTODO @REG-MANTODO
# Scenario: Active filter shows only active todos
#     Given the todo list contains a completed item "Task A" and an active item "Task B"
#     When the active filter is applied
#     Then only "Task B" should be visible in the list

# @FLTR-MANTODO @REG-MANTODO
# Scenario: Completed filter shows only completed todos
#     Given the todo list contains completed items "Task A" and "Task B"
#     When the completed filter is applied
#     Then only "Task A" and "Task B" should be visible in the list

# @CLN-MANTODO @REG-MANTODO
# Scenario: Completed items can be cleared
#     Given the todo list contains completed items "Task A" and "Task B"
#     When completed items are cleared
#     Then the todo list should not contain "Task A" or "Task B"

# @BULK-MANTODO @REG-MANTODO
# Scenario: All items can be toggled as completed
#     Given the todo list contains active items "Task A", "Task B", and "Task C"
#     When all items are toggled as completed
#     Then all items should be marked as completed
#     And the items left count should be 0