import { Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class TodoPage extends BasePage {
	readonly input_newTodo: Locator = this.page.locator("input[class='new-todo']");
	readonly todoList: Locator = this.page.locator("ul[class='todo-list']");

	readonly text_todoCount: Locator = this.page.locator('[data-testid="todo-count"] strong');

	readonly checkbox_markCompleteToDo = (todoItemName: string): Locator => {
		return this.page
			.getByRole('listitem')
			.filter({ hasText: todoItemName })
			.getByLabel('Toggle Todo');
	};

	readonly todoListItem = (todoItemName: string): Locator => {
		return this.page.getByTestId('todo-item').filter({ hasText: todoItemName });
	};
}
