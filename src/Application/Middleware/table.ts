import { Dispatch } from 'redux';

import { TableAction, NEWS, add_news, replace_news } from '../Actions/table';
import { api } from '../../Services/Api';

export const AddNews = (payload: NEWS) => async (dispatch: Dispatch<TableAction>) => {
	try {
		const result = await api.news.add_news(payload);

		dispatch(add_news({ ...payload, _id: result.id, link: result.link }));
	} catch (err) {
		console.error(err);
	}
};

export const ListNews = () => async (dispatch: Dispatch<TableAction>) => {
	try {
		const response = await api.news.list_news();

		dispatch(replace_news(response.data));
	} catch (err) {
		console.error('Error:', err);
	}
};

export const DeleteNews = (id: string) => async (dispatch: Dispatch<any>) => {
	try {
		await api.news.delete_news(id);

		dispatch(ListNews());
	} catch (err) {
		console.error('Error:', err);
	}
};

export const UpdateNews = (payload: NEWS) => async (dispatch: Dispatch<any>) => {
	try {
		await api.news.update_news(payload._id, payload);

		dispatch(ListNews());
	} catch (err) {
		console.log('Error:', err);
	}
};
