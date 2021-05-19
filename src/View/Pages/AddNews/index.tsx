import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Theme, NEWS } from '../../../Application/Actions/table';
import { AddNews, UpdateNews } from '../../../Application/Middleware/table';
import { selectLogged } from '../../../Application/Selectors/login';
import { selectRow } from '../../../Application/Selectors/table';

import Header from '../../Components/Header';
import Field, { Fields, ChangeFunction, InputFile } from '../../Components/Field';

import './style.css';

interface STRING {
	[key: string]: boolean;
}

interface CHECK extends STRING {
	theme: boolean,
	title: boolean,
	description: boolean,
	message: boolean,
}

const InitialState: NEWS = {
	_id: '',
	theme: Theme.esportes,
	title: '',
	description: '',
	image: '',
	message: '',
	link: '',
};

const InitialCheck: CHECK = {
	theme: true,
	title: false,
	description: false,
	message: false,
};

const News: FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const logged = useSelector(selectLogged);

	if (!logged) {
		history.push('/login');
	}

	type pageState = ({ index: number } | undefined);
	const page: pageState = history.location.state as pageState;
	let index = 0;

	if (page) {
		const ind = page.index;
		index = ind;

		for (const key in InitialCheck) {
			InitialCheck[key] = true;
		}
	}

	const editValue = useSelector(selectRow(index));
	const initState = page ? editValue : InitialState;

	const [ state, setState ] = useState<NEWS>(initState);

	const [ check, setCheck ] = useState<CHECK>(InitialCheck);

	const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		const theme = Theme[value as keyof typeof Theme];

		setState(prevState => ({
			...prevState,
			theme,
		}));
		setCheck(prevCheck => ({
			...prevCheck,
			theme: true,
		}));
	};

	const handleInput: ChangeFunction = (field: Fields) => [
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			setState(prevState => ({
				...prevState,
				[field]: event.target.value,
			}));
			setCheck(prevCheck => ({
				...prevCheck,
				[field]: true,
			}));
		},
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setState(prevState => ({
				...prevState,
				[field]: event.target.value,
			}));
			setCheck(prevCheck => ({
				...prevCheck,
				[field]: true,
			}));
		},
	];

	const handleSubmit = () => {
		let completed = true;

		for (const key in check) {
			completed = completed && check[key];
		}

		if (completed) {
			history.push('/painel');

			if (page) {
				dispatch(UpdateNews(state));
			} else {
				dispatch(AddNews(state));
			}
		} else {
			alert('Você não preencheu todos os campos');
		}
	};

	return (
		<div className='news'>
			<Header />
			<form className='news-form' onSubmit={handleSubmit}>
				<label className='news-selector'>
					Escolha um Tema
					<select onChange={handleSelection} value={state.theme}>
						<option value={Theme.esportes}>Esportes</option>
						<option value={Theme.politica}>Politica</option>
						<option value={Theme.entretenimento}>Entretenimento</option>
						<option value={Theme.famosos}>Famosos</option>
					</select>
				</label>

				<Field id={Fields.title} title='Titulo' type='input' value={state.title} onChange={handleInput} />
				<Field id={Fields.description} title='Descrição' type='input' value={state.description} onChange={handleInput} />
				<Field id={Fields.message} title='Notícia' type='text' value={state.message} onChange={handleInput} />
				<InputFile id={Fields.image} title='Imagem' type='file' value={state.image} onUpload={setState} />

				<button className='news-button' type='submit'>Salvar</button>
			</form>
		</div>
	);
};

export default News;
