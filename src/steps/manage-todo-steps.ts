import { expect } from '@playwright/test';
import { Given, Step, Then, When } from './base-fixture';

Given('the user is on the Playwright TodoMVC site', async ({ todoPage }) => {
	await todoPage.page.goto('https://demo.playwright.dev/todomvc/#/');
});
Given('the todo list is empty', async ({ todoPage }) => {
	await expect(todoPage.todoList).not.toBeVisible();
});

When('a new todo with the text {string} is submitted', async ({ todoPage }, todoItem: string) => {
	await todoPage.input_newTodo.pressSequentially(todoItem, { delay: 100 });
	await todoPage.page.keyboard.press('Enter');
});

Then(
	'the todo list should contain a single item with text {string}',
	async ({ todoPage }, todoItem: string) => {
		await expect(todoPage.todoList).toContainText(todoItem);
	},
);

Step('the items left count should be {string}', async ({ todoPage }, todoCount: string) => {
	expect(await todoPage.text_todoCount.textContent()).toBe(todoCount);
});

Given('the todo list contains an active item {string}', async ({ todoPage }, todoItem) => {
	await todoPage.input_newTodo.pressSequentially(todoItem, { delay: 100 });
	await todoPage.page.keyboard.press('Enter');
});

When('the item {string} is marked as completed', async ({ todoPage }, todoItem: string) => {
	await todoPage.checkbox_markCompleteToDo(todoItem).click();
});

Then('the item {string} should be marked as completed', async ({ todoPage }, todoItem: string) => {
	await expect(todoPage.todoListItem(todoItem)).toHaveClass('completed');
});
