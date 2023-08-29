const isValidEmail = (email: string): boolean => {
	return email.includes('@');
};

const isValidPassword = (password: string): boolean => {
	return password.length >= 8;
};

export { isValidEmail, isValidPassword };
