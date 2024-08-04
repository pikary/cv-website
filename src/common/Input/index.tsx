import React from 'react';
import { useField } from 'formik';
import './styles.scss';

interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	labelText: string;
	onChange?: () => void;
}
//totest husky2
//totest husky
const Input: React.FC<InputProps> = ({ labelText, onChange, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='input'>
			<label htmlFor={props.name}>{labelText}</label>
			<input
				{...field}
				{...props}
				id={props.name}
				className='input'
			></input>
			{meta.error && meta.touched && (
				<p className='input__error'>{meta.error}</p>
			)}
		</div>
	);
};

export default Input;
