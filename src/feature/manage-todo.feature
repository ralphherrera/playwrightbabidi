Feature: Manage Todo List
    As a user
    I want to manage my tasks in a todo list
    So that I can keep track of what needs to be done

    Background:
        Given the user is on the Playwright TodoMVC site

    @NewTodoTest
    Scenario: New todo items are added to the list
        Given the todo list is empty
        When a new todo with the text "Buy milk" is submitted
        Then the todo list should contain a single item with text "Buy milk"
        Then the items left count should be 1
