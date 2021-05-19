import { Dispatch } from 'redux';

import { NewsAction, read_news } from '../Actions/news';
import { api } from '../../Services/Api';

export const ReadNews = (id: string) => async (dispatch: Dispatch<NewsAction>) => {
	try {
		const response = await api.news.read_news(id);

		dispatch(read_news(response.data));
	} catch (err) {
		console.error(err);
	}
};
