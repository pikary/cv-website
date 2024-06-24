import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItemProps {
	ind: number;
	title: string;
	description: string;
	link: string;
	img: string;
	className: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
	const { ind, title, description, link, img, className } = props;
	return (
		<div
			key={ind}
			className={`portfolio__content__item ${className}`}
			style={{
				background: `url(${img})`,
				backgroundSize: 'cover',
			}}
		>
			<div className='portfolio__content__item__info'>
				<h5 className='portfolio__content__item__info-header'>
					{title}
				</h5>
				<p className='portfolio__content__item__info-text'>
					{description}
				</p>
				<Link to={link} className='portfolio__content__item__info-link'>
					View resource
				</Link>
			</div>
		</div>
	);
};

export default PortfolioItem;
