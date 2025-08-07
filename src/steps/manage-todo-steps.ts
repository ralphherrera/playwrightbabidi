import { expect } from '@playwright/test';
import { BeforeScenario, Given, Then, When } from './base-fixture';

BeforeScenario(async ({ $tags }) => {
	console.log(`Test tag: [${$tags}]`);
});
Given('the user is on the Playwright TodoMVC site', async ({ todoPage }) => {
	await todoPage.page.goto('https://demo.playwright.dev/todomvc/#/');
});

Given('the todo list is empty', async ({ todoPage }) => {
	await expect(todoPage.todoList).not.toBeVisible();
});

When('a new todo with the text {string} is submitted', async ({ todoPage }, todoItem: string) => {
	await todoPage.input_newTodo.fill(todoItem);
	await todoPage.page.keyboard.press('Enter');
});

Then(
	'the todo list should contain a single item with text {string}',
	async ({ todoPage }, todoItem: string) => {
		await expect(todoPage.todoList).toContainText(todoItem);
	},
);

Then('the items left count should be 1', async ({ todoPage }) => {
	await expect(todoPage.todoList).toHaveCount(1);
});
