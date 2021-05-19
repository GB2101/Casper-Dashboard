import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';

import { selectLogged } from '../../../Application/Selectors/login';

import Header from '../../Components/Header';
import Table from '../../Components/Table';
import './style.css';

const Main: FC = () => {
	const history = useHistory();
	const logged = useSelector(selectLogged);

	if (!logged) {
		history.push('/login');
	}

	return (
		<div>
			<Header />
			<div className='main'>
				<Table />
			</div>

			<Link to='/news' className='floating-button' title='Adicionar Notícia'>
				<MdAdd color='#ffffff' />
			</Link>
		</div>
	);
};

export default Main;
