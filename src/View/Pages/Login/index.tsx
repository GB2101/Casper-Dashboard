import React, { FC } from 'react';

import Header from '../../Components/Header';
import Form from '../../Components/Form';
import './style.css';

const Login: FC = () => (
	<div className='login'>
		<Header />
		<div className='login-content'>
			<Form />
		</div>
	</div>
);

export default Login;
