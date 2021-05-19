import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReadNews } from '../../../Application/Middleware/news';
import { selectNews } from '../../../Application/Selectors/news';

import Header from '../../Components/Header';

import './style.css';

interface route {
	id: string;
}

const News: FC = () => {
	const { id } = useParams<route>();
	const dispatch = useDispatch();
	dispatch(ReadNews(id));

	const news = useSelector(selectNews);

	return (
		<div className='news'>
			<Header />
			<div className='news-body'>
				<h1>{news.title}</h1>
				<h2>{news.description}</h2>
				<img src={news.image} />
				<p>{news.message}</p>
			</div>
		</div>
	);
};

export default News;
