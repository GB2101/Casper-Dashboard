import React, { FC, useState } from 'react';

import { nanoid } from 'nanoid';
import { storage } from '../../../Services/Firebase';

import { NEWS } from '../../../Application/Actions/table';
import './style.css';

export enum Fields {
	title = 'title',
	description = 'description',
	image = 'image',
	message = 'message',
}

export type ChangeFunction = (field: Fields) => [
	(event: React.ChangeEvent<HTMLTextAreaElement>) => void,
	(event: React.ChangeEvent<HTMLInputElement>) => void,
];

interface Props {
	title: string;
	type: string;
	id: Fields;
	value: string;
	onChange: ChangeFunction;
}

const Field: FC<Props> = props => {
	const cssclass = `field-input ${props.type}`;
	const handleInput = props.onChange(props.id);

	return (
		<label className='field-label'>
			{props.title}
			{
				props.type === 'text'
					? <textarea
						className={cssclass}
						placeholder='Insira aqui...'
						value={props.value}
						onChange={handleInput[0]}
					/>
					: <input
						className={cssclass}
						placeholder='Insira aqui...'
						type={props.type}
						value={props.value}
						onChange={handleInput[1]}
					/>
			}
		</label>
	);
};

interface FileProps {
	title: string;
	type: string;
	id: Fields;
	value: string;
	onUpload: React.Dispatch<React.SetStateAction<NEWS>>;
}

export const InputFile: FC<FileProps> = props => {
	const [ image, setImage ] = useState(props.value);

	const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.item(0);
		if (!file) {
			return;
		}

		const id = nanoid();
		const imageName = `${id}.img`;
		const ref = storage.ref().child(`images/${imageName}`);

		const upload = ref.put(file);
		upload.on(
			'state_changed',
			() => ({}),
			error => console.log(error),
			async () => {
				const url = await storage.ref().child(`images/${imageName}`).getDownloadURL();
				setImage(url);
				props.onUpload(prevState => ({
					...prevState,
					image: url,
				}));
			},
		);
	};

	return (
		<label className='field-label'>
			{props.title}
			<div className='field-image'>
				<input
					className='image-input'
					placeholder='Insira aqui...'
					type={props.type}
					onChange={handleFile}
				></input>
				{
					image
						? <img className='image-display' alt='Adicionar' src={image} />
						: ''
				}
			</div>
		</label>
	);
};

export default Field;
