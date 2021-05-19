import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdFormatListBulleted as ThemeIcon } from 'react-icons/md';

import { selectTable } from '../../../Application/Selectors/table';
import { ListNews } from '../../../Application/Middleware/table';

import TableRow from '../TableRow';
import './style.css';

const Table: FC = () => {
	const dispatch = useDispatch();
	let DATA = useSelector(selectTable);

	if (DATA.length === 0) {
		dispatch(ListNews());
		DATA = useSelector(selectTable);
	}

	return (
		<>
			<div className='table'>
				<div className='table-header'>
					<h1 className='table-theme'>
						<ThemeIcon />
					</h1>
					<h1 className='table-cell'>Título</h1>
					<h1 className='table-cell'>Descrição</h1>
					<h1 className='table-cell'>Link</h1>
					<h1 className='table-cell'>Imagem</h1>
				</div>
				{DATA.map((news, index) => <TableRow key={index} {...news } index={index} />)}
			</div>
		</>
	);
};

export default Table;
