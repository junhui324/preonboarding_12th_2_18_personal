const API_ENDPOINTS = {
	SIGNUP: '/auth/signup',
	SIGNIN: '/auth/signin',
	TODO_CREATE: '/todos',
	TODO_GET: '/todos',
	TODO_UPDATE: (id: number) => `/todos/${id}`,
	TODO_DELETE: (id: number) => `/todos/${id}`,
};

export default API_ENDPOINTS;
