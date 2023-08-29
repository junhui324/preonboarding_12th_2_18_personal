export const setToken = (tokenValue: string) => {
	localStorage.setItem('token', tokenValue);
};

export const getToken = (): string | null => {
	return localStorage.getItem('token');
};

export const removeToken = (): void => {
	localStorage.removeItem('token');
};
