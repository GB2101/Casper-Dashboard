import { NewsAction, READ_NEWS } from '../Actions/news';

import { NEWS, Theme } from '../Actions/table';

const InitialState: NEWS = {
	_id: '',
	theme: Theme.esportes,
	title: '',
	description: '',
	image: '',
	message: '',
	link: '',
};

const reducer = (state: NEWS = InitialState, action: NewsAction): NEWS => {
	switch (action.type) {
		case READ_NEWS: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default reducer;
