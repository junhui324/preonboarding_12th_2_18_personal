export interface TypeTodo {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId?: number;
}

export interface TodoForm {
	todo: string;
}

export type TypeUpdateTodo = Pick<TypeTodo, 'todo' | 'isCompleted'>;
