import React, { ChangeEvent, useState } from 'react';
import { TypeTodo } from '../../utils/types/Todo.interface';
import * as S from '../../utils/styles/Todo.styles';
import { todoApi } from '../../api/TodoApi';

export default function TodoItem({
	todo,
	setTodos,
}: {
	todo: TypeTodo;
	setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
}) {
	const { id, todo: todoText, isCompleted } = todo;
	const [isEdit, setIsEdit] = useState(false);
	const [editTodoInput, setEditTodoInput] = useState<string>(todoText);

	const handleCheckBoxChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		await todoApi.updateTodo(id, todoText, isChecked);
		setTodos(prevTodos =>
			prevTodos.map(prevTodo =>
				prevTodo.id === id ? { ...prevTodo, isCompleted: isChecked } : prevTodo,
			),
		);
	};

	const onClickeRemoveTodo = async () => {
		if (window.confirm('삭제하시겠습니까?')) {
			await todoApi.deleteTodo(id);
			setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id));
		}
	};

	const onClickEditStatus = () => {
		setIsEdit(true);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditTodoInput(e.target.value);
	};

	const onClickSubmitBtn = async () => {
		if (!editTodoInput) return alert('내용을 입력해주세요.');
		await todoApi.updateTodo(id, editTodoInput, isCompleted);
		setTodos(prevTodos =>
			prevTodos.map(prevTodo =>
				prevTodo.id === id ? { ...prevTodo, todo: editTodoInput } : prevTodo,
			),
		);
		setIsEdit(false);
	};

	const onClickCancleBtn = () => {
		setEditTodoInput(todoText);
		setIsEdit(false);
	};

	return (
		<>
			<S.ListItem>
				{/* <li style={{ width: '100%', textAlign: 'center' }}> */}
				<label>
					<S.ItemCheckBox checked={isCompleted} onChange={handleCheckBoxChange} type="checkbox" />
					{isEdit ? (
						<S.ItemInput
							data-testid="modify-input"
							id="modify-input"
							name="modify-input"
							type="text"
							value={editTodoInput}
							onChange={handleChange}
						/>
					) : (
						<S.ItemSpan>{todo.todo}</S.ItemSpan>
					)}
				</label>
				{isEdit ? (
					<>
						<S.ItemBtn data-testid="submit-button" onClick={onClickSubmitBtn}>
							제출
						</S.ItemBtn>
						<S.ItemBtn data-testid="cancel-button" onClick={onClickCancleBtn}>
							취소
						</S.ItemBtn>
					</>
				) : (
					<>
						<S.ItemBtn data-testid="modify-button" onClick={onClickEditStatus}>
							수정
						</S.ItemBtn>
						<S.ItemBtn data-testid="delete-button" onClick={onClickeRemoveTodo}>
							삭제
						</S.ItemBtn>
					</>
				)}
				{/* </li> */}
			</S.ListItem>
		</>
	);
}
