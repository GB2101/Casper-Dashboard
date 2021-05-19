export const LOGIN = 'login/ password';

export interface IN_LOGIN {
	type: typeof LOGIN;
	payload: {
		password: string;
		push: (path: string) => void
	}
}

export const login = (password: string, push: (path: string) => void): IN_LOGIN => ({
	type: LOGIN,
	payload: { password, push },
});

export type LoginAction = IN_LOGIN;
