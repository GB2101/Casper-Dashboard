import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../Pages/Main';
import LoginPage from '../Pages/Login';
import AddNewsPage from '../Pages/AddNews';
import NewsPage from '../Pages/News';
import LandingPage from '../Pages/LandingPage';

const Router: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={LandingPage} />
			<Route path='/painel' component={MainPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/news' exact component={AddNewsPage} />
			<Route path='/news/:id' component={NewsPage} />
		</Switch>
	</BrowserRouter>
);

export default Router;
