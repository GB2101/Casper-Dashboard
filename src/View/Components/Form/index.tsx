import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../../Application/Actions/login';

import './style.css';

const Form: FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [ password, setPassword ] = useState('');

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
	const handleClick = () => dispatch(login(password, history.push));

	return (
		<div>
			<label className='form'>
				<h1>Senha</h1>
				<input type='password' placeholder='insira sua senha' onChange={handleInput} />
				<button onClick={handleClick}>Entrar</button>
			</label>
		</div>
	);
};

export default Form;
