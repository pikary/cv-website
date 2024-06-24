import React from 'react';
import './styles.scss';

interface PhotoBoxProps {
	name: string;
	title?: string;
	description?: string;
	avatar: string;
	className?: 'mini';
}
const PhotoBox: React.FC<PhotoBoxProps> = (props) => {
	const { name, title, description, avatar, className } = props;

	return (
		<div className={`photobox ${className}`}>
			<img src={avatar}></img>
			<h1>{name}</h1>
			{title && <h2>{title}</h2>}
			{description && <p>{description}</p>}
		</div>
	);
};

export default PhotoBox;
