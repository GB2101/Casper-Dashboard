import axios from './services';
import { NEWS } from '../../Application/Actions/table';

export const list_news = async () => {
	try {
		const response = await axios.get('/news');
		return {
			data: response.data.data,
		};
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export const read_news = async (id: string) => {
	try {
		const response = await axios.get(`/news/${id}`);
		return {
			data: response.data.data,
		};
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export const add_news = async (payload: NEWS) => {
	try {
		const result = await axios.post('/news', payload);

		const { id, link } = result.data;

		return {
			id,
			link,
		};
	} catch (err) {
		throw new Error(err);
	}
};

export const delete_news = async (id: string) => {
	try {
		await axios.delete('/news', { data: { id }});
		return {
			error: false,
		};
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export const update_news = async (id: string, payload: NEWS) => {
	try {
		await axios.put('/news', { id, ...payload });
		return {
			error: false,
		};
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
