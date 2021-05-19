import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Router from './View/Router';
import store from './Application/store';
import './style.css';

const App: FC = () => (
	<Provider store={store}>
		<Router />
	</Provider>
);
export default App;
