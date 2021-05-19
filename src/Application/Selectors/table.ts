import { StoreState } from '../store';

export const selectTable = (state: StoreState) => state.Table.data;
export const selectRow = (index: number) => (state: StoreState) => state.Table.data[index];
