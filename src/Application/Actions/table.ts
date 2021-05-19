export const ADD_NEWS = 'table/ add_news';
export const REPLACE_NEWS = 'table/ read_news';

export enum Theme {
	esportes = 'esportes',
	politica = 'politica',
	entretenimento = 'entretenimento',
	famosos = 'famosos',
}

export interface NEWS {
	_id: string;
	theme: Theme;
	title: string;
	description: string;
	image: string;
	message: string;
	link: string;
}

export interface IN_ADD_NEWS {
	type: typeof ADD_NEWS;
	payload: NEWS;
}

export interface IN_REPLACE_NEWS {
	type: typeof REPLACE_NEWS;
	payload: NEWS[];
}

export const add_news = (data: NEWS): IN_ADD_NEWS => ({
	type: ADD_NEWS,
	payload: data,
});

export const replace_news = (data: NEWS[]): IN_REPLACE_NEWS => ({
	type: REPLACE_NEWS,
	payload: data,
});

export type TableAction = IN_ADD_NEWS | IN_REPLACE_NEWS;

