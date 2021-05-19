import { StoreState } from '../store';
import { NEWS } from '../Actions/table';

export const selectNews = (state: StoreState): NEWS => state.News;
