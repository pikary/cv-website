import React from 'react';
import './styles.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { onClick, className, type, children,disabled } = props;
	return (
		<button type={type} onClick={onClick} className={'button ' + className} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
