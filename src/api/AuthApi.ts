import API_ENDPOINTS from '../utils/constants/ApiEndPoint';
import { AuthForm, Auth } from '../utils/types/Auth.interface';
import { setToken } from '../utils/token/Token';
import { callApi } from './Api';

export const authApi = {
	signup: async ({ email, password }: AuthForm): Promise<void> => {
		const data = { email, password };
		await callApi(API_ENDPOINTS.SIGNUP, 'POST', data);
	},

	signin: async ({ email, password }: AuthForm): Promise<Auth> => {
		const data = { email, password };
		const responseData = await callApi(API_ENDPOINTS.SIGNIN, 'POST', data);
		setToken(responseData.access_token);
		return responseData;
	},
};
