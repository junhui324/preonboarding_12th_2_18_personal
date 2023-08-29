export interface Auth {
	email: string;
	password: string;
	access_token: string;
}

export type AuthForm = Pick<Auth, 'email' | 'password'>;
