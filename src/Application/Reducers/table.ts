import { TableAction, NEWS, ADD_NEWS, REPLACE_NEWS } from '../Actions/table';

interface Table {
	data: NEWS[];
}

const InitialState: Table = {
	data: [],
};

const reducer = (state: Table = InitialState, action: TableAction): Table => {
	switch (action.type) {
		case ADD_NEWS: {
			const data = [ ...state.data ];
			data.push({
				...action.payload,
			});
			return { data };
		}
		case REPLACE_NEWS: {
			const data = action.payload;
			return { data };
		}
		default: {
			return state;
		}
	}
};

export default reducer;
