import React, { useCallback, useState } from 'react';
import { AuthForm } from '../utils/types/Auth.interface';
import { TodoForm } from '../utils/types/Todo.interface';

const useInputs = (initialForm: AuthForm | TodoForm) => {
	const [data, setData] = useState(initialForm);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev: AuthForm | TodoForm) => ({ ...prev, [name]: value }));
	};
	const reset = useCallback(() => setData(initialForm), [initialForm]);
	return { data, handleChange, reset };
};

export default useInputs;
