import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header';
import './style.css';

const LandingPage: FC = () => (
	<div className='landing-page'>
		<Header />
		<Link to='/login' className='page-link'>Fazer Login</Link>
	</div>
);

export default LandingPage;
