import React, { ReactNode } from 'react';
import './styles.scss';
interface BoxProps {
	id: string;
	title: string;
	children: ReactNode;
}

const Box: React.FC<BoxProps> = (props) => {
	const { title, children, id } = props;
	return (
		<article className='box' id={id}>
			<h3 className='box__title'>{title}</h3>
			{children}
		</article>
	);
};

export default Box;
