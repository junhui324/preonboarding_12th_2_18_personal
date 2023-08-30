import axios from 'axios';

interface RequestParams {
	endpoint: string | undefined;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	params?: string;
	query?: string;
	data?: any;
	requiresToken?: boolean;
}

async function request<T>({
	endpoint,
	method,
	params = '',
	query = '',
	data,
	requiresToken = true,
}: RequestParams): Promise<T> {
	const apiUrl = params ? `${endpoint}/${params}${query ? `?${query}` : ''}` : endpoint;
	const headers: { [key: string]: string } = {
		'Content-Type': 'application/json',
	};

	requiresToken && (headers.Authorization = `${process.env.REACT_APP_GITHUB_TOKEN}`);

	try {
		const response = await axios.request<T>({
			url: apiUrl,
			method,
			headers,
			data,
		});

		return response.data;
	} catch (error: any) {
		if (error.response) {
			const { status } = error.response;
			throw new Error(status);
		} else {
			throw new Error('요청이 실패하였습니다.');
		}
	}
}

const get = <T>(
	endpoint: string | undefined,
	params = '',
	requiresToken = true,
	query = '',
): Promise<T> => request<T>({ endpoint, method: 'GET', params, requiresToken, query });

const post = <T>(
	endpoint: string | undefined,
	params = '',
	requiresToken = true,
	data: any,
): Promise<T> => request<T>({ endpoint, method: 'POST', params, requiresToken, data });

const put = <T>(
	endpoint: string | undefined,
	params = '',
	requiresToken = true,
	data: any,
): Promise<T> => request<T>({ endpoint, method: 'PUT', params, requiresToken, data });

const del = <T>(
	endpoint: string | undefined,
	params = '',
	requiresToken = true,
	data: any = {},
): Promise<T> => request<T>({ endpoint, method: 'DELETE', params, requiresToken, data });

export { get, post, put, del as delete };
