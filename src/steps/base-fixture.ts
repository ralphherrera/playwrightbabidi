import { test as base, createBdd } from 'playwright-bdd';
import { TodoPage } from '../pages/todo-page';

type TestFixture = {
	// Page Objects
	todoPage: TodoPage;
};

export const test = base.extend<TestFixture>({
	// Add your fixture setup here
	todoPage: async ({ page }, use) => {
		const todoPage = new TodoPage(page);
		use(todoPage);
	},
});

export const { Given, When, Then, BeforeScenario } = createBdd(test);
