import { NEWS } from './table';

export const READ_NEWS = 'news/ read_news';

export interface IN_READ_NEWS {
	type: typeof READ_NEWS;
	payload: NEWS;
}

export const read_news = (payload: NEWS): IN_READ_NEWS => ({
	type: READ_NEWS,
	payload,
});

export type NewsAction = IN_READ_NEWS;
