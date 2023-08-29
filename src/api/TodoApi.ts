import API_ENDPOINTS from '../utils/constants/ApiEndPoint';
import * as Todo from '../utils/types/Todo.interface';
import { callApi } from './Api';

export const todoApi = {
	createTodo: async (newTodo: string): Promise<Todo.TypeTodo> => {
		const data = { todo: newTodo };
		const responseData = await callApi(API_ENDPOINTS.TODO_CREATE, 'POST', data);
		return responseData;
	},

	getTodo: async (): Promise<Todo.TypeTodo[]> => {
		const responseData = await callApi(API_ENDPOINTS.TODO_GET, 'GET');
		return responseData;
	},

	updateTodo: async (
		id: number,
		editTodo: string,
		isCompleted: boolean,
	): Promise<Todo.TypeUpdateTodo> => {
		const data = { todo: editTodo, isCompleted };
		const responseData = await callApi(API_ENDPOINTS.TODO_UPDATE(id), 'PUT', data);
		return responseData;
	},

	deleteTodo: async (id: number): Promise<void> => {
		await callApi(API_ENDPOINTS.TODO_DELETE(id), 'DELETE');
	},
};
