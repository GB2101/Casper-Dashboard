import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './Reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type StoreState = ReturnType<typeof reducers>;
export default store;
