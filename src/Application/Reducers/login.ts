import { LoginAction, LOGIN } from '../Actions/login';

interface Login {
	logged: boolean
}

const InitialState: Login = {
	logged: false,
};

const reducer = (state: Login = InitialState, action: LoginAction): Login => {
	switch (action.type) {
		case LOGIN: {
			const { password, push } = action.payload;
			if (password === 'password') {
				push('/painel');
				return { logged: true };
			}
			alert('Incorrect');
			return state;
		}

		default: {
			return state;
		}
	}
};

export default reducer;
