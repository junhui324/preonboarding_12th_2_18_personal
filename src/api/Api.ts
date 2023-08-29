import { getToken } from '../utils/token/Token';

const baseURL = 'https://www.pre-onboarding-selection-task.shop';

const createHeaders = () => {
	const headers = new Headers();
	const token = getToken();

	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	return headers;
};

export const callApi = async (endpoint: string, method: string, data: object = {}) => {
	const url = `${baseURL}${endpoint}`;
	const headers = createHeaders();

	if (method === 'GET') {
		const response = await fetch(url, {
			method,
			headers,
		});
		return await handleResponse(response);
	} else {
		headers.append('Content-Type', 'application/json');
		const response = await fetch(url, {
			method,
			headers,
			body: JSON.stringify(data),
		});
		return await handleResponse(response);
	}
};

const handleResponse = async (response: Response) => {
	const contentLength = response.headers.get('Content-Length');
	try {
		if (!response.ok) {
			throw new Error('요청이 실패하였습니다.');
		}
		if (contentLength === null || contentLength === '0') {
			return;
		} else {
			const responseData = await response.json();
			return responseData;
		}
	} catch (error) {
		if (error instanceof Error) {
			const errorData = await response.json();
			throw new Error(errorData.message || response.statusText);
		}
	}
};
