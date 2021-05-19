import { combineReducers } from 'redux';

import Login from './login';
import Table from './table';
import News from './news';

const reducers = combineReducers({ Login, Table, News });

export default reducers;
