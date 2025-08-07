import { Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class TodoPage extends BasePage {
	readonly input_newTodo: Locator = this.page.locator("input[class='new-todo']");
	readonly todoList: Locator = this.page.locator("ul[class='todo-list']");
}
