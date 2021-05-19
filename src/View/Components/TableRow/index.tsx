import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GiPublicSpeaker } from 'react-icons/gi';
import {
	MdEdit,
	MdDelete,
	MdArrowDropDownCircle,
	MdDirectionsRun, MdTv,
	MdStars,
} from 'react-icons/md';

import { DeleteNews } from '../../../Application/Middleware/table';

import './style.css';

interface Props {
	_id: string;
	index: number;
	theme: string;
	title: string;
	description: string;
	link: string;
	image: string;
}

const TableRow: FC<Props> = props => {
	const history = useHistory();
	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(DeleteNews(props._id));
	};

	const onEdit = () => {
		history.push('/news', {
			index: props.index,
		});
	};

	let IconTheme: IconType = MdArrowDropDownCircle;
	let color = '#ff0000';

	switch (props.theme) {
		case 'esportes':
			IconTheme = MdDirectionsRun;
			color = '#bf2e1b';
			break;
		case 'politica':
			IconTheme = GiPublicSpeaker;
			color = '#1c2e4a';
			break;
		case 'entretenimento':
			IconTheme = MdTv;
			color = '#009dff';
			break;
		case 'famosos':
			IconTheme = MdStars;
			color = '#cc004c';
			break;
	}

	return (
		<div className='row'>
			<button className='hover' title='Deletar' onClick={onDelete}>
				<MdDelete />
			</button>
			<button className='hover' title='Editar' onClick={onEdit}>
				<MdEdit />
			</button>

			<h1 className='row-theme' title={props.theme}>
				<IconTheme color={color} />
			</h1>
			<h1 className='row-cell'>{props.title}</h1>
			<h1 className='row-cell'>{props.description}</h1>
			<h1 className='row-cell'>
				<a href={props.link} target='_blank' rel='noreferrer'>{props.link}</a>
			</h1>
			<h1 className='row-cell'>
				<a href={props.image} target='_blank' rel='noreferrer'>{props.image}</a>
			</h1>

			<span className='hidden'></span>
			<span className='hidden'></span>
		</div>
	);
};

export default TableRow;
