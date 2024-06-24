import React from 'react';
import './styles.scss';
interface InfoBlockProps {
	text: string;
}

const Info: React.FC<InfoBlockProps> = (props) => {
	const { text } = props;
	return (
		<div className='info'>
			<p>{text}</p>
		</div>
	);
};
export default Info;
