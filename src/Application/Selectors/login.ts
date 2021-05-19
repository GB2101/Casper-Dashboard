import { StoreState } from '../store';

export const selectLogged = (state: StoreState) => state.Login.logged;
